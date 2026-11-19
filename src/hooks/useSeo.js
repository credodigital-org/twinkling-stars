import { useEffect } from "react";

// Sets the page title + meta description (and og tags) per route, no extra dependency.
export default function useSeo({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);

    const url = window.location.origin + path;
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
  }, [title, description, path]);
}
