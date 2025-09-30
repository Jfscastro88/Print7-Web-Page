import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to handle scroll-to-top functionality
 * This can be used in individual pages as a fallback
 */
export const useScrollToTop = (behavior = "smooth") => {
  const location = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Then smooth scroll if behavior is smooth
    if (behavior === "smooth") {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, behavior]);
};
