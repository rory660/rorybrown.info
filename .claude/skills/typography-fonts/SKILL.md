---
name: typography-fonts
description: Pick distinctive, high-impact fonts for frontend work. Use when typography is the focus — upgrading an existing UI's type, choosing fonts for a new page, or when the user mentions fonts, type, or typographic hierarchy. Isolates typography from other design dimensions for faster, more predictable output.
---

# Typography & Fonts

<use_interesting_fonts>
Typography instantly signals quality. Avoid using boring, generic fonts.

**Never use:** Inter, Roboto, Open Sans, Lato, default system fonts

**Impact choices:**
- Code aesthetic: JetBrains Mono, Fira Code, Space Grotesk
- Editorial: Playfair Display, Crimson Pro, Fraunces
- Startup: Clash Display, Satoshi, Cabinet Grotesk
- Technical: IBM Plex family, Source Sans 3
- Distinctive: Bricolage Grotesque, Obviously, Newsreader

**Pairing principle:** High contrast = interesting. Display + monospace, serif + geometric sans, variable font across weights.

**Use extremes:** 100/200 weight vs 800/900, not 400 vs 600. Size jumps of 3x+, not 1.5x.

Pick one distinctive font, use it decisively. Load from Google Fonts. State your choice before coding.
</use_interesting_fonts>

## Workflow

1. Before coding, declare the chosen font(s) and why they fit the context.
2. Add `<link rel="preconnect">` for `fonts.googleapis.com` and `fonts.gstatic.com`.
3. Load weights at the extremes you'll actually use.
4. Set font-family via a CSS variable so it's swappable.
