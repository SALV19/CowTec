# Design System Foundations

This directory contains the foundational design tokens that form the base of our atomic design system.

## Token Categories

### 🎨 Colors (`colors.css`)
- Primary, success, warning, info color palettes
- Neutral gray scale
- Semantic colors (text, background)
- All colors follow a consistent naming convention: `--color-{category}-{shade}`

### 📏 Spacing (`spacing.css`)
- Complete spacing scale from 0.125rem to 24rem
- Consistent scale using powers of 2 and common fractions
- Legacy spacing tokens for backward compatibility

### ✍️ Typography (`typography.css`)
- Font families (primary and monospace)
- Font sizes from xs to 9xl
- Font weights from thin to black
- Line heights and letter spacing scales

### 📐 Layout (`layout.css`)
- Container max-widths for responsive design
- Grid system tokens (columns, gutters, spans)
- Flexbox utility tokens
- Comprehensive layout primitives

### 📱 Breakpoints (`breakpoints.css`)
- Responsive breakpoint values (xs to 2xl)
- Media query tokens for min/max-width queries
- Container query support for component-based responsive design

### ✨ Effects (`effects.css`)
- Shadow system (xs to 2xl)
- Border radius scale
- Transition durations and easing functions
- Motion tokens for consistent animations
- Gradient definitions

### 🛠️ Utilities (`utilities.css`)
- Display, position, overflow tokens
- Z-index scale for layering
- Opacity values
- Cursor, user-select, pointer-events
- Aspect ratios for media content

## Usage

All tokens are available as CSS custom properties and can be used throughout the design system:

```css
.my-component {
  padding: var(--spacing-4);
  color: var(--color-text-primary);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
}
```

## Responsive Design

Use breakpoint tokens for media queries:

```css
@media (--breakpoint-up-md) {
  .my-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Extending the System

When adding new tokens:
1. Follow the existing naming conventions
2. Add to the appropriate category file
3. Update this README if adding new categories
4. Test across all breakpoints and themes