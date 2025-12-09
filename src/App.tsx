import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BibleReader from "./pages/BibleReader";
import FriendChallenge from "./pages/FriendChallenge";
import StudyPlan from './pages/StudyPlan';
import Notes from './pages/Notes';
import QuizRecommendations from './pages/QuizRecommendations';
import BiblicalChatbot from './pages/BiblicalChatbot';
import StatsDashboard from './pages/StatsDashboard';
import Leaderboard from './pages/Leaderboard';
import Challenges from './pages/Challenges';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bible" element={<BibleReader />} />
          <Route path="/challenge" element={<FriendChallenge />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/recommendations" element={<QuizRecommendations />} />
          <Route path="/chatbot" element={<BiblicalChatbot />} />
          <Route path="/stats" element={<StatsDashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/challenges" element={<Challenges />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
