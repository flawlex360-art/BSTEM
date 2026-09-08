## 2025-09-08 - Selective Image Priority in Slideshow Components
**Learning:** Setting `priority={true}` on all slides in a slideshow component causes Next.js to inject high-priority preload links for every slide, including off-screen/hidden images, flooding network bandwidth and delaying LCP.
**Action:** Always set `priority={idx === 0}` on slideshow image arrays so only the initial visible image is preloaded while non-visible slides load lazily.
