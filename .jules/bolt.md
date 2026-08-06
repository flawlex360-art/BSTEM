# Bolt's Journal - Kpando STEM Club Optimizations

## 2025-03-03 - [Serialized Primitive Dependencies in useEffect arrays]
**Learning:** React slideshow/interval components accepting array props (such as `CardSlideshow`) should use a serialized primitive representation (e.g., `images.join(',')`) in their `useEffect` dependency arrays to prevent redundant interval setups and teardowns when array references change on every render.
**Action:** Always serialize array props or use other primitive representations in the dependency array to ensure intervals are not torn down/recreated unless the actual contents of the array change.
