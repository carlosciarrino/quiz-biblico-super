import { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'warning' | 'info';
  show: boolean;
  onHide: () => void;
}

const Notification = ({ message, type, show, onHide }: NotificationProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  const config = {
    success: {
      icon: CheckCircle,
      bgClass: 'bg-success text-success-foreground',
      borderClass: 'border-success'
    },
    warning: {
      icon: AlertCircle,
      bgClass: 'bg-warning text-warning-foreground',
      borderClass: 'border-warning'
    },
    info: {
      icon: Info,
      bgClass: 'bg-primary text-primary-foreground',
      borderClass: 'border-primary'
    }
  };

  const { icon: Icon, bgClass, borderClass } = config[type];

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 duration-300">
      <div className={`${bgClass} ${borderClass} border-l-4 rounded-lg shadow-[var(--shadow-lg)] p-4 max-w-md flex items-center gap-3`}>
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onHide}
          className="hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
