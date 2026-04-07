'use client';
import { useEffect } from 'react';

/**
 * Fire-and-forget visit logger. Mounted once from the root page and
 * POSTs to `/api/log-visit` so IP resolution happens server-side.
 */
export const VisitLogger = () => {
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/log-visit', {
      method: 'POST',
      signal: controller.signal,
    }).catch(() => {
      // Swallow — logging must never break the page.
    });
    return () => controller.abort();
  }, []);

  return null;
};
