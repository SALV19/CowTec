# Design Tokens

This directory contains the design system tokens for the dashboard application. These tokens provide consistent styling across all components.

## Structure

- `colors.css` - Color palette including primary, neutral, success, warning, and error colors
- `typography.css` - Font families, sizes, weights, and line heights
- `spacing.css` - Spacing scale for margins, padding, and gaps
- `layout.css` - Border radius, shadows, and transitions
- `effects.css` - Gradients and hover effects
- `utilities.css` - Z-index, opacity, and breakpoint values
- `index.css` - Imports all token files

## Usage

Import the tokens in your CSS:

```css
@import url('../tokens/index.css');
```

Then use the CSS custom properties:

```css
.my-component {
  background: var(--color-bg-white);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
}
```

## Recent Improvements

- Established comprehensive design tokens for consistent styling
- Enhanced atomic components with modern design patterns
- Improved typography, spacing, and color usage
- Added subtle shadows, better borders, and smooth transitions
- Maintained simple, professional appearance suitable for dashboard applications