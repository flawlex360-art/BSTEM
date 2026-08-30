## 2025-05-18 - Selective Slide Image Priority

**Learning:** In Next.js slideshow components utilizing `next/image`, setting `priority={true}` unconditionally causes Next.js to inject `<link rel="preload">` elements for all slide images. This competes with critical LCP assets for network bandwidth on page load.
**Action:** Always set `priority={idx === 0}` so only the initial visible image is prioritized for loading, while subsequent slides load lazily in the background.
