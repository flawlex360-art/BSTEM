## 2025-09-01 - Avoid priority={true} on hidden slideshow images
**Learning:** Setting `priority={true}` on all images in a slideshow loop causes Next.js to inject high-priority preloads for hidden slides, causing network contention and delaying critical above-the-fold assets.
**Action:** Always set `priority={idx === 0}` on Next.js Image components in slideshows so only the first visible slide is prioritized.
