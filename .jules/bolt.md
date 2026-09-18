## 2025-05-18 - Next.js Image Priority in Slideshow Components
**Learning:** Setting `priority={true}` on all images rendered in a slideshow component causes Next.js to preload hidden slides, which congests network bandwidth during initial page load and negatively impacts LCP.
**Action:** Always set `priority={idx === 0}` on slideshow image components so only the initial visible slide receives high load priority.
