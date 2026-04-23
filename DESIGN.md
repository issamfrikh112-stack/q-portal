# Design Brief: Q+ Government Portal

## Purpose & Tone
Government-style minimalist public services portal. Institutional, trustworthy, austere. No decoration. Every decision serves clarity and accessibility.

## Color Palette (OKLCH)
| Token | Light | Dark |
|-------|-------|------|
| Background | `0.94 0 0` (warm gray) | `0.14 0 0` (near black) |
| Card | `0.995 0 0` (pure white) | `0.18 0 0` (dark gray) |
| Foreground | `0.2 0 0` (dark text) | `0.95 0 0` (light text) |
| Primary/Accent | `0.5 0.12 258` (muted blue) | `0.65 0.15 270` (higher blue) |
| Muted | `0.88 0 0` (light gray) | `0.22 0 0` (medium dark) |
| Border | `0.92 0 0` (subtle gray) | `0.28 0 0` (visible gray) |

## Typography
| Use | Font | Weight |
|-----|------|--------|
| Display (Header) | DM Sans | 600 |
| Body & UI | Figtree | 400–600 |
| Code/Mono | Geist Mono | 400 |

## Structural Zones
| Zone | Background | Border | Shadow |
|------|------------|--------|--------|
| Header | White (`--card`) | Border-bottom (`--border`) | None |
| Main | Gray-100 (`--background`) | None | None |
| Cards | White (`--card`) | Subtle border (`--border`) | `shadow-sm` |
| Search Input | White with gray border | `--border` | None |
| Bottom Nav | White | Border-top (`--border`) | None |

## Shape Language
- Cards & categories: `rounded-xl` (14px)
- Search input: `rounded-full` (28px)
- Buttons: `rounded-lg` (14px)
- No radius on structural elements (header, nav)

## Component Patterns
- **Header**: Sticky, white, left-aligned title (Q+), right-aligned tag (Demo)
- **Search**: Full-width input with rounded-full, placeholder text, gray border
- **Categories**: 3-column grid, white cards, centered emoji + label
- **Announcements**: White card, bullet list, muted text
- **Bottom Nav**: Fixed, white, three ghost buttons, no active state styling

## Spatial Density
- Page padding: 1rem
- Card padding: 1rem
- Grid gap: 0.75rem (3-column)
- Content vertical gap: 0.75rem

## Motion & Interaction
- Hover: Slight shadow lift on cards (`shadow-md`)
- Transition: `transition-smooth` (0.3s ease)
- No animations on entry; page feels instant

## Accessibility
- AA+ contrast: foreground on background (0.75+ difference)
- 16px minimum body font size
- Focus states via ring (`--ring`)
- High-contrast dividers (borders, not rules)

## Differentiation & Signature Detail
Strict adherence to light gray background with pure white card surfaces. No gradients, no decorative elements, no color depth. The interface is a *grid of surfaces* — intentional, austere, institutional. This is the opposite of playful or expressive — it is utilitarian minimalism.

## Dark Mode
Implemented with OKLCH adjustments: lighter backgrounds for hierarchy, higher chroma blue for accent visibility. Button text reverses; card foreground is light text on dark card.
