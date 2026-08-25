## 2025-08-25 - Stabilizing Array References Passed to Timed Component Props
**Learning:** Passing inline dynamically created or sorted arrays (such as `[...].sort()`) to child components that use `useEffect` timer dependencies causes the array identity to change on every render, triggering unnecessary effect re-runs or timer resets.
**Action:** Move static array definitions and initial shuffles outside render loops or memoize them to preserve object identity across renders.
