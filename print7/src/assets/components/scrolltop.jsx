import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "smooth", respectHash = true }) {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      if (respectHash && location.hash) {
        const id = decodeURIComponent(location.hash.replace("#", ""));
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.hash, behavior, respectHash]);

  return null;
}
