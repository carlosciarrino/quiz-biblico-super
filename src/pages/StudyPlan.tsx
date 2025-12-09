import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { Language } from '@/types/quiz';

interface StudyGoal {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  completed: boolean;
  progress: number;
}

const labels = {
  it: {
    title: 'Piano di Studio',
    subtitle: 'Organizza i tuoi obiettivi di studio biblico',
    addGoal: 'Aggiungi Obiettivo',
    goalTitle: 'Titolo obiettivo',
    goalDescription: 'Descrizione',
    targetDate: 'Data obiettivo',
    progress: 'Progresso',
    completed: 'Completato',
    delete: 'Elimina',
    save: 'Salva',
    cancel: 'Annulla',
    noGoals: 'Nessun obiettivo impostato. Inizia ad aggiungere i tuoi obiettivi di studio!',
    backToHome: 'Torna alla Home'
  },
  en: {
    title: 'Study Plan',
    subtitle: 'Organize your Bible study goals',
    addGoal: 'Add Goal',
    goalTitle: 'Goal title',
    goalDescription: 'Description',
    targetDate: 'Target date',
    progress: 'Progress',
    completed: 'Completed',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    noGoals: 'No goals set. Start adding your study goals!',
    backToHome: 'Back to Home'
  },
  es: {
    title: 'Plan de Estudio',
    subtitle: 'Organiza tus objetivos de estudio bíblico',
    addGoal: 'Agregar Objetivo',
    goalTitle: 'Título del objetivo',
    goalDescription: 'Descripción',
    targetDate: 'Fecha objetivo',
    progress: 'Progreso',
    completed: 'Completado',
    delete: 'Eliminar',
    save: 'Guardar',
    cancel: 'Cancelar',
    noGoals: '¡No hay objetivos establecidos. Comienza a agregar tus objetivos de estudio!',
    backToHome: 'Volver al Inicio'
  },
  pt: {
    title: 'Plano de Estudo',
    subtitle: 'Organize seus objetivos de estudo bíblico',
    addGoal: 'Adicionar Objetivo',
    goalTitle: 'Título do objetivo',
    goalDescription: 'Descrição',
    targetDate: 'Data objetivo',
    progress: 'Progresso',
    completed: 'Concluído',
    delete: 'Excluir',
    save: 'Salvar',
    cancel: 'Cancelar',
    noGoals: 'Nenhum objetivo definido. Comece a adicionar seus objetivos de estudo!',
    backToHome: 'Voltar ao Início'
  },
  fr: {
    title: "Plan d'Étude",
    subtitle: "Organisez vos objectifs d'étude biblique",
    addGoal: 'Ajouter un Objectif',
    goalTitle: "Titre de l'objectif",
    goalDescription: 'Description',
    targetDate: 'Date cible',
    progress: 'Progrès',
    completed: 'Terminé',
    delete: 'Supprimer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    noGoals: "Aucun objectif défini. Commencez à ajouter vos objectifs d'étude !",
    backToHome: "Retour à l'Accueil"
  }
};

export default function StudyPlan() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('it');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [goals, setGoals] = useState<StudyGoal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: '', description: '', targetDate: new Date() });

  const t = labels[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('quizLanguage') as Language;
    if (savedLanguage) setLanguage(savedLanguage);

    const savedGoals = localStorage.getItem('studyGoals');
    if (savedGoals) {
      const parsedGoals = JSON.parse(savedGoals);
      setGoals(parsedGoals.map((g: StudyGoal) => ({
        ...g,
        targetDate: new Date(g.targetDate)
      })));
    }
  }, []);

  const saveGoals = (updatedGoals: StudyGoal[]) => {
    localStorage.setItem('studyGoals', JSON.stringify(updatedGoals));
    setGoals(updatedGoals);
  };

  const handleAddGoal = () => {
    if (!newGoal.title) return;
    
    const goal: StudyGoal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      targetDate: selectedDate || new Date(),
      completed: false,
      progress: 0
    };
    
    saveGoals([...goals, goal]);
    setNewGoal({ title: '', description: '', targetDate: new Date() });
    setIsAddingGoal(false);
  };

  const handleDeleteGoal = (id: string) => {
    saveGoals(goals.filter(g => g.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    saveGoals(goals.map(g => 
      g.id === id ? { ...g, completed: !g.completed, progress: !g.completed ? 100 : g.progress } : g
    ));
  };

  const handleUpdateProgress = (id: string, progress: number) => {
    saveGoals(goals.map(g => 
      g.id === id ? { ...g, progress, completed: progress === 100 } : g
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background p-4">
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToHome}
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendario</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.title}</CardTitle>
              <CardDescription>{t.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isAddingGoal && (
                <Button onClick={() => setIsAddingGoal(true)} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  {t.addGoal}
                </Button>
              )}

              {isAddingGoal && (
                <div className="space-y-3 p-4 border rounded-lg bg-card">
                  <Input
                    placeholder={t.goalTitle}
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  />
                  <Textarea
                    placeholder={t.goalDescription}
                    value={newGoal.description}
                    onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddGoal} className="flex-1">
                      {t.save}
                    </Button>
                    <Button onClick={() => setIsAddingGoal(false)} variant="outline" className="flex-1">
                      {t.cancel}
                    </Button>
                  </div>
                </div>
              )}

              {goals.length === 0 && !isAddingGoal && (
                <p className="text-center text-muted-foreground py-8">{t.noGoals}</p>
              )}

              {goals.map((goal) => (
                <Card key={goal.id} className={goal.completed ? 'bg-success/5 border-success/20' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-2 flex-1">
                        <button
                          onClick={() => handleToggleComplete(goal.id)}
                          className="mt-1 transition-colors"
                        >
                          {goal.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-success" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${goal.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {goal.title}
                          </h3>
                          {goal.description && (
                            <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            {t.targetDate}: {goal.targetDate.toLocaleDateString(language)}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDeleteGoal(goal.id)}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    {!goal.completed && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{t.progress}</span>
                          <span>{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} />
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={goal.progress}
                          onChange={(e) => handleUpdateProgress(goal.id, parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
