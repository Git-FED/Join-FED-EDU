# Performance and UX Guide

## Technical performance

- Prefer CSS over JavaScript for simple transitions.
- Animate only `transform` and `opacity`.
- Use `will-change` sparingly and remove it when no longer needed.
- Lazy-load WebGL, video, and noncritical images.
- Keep third-party embeds optional and isolated from core onboarding.

## UX design

- Use one hero effect per page.
- Give onboarding instructions more whitespace than decorative content.
- Keep microinteractions at 200–300ms or less.
- Make the core guide readable if JavaScript or external services fail.
- Always include:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Tooling

Prefer GSAP only for complex, measured timelines. Use a lightweight Lottie player only when an animation communicates information that static SVG cannot.
