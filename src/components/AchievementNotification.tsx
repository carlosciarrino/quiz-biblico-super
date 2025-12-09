import { useEffect, useState } from 'react';
import { Achievement } from '../types/achievement';
import { Trophy } from 'lucide-react';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const AchievementNotification = ({ achievement, onClose }: AchievementNotificationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (achievement) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4 rounded-xl shadow-[var(--shadow-lg)] min-w-[300px]">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm opacity-90">Achievement Unlocked!</p>
            <h4 className="text-lg font-bold flex items-center gap-2">
              <span>{achievement.icon}</span>
              <span>{achievement.name}</span>
            </h4>
            <p className="text-sm opacity-90">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementNotification;