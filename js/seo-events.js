// Send event categories and page paths only, never email addresses or URL queries.
document.addEventListener('click', event => {
  const link = event.target.closest?.('a[href]');
  if (!link || typeof window.gtag !== 'function') return;
  const destination = new URL(link.href, window.location.href);
  if (destination.protocol === 'mailto:' && destination.searchParams.get('subject') === 'Fairway Gear Guide review inquiry') {
    window.gtag('event', 'partnership_inquiry_click', { page_path: window.location.pathname });
  } else if (destination.origin === window.location.origin && destination.pathname.startsWith('/posts/') && link.closest('.article-body')) {
    window.gtag('event', 'related_guide_click', { page_path: window.location.pathname, destination_path: destination.pathname });
  }
});
