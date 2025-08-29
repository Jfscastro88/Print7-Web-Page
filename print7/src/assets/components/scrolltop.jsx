import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — forza lo scroll in alto quando cambia la route.
 *
 * Props:
 * - behavior: 'auto' | 'smooth' (default 'auto')
 * - respectHash: boolean — se true e c'è un #ancora nell'URL, prova a scrollare a quell'elemento invece che in alto (default true)
 */
export default function ScrollToTop({ behavior = 'auto', respectHash = true }) {
    const location = useLocation();

    useEffect(() => {
    // Rimanda allo step successivo del painting, così il DOM della nuova pagina è pronto
    requestAnimationFrame(() => {
        if (respectHash && location.hash) {
        const id = decodeURIComponent(location.hash.replace('#', ''));
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
