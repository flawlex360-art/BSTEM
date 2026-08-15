## 2025-05-18 - Module-Level Shuffling of Static Image Lists
**Learning:** Shuffling array items inline in JSX using `[...].sort(() => Math.random() - 0.5)` causes unnecessary array re-allocations, biased sorting overhead, and unstable prop references on every component render.
**Action:** Extract static lists outside the render loop and pre-shuffle using Fisher-Yates at module initialization.
