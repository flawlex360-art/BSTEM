## 2026-09-16 - Next.js Image Priority in Card Slideshows

**Learning:** Setting `priority={true}` on all slides within a slideshow component causes Next.js to inject `<link rel="preload">` in the HTML document head for every image in every slideshow card on the page. This preloads non-visible/hidden slide images at maximum network priority, consuming excessive bandwidth and delaying LCP/FCP for the rest of the page. Additionally, passing array props created inline (e.g., `images={project.imageUrls || [project.imageUrl]}`) causes `useEffect` timers to reset on every parent re-render if the entire array reference is in the dependency array.

**Action:** Always set `priority={idx === 0}` on Next.js `<Image>` components in slideshows so only the initial visible image is prioritized for loading. Rely on primitive dependencies like `imagesCount` (or stable array references) in `useEffect` dependency arrays to prevent timer resets across parent re-renders.
