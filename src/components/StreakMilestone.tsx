import { useEffect, useState } from 'react';
import { Flame, Award } from 'lucide-react';

interface StreakMilestoneProps {
  streak: number;
  onClose: () => void;
}

const StreakMilestone = ({ streak, onClose }: StreakMilestoneProps) => {
  const [show, setShow] = useState(false);
  
  const milestones = [
    { streak: 7, badge: '🔥', title: '7 Day Streak!', message: 'You\'re on fire!' },
    { streak: 30, badge: '⚡', title: '30 Day Streak!', message: 'Incredible dedication!' },
    { streak: 100, badge: '👑', title: '100 Day Streak!', message: 'You\'re a legend!' },
  ];

  const milestone = milestones.find(m => m.streak === streak);

  useEffect(() => {
    if (milestone) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 500);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [milestone, onClose]);

  if (!milestone) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      show ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className={`relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-8 rounded-3xl shadow-2xl max-w-md mx-4 transform transition-all duration-500 ${
        show ? 'scale-100 rotate-0' : 'scale-0 rotate-12'
      }`}>
        <div className="text-center">
          <div className="text-8xl mb-4 animate-bounce">
            {milestone.badge}
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flame className="w-8 h-8 text-white animate-pulse" />
            <h2 className="text-4xl font-bold text-white">{milestone.title}</h2>
            <Flame className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-xl text-white/90 mb-6">{milestone.message}</p>
          
          <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Award className="w-6 h-6 text-white" />
            <span className="text-2xl font-bold text-white">{streak} Days</span>
          </div>
        </div>
        
        {/* Confetti effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreakMilestone;
