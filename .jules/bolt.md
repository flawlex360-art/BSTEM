## 2025-05-18 - Next.js Image Slideshow Preloading Optimization
**Learning:** Setting `priority={true}` on all images inside mapped slideshow loops forces Next.js to preload all hidden slide images with high priority, congesting initial network bandwidth and delaying critical assets.
**Action:** Always set `priority={idx === 0}` in slideshow components so only the initial visible image is prioritized for preloading.
