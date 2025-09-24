import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto", respectHash = true }) {
  const location = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (respectHash && location.hash) {
        const id = decodeURIComponent(location.hash.replace("#", ""));
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior });
    });
  }, [location.pathname, location.search, location.hash, behavior, respectHash]);

  return null;
}
