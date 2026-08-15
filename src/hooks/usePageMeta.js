import { useEffect } from "react";

const SITE = "Aimee Van den broeke";
const DEFAULT_TITLE = `${SITE} | UX Designer & Frontend Developer`;
const DEFAULT_DESC =
  "Portfolio of Aimee Van den broeke — UX Designer and Frontend Developer in Gresham, Oregon. Every case study, screen, and line of code on this site is my own work.";

function setMeta(selector, value) {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute("content", value);
}

/**
 * Sets the document title and description for a route.
 *
 * NOTE: this runs client-side only. It fixes browser tab titles and the
 * headline Google shows in search results (Googlebot renders JS). It does
 * NOT affect link previews on LinkedIn, Slack, or Facebook — those scrapers
 * read the raw HTML and never run JavaScript. Fixing those requires
 * prerendering or static generation.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESC;

    document.title = fullTitle;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', desc);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', DEFAULT_DESC);
      setMeta('meta[property="og:title"]', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      setMeta('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', DEFAULT_DESC);
    };
  }, [title, description]);
}
