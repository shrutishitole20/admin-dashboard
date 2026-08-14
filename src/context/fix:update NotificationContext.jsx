import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Remove a notification
  const removeNotification = useCallback((id) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== id)
    );
  }, []);

  // Add a notification
  const addNotification = useCallback(
    (message, type = 'info', duration = 3000) => {
      const id = Date.now();

      const notification = {
        id,
        message,
        type,
      };

      setNotifications((prev) => [...prev, notification]);

      if (duration) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }

      return id;
    },
    [removeNotification]
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }

  return context;
};

export default NotificationContext;
