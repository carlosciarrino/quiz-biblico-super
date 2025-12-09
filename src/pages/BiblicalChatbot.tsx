import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Copy, RotateCw, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Language } from '../types/quiz';
import { biblicalTopics, chatbotTranslations, suggestedQuestions } from '../data/biblicalContent';
import { loadUserStats, saveUserStats, initializeAchievements } from '../utils/achievements';
import AchievementNotification from '../components/AchievementNotification';
import { Achievement } from '../types/achievement';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  topic?: string;
}

const BiblicalChatbot = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentLanguage] = useState<Language>(() => {
    return (localStorage.getItem('quiz_language') as Language) || 'it';
  });
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [messageCount, setMessageCount] = useState(() => {
    return parseInt(localStorage.getItem('chatbot_messages') || '0');
  });
  const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = chatbotTranslations[currentLanguage];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkChatbotAchievement = () => {
    const stats = loadUserStats();
    const chatbotAchievement = stats.achievements.find(a => a.id === 'chatbot_10');
    
    if (!chatbotAchievement) {
      // Add chatbot achievement if it doesn't exist
      const newAchievements = initializeAchievements(currentLanguage);
      const chatbotBadge = {
        id: 'chatbot_10',
        name: t.chatbotBadge,
        description: t.chatbotBadgeDesc,
        icon: '💬',
        unlocked: messageCount >= 10,
        requirement: 10,
        progress: messageCount,
        unlockedAt: messageCount >= 10 ? new Date() : undefined
      };
      stats.achievements.push(chatbotBadge);
      saveUserStats(stats);
      
      if (messageCount >= 10) {
        setUnlockedAchievement(chatbotBadge);
      }
    } else if (!chatbotAchievement.unlocked && messageCount >= 10) {
      chatbotAchievement.unlocked = true;
      chatbotAchievement.progress = messageCount;
      chatbotAchievement.unlockedAt = new Date();
      saveUserStats(stats);
      setUnlockedAchievement(chatbotAchievement);
    }
  };

  const generateResponse = (userMessage: string, topic: string) => {
    const selectedTopicData = biblicalTopics.find(t => t.id === topic);
    if (!selectedTopicData) return '';

    const responses = selectedTopicData.responses[currentLanguage];
    const verses = selectedTopicData.verses[currentLanguage];
    
    // Select a random response and verse
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    
    return `${randomResponse}\n\n📖 "${randomVerse.text}"\n— ${randomVerse.ref}`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || !selectedTopic) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      topic: selectedTopic
    };

    const response = generateResponse(inputValue, selectedTopic);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      topic: selectedTopic
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInputValue('');

    const newCount = messageCount + 1;
    setMessageCount(newCount);
    localStorage.setItem('chatbot_messages', newCount.toString());
    
    checkChatbotAchievement();
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    toast({
      title: t.copied,
      duration: 2000,
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRegenerate = (messageId: string) => {
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex === -1) return;

    const message = messages[messageIndex];
    const previousMessage = messages[messageIndex - 1];
    
    if (message.role === 'assistant' && previousMessage?.role === 'user' && message.topic) {
      const newResponse = generateResponse(previousMessage.content, message.topic);
      const updatedMessages = [...messages];
      updatedMessages[messageIndex] = {
        ...message,
        content: newResponse,
        id: Date.now().toString()
      };
      setMessages(updatedMessages);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <AchievementNotification 
          achievement={unlockedAchievement}
          onClose={() => setUnlockedAchievement(null)}
        />
        
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">{messageCount}</span>
            <span className="text-sm text-muted-foreground">{t.interactions}</span>
          </div>
        </div>

        {!selectedTopic ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {biblicalTopics.filter(topic => topic && topic.name).map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className="p-6 bg-card border-2 border-border rounded-xl hover:border-primary transition-all hover:shadow-lg text-left group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {topic.name[currentLanguage]}
                </h3>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
            <div className="bg-primary/10 p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {biblicalTopics.find(t => t.id === selectedTopic)?.icon}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {biblicalTopics.find(t => t.id === selectedTopic)?.name[currentLanguage]}
                  </h2>
                  <p className="text-sm text-muted-foreground">{t.selectTopic}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedTopic(null);
                  setMessages([]);
                }}
              >
                {t.back}
              </Button>
            </div>

            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">{t.suggestedQuestions}</p>
                  <div className="mt-4 space-y-2">
                    {suggestedQuestions[selectedTopic]?.[currentLanguage]?.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="block w-full text-left p-3 bg-secondary/50 hover:bg-secondary rounded-lg text-sm transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-4 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.role === 'assistant' && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(message.content, message.id)}
                          className="gap-2"
                        >
                          {copiedId === message.id ? (
                            <>
                              <Check className="w-4 h-4" />
                              {t.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              {t.copy}
                            </>
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRegenerate(message.id)}
                          className="gap-2"
                        >
                          <RotateCw className="w-4 h-4" />
                          {t.regenerate}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-border bg-secondary/20">
              <div className="flex gap-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder={t.typeMessage}
                  className="resize-none"
                  rows={2}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t.send}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiblicalChatbot;