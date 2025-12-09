import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import { Language } from '@/types/quiz';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const labels = {
  it: {
    title: 'Note e Appunti',
    subtitle: 'Salva le tue riflessioni durante lo studio biblico',
    addNote: 'Nuova Nota',
    noteTitle: 'Titolo',
    noteContent: 'Scrivi qui le tue riflessioni...',
    save: 'Salva',
    cancel: 'Annulla',
    edit: 'Modifica',
    delete: 'Elimina',
    noNotes: 'Nessuna nota salvata. Inizia a scrivere le tue riflessioni!',
    backToHome: 'Torna alla Home',
    created: 'Creata',
    updated: 'Aggiornata'
  },
  en: {
    title: 'Notes & Reflections',
    subtitle: 'Save your reflections during Bible study',
    addNote: 'New Note',
    noteTitle: 'Title',
    noteContent: 'Write your reflections here...',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    noNotes: 'No notes saved. Start writing your reflections!',
    backToHome: 'Back to Home',
    created: 'Created',
    updated: 'Updated'
  },
  es: {
    title: 'Notas y Apuntes',
    subtitle: 'Guarda tus reflexiones durante el estudio bíblico',
    addNote: 'Nueva Nota',
    noteTitle: 'Título',
    noteContent: 'Escribe tus reflexiones aquí...',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Eliminar',
    noNotes: '¡No hay notas guardadas. Comienza a escribir tus reflexiones!',
    backToHome: 'Volver al Inicio',
    created: 'Creada',
    updated: 'Actualizada'
  },
  pt: {
    title: 'Notas e Apontamentos',
    subtitle: 'Salve suas reflexões durante o estudo bíblico',
    addNote: 'Nova Nota',
    noteTitle: 'Título',
    noteContent: 'Escreva suas reflexões aqui...',
    save: 'Salvar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Excluir',
    noNotes: 'Nenhuma nota salva. Comece a escrever suas reflexões!',
    backToHome: 'Voltar ao Início',
    created: 'Criada',
    updated: 'Atualizada'
  },
  fr: {
    title: 'Notes et Réflexions',
    subtitle: "Enregistrez vos réflexions pendant l'étude biblique",
    addNote: 'Nouvelle Note',
    noteTitle: 'Titre',
    noteContent: 'Écrivez vos réflexions ici...',
    save: 'Enregistrer',
    cancel: 'Annuler',
    edit: 'Modifier',
    delete: 'Supprimer',
    noNotes: 'Aucune note enregistrée. Commencez à écrire vos réflexions !',
    backToHome: "Retour à l'Accueil",
    created: 'Créée',
    updated: 'Mise à jour'
  }
};

export default function Notes() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('it');
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });

  const t = labels[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('quizLanguage') as Language;
    if (savedLanguage) setLanguage(savedLanguage);

    const savedNotes = localStorage.getItem('bibleNotes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      setNotes(parsedNotes.map((n: Note) => ({
        ...n,
        createdAt: new Date(n.createdAt),
        updatedAt: new Date(n.updatedAt)
      })));
    }
  }, []);

  const saveNotes = (updatedNotes: Note[]) => {
    localStorage.setItem('bibleNotes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (!currentNote.title || !currentNote.content) return;

    const note: Note = {
      id: Date.now().toString(),
      title: currentNote.title,
      content: currentNote.content,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    saveNotes([note, ...notes]);
    setCurrentNote({ title: '', content: '' });
    setIsAddingNote(false);
  };

  const handleEditNote = (note: Note) => {
    setEditingNoteId(note.id);
    setCurrentNote({ title: note.title, content: note.content });
  };

  const handleUpdateNote = () => {
    if (!currentNote.title || !currentNote.content) return;

    saveNotes(notes.map(n =>
      n.id === editingNoteId
        ? { ...n, title: currentNote.title, content: currentNote.content, updatedAt: new Date() }
        : n
    ));
    setCurrentNote({ title: '', content: '' });
    setEditingNoteId(null);
  };

  const handleDeleteNote = (id: string) => {
    saveNotes(notes.filter(n => n.id !== id));
  };

  const handleCancel = () => {
    setCurrentNote({ title: '', content: '' });
    setIsAddingNote(false);
    setEditingNoteId(null);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background p-4">
      <div className="max-w-4xl mx-auto">
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

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
            <CardDescription>{t.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            {!isAddingNote && !editingNoteId && (
              <Button onClick={() => setIsAddingNote(true)} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                {t.addNote}
              </Button>
            )}

            {(isAddingNote || editingNoteId) && (
              <div className="space-y-4">
                <Input
                  placeholder={t.noteTitle}
                  value={currentNote.title}
                  onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                />
                <Textarea
                  placeholder={t.noteContent}
                  value={currentNote.content}
                  onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
                  className="min-h-[200px]"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={editingNoteId ? handleUpdateNote : handleAddNote}
                    className="flex-1"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {t.save}
                  </Button>
                  <Button onClick={handleCancel} variant="outline" className="flex-1">
                    <X className="w-4 h-4 mr-2" />
                    {t.cancel}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {notes.length === 0 && !isAddingNote && (
          <Card>
            <CardContent className="py-12">
              <p className="text-center text-muted-foreground">{t.noNotes}</p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {notes.map((note) => (
            <Card key={note.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{note.title}</CardTitle>
                    <CardDescription>
                      {t.created}: {formatDate(note.createdAt)}
                      {note.updatedAt.getTime() !== note.createdAt.getTime() && (
                        <> • {t.updated}: {formatDate(note.updatedAt)}</>
                      )}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditNote(note)}
                      variant="ghost"
                      size="sm"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteNote(note.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-foreground">{note.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
