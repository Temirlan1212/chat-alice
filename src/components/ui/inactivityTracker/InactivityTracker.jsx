import { useEffect, useState } from "react";

const InactivityTracker = ({ timeoutDuration = 3 * 60 * 1000, onInactive }) => {
  const [isUserActive, setIsUserActive] = useState(true);
  let inactivityTimeout;

  const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      setIsUserActive(false);
      if (onInactive) {
        onInactive();
      }
    }, timeoutDuration);
  };

  const handleUserActivity = () => {
    setIsUserActive(true);
    resetInactivityTimeout();
  };

  useEffect(() => {
    resetInactivityTimeout();

    document.addEventListener("touchstart", handleUserActivity);
    document.addEventListener("mousedown", handleUserActivity);

    return () => {
      clearTimeout(inactivityTimeout);
      document.removeEventListener("touchstart", handleUserActivity);
      document.removeEventListener("mousedown", handleUserActivity);
    };
  }, []);
};

export default InactivityTracker;
