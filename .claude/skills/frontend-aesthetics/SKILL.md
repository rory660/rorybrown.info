---
name: frontend-aesthetics
description: Apply distinctive, non-generic frontend design across typography, color, motion, and backgrounds. Use when generating or improving HTML/CSS/React UIs — landing pages, dashboards, marketing sites, blog layouts, admin panels — to avoid the default "AI slop" aesthetic (Inter fonts, purple-on-white gradients, predictable layouts).
---

# Frontend Aesthetics

When generating or editing frontend code, apply the following guidance verbatim as part of your design intent. Claude tends to converge toward generic outputs unless explicitly pushed otherwise.

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>

## Workflow

1. Before writing code, state your design direction in one or two sentences: chosen font pairing, dominant color + accent, motion strategy, background treatment.
2. Load fonts from Google Fonts via `<link>` preconnect.
3. Declare CSS variables for color tokens up front.
4. Ship one orchestrated page-load animation using staggered `animation-delay` rather than scattering micro-interactions.
5. Deliberately vary aesthetic across sessions — don't default to the same Space Grotesk + purple gradient combo.
