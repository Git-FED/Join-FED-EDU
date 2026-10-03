# Landing Page Master Prompt

Paste into Claude, v0, Bolt, or another code-generation assistant to generate the fed-edu promotional landing page.

## Role and goal

Create a complete, responsive, accessible static landing page for the **fed-edu GitHub Organization Onboarding** repository. The primary action is to help a new member join the organization—not to sell a product.

## Aesthetic

Use obsidian `#07070a`, neon cyan `#00f0ff`, and soft violet `#7000ff` with Plus Jakarta Sans for display text and Inter for body text. Use glassmorphism only for supporting cards, hairline rules, strong contrast, and generous whitespace.

## Required sections

- Hero: “Join fed-edu with confidence.”
- Three-step onboarding flow: follow → accept organization invite → accept team invite.
- Finding the Join button: email, Notifications bell, and organization banner.
- Troubleshooting and support.
- Optional support/funding links that do not gate the core guide.

## Animations and interaction

Use one primary hero effect, such as a pointer-events-none particle grid. Add magnetic buttons and light 3D card tilt only when `prefers-reduced-motion` is not enabled. Animate only `transform` and `opacity`; keep interactions under 250ms.

## Safety and quality

Do not collect GitHub passwords or tokens. Do not expose private Matrix URLs in the public footer. Include semantic landmarks, keyboard focus, alt text, reduced motion, and responsive behavior. Return complete standalone files and test every internal link.
