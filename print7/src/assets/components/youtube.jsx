import { Container, Title } from "@mantine/core";

// Helper: parse seconds from values like "90", "1m30s", "2h3m", etc.
function parseTimeToSeconds(value) {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  const m = String(value).match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i);
  if (!m) return 0;
  const h = parseInt(m[1] || "0", 10);
  const mm = parseInt(m[2] || "0", 10);
  const s = parseInt(m[3] || "0", 10);
  return h * 3600 + mm * 60 + s;
}

// Helper: extract { id, start } from a YouTube URL or ID
function extractFromInput(input) {
  if (!input) return { id: undefined, start: 0 };
  // If it's already an ID
  if (/^[A-Za-z0-9_-]{6,}$/.test(input) && !/\//.test(input)) {
    return { id: input, start: 0 };
  }
  try {
    const url = new URL(input);
    // Standard watch URL
    const v = url.searchParams.get("v");
    // shorts or embed or youtu.be formats
    const shortId = url.pathname.match(/\/shorts\/([A-Za-z0-9_-]{6,})/i)?.[1];
    const embedId = url.pathname.match(/\/embed\/([A-Za-z0-9_-]{6,})/i)?.[1];
    const beId = url.hostname.includes("youtu.be") ? url.pathname.slice(1) : undefined;
    const id = v || shortId || embedId || beId;

    // start time can be "t" or "start"
    let start = 0;
    const t = url.searchParams.get("t") || url.hash.replace("#", "").split("=")[1];
    const startParam = url.searchParams.get("start");
    if (t) start = parseTimeToSeconds(t);
    if (startParam) start = parseInt(startParam, 10) || start;
    return { id, start };
  } catch {
    // Not a valid URL, fallback to treating it as an ID
    return { id: input, start: 0 };
  }
}

/**
 * Youtube component (section) — autoplay, loop, muted by default.
 *
 * Props:
 * - url?: string            // YouTube full URL (watch, youtu.be, shorts, embed...).
 * - videoId?: string        // In alternativa, passa direttamente l'ID.
 * - start?: number          // Secondo iniziale opzionale (se non lo ricaviamo da url)
 * - title?: string          // Titolo opzionale mostrato sopra al video
 * - heightVh?: number       // Altezza in vh (default 30)
 * - autoplay?: boolean      // default true
 * - muted?: boolean         // default true (necessario per autoplay)
 * - loop?: boolean          // default true
 * - controls?: boolean      // default false
 * - className?: string      // classi extra per la <section>
 */
export default function Youtube({
  url,
  videoId,
  start,
  title = "Guarda il nostro lavoro in 30 secondi",
  heightVh = 30,
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  className = "",
}) {
  const extracted = extractFromInput(url || videoId);
  const id = extracted.id;
  const startSeconds = typeof start === "number" ? start : extracted.start || 0;

  if (!id) return null; // niente da mostrare

  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: muted ? "1" : "0",
    controls: controls ? "1" : "0",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });
  if (loop) {
    params.set("loop", "1");
    params.set("playlist", id);
  }
  if (startSeconds > 0) params.set("start", String(startSeconds));

  const src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;

  return (
    <section className={`relative bg-white ${className}`}>
      <Container size="lg" className="py-8">
        {title && (
          <Title order={3} className="mb-4 text-center text-white">
            {title}
          </Title>
        )}
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10"
          style={{ height: `${heightVh}vh` }}
        >
          <iframe
            src={src}
            title="YouTube video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Container>
    </section>
  );
}
