# Brush Stroke Color Guide

This guide explains how to adjust the colors of brush stroke underlines that appear **behind text** in the Brewery Brushstroke theme.

## Overview

The brush strokes now appear **behind the text** (using `z-index: -1`) instead of underneath, creating a more integrated, hand-painted look. The colors are controlled via CSS filters applied to the SVG images, making them fully customizable without editing the SVG files.

## Quick Start

To change brush stroke colors, modify the CSS custom properties in `themes/brew/assets/css/main.css`:

```css
:root {
    /* Original theme colors */
    --brew-dark: #2c1810;
    --brew-brown: #5d4037;
    --brew-amber: #d4a574;
    --brew-gold: #c89446;
    --brew-cream: #f5e6d3;
    --brew-copper: #b87333;
    
    /* Brush stroke color filters */
    --brush-copper-filter: brightness(0) saturate(100%) invert(55%) sepia(25%)
        saturate(1500%) hue-rotate(345deg) brightness(95%) contrast(85%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(75%) sepia(15%)
        saturate(800%) hue-rotate(340deg) brightness(90%) contrast(85%);
    --brush-brown-filter: brightness(0) saturate(100%) invert(35%) sepia(20%)
        saturate(600%) hue-rotate(350deg) brightness(80%) contrast(90%);
}
```

## Where Brush Strokes Are Used

### 1. Navigation Link Hover (Copper)
**Location:** Top navigation menu  
**CSS Variable:** `--brush-copper-filter`  
**Element:** `nav a::before`

```css
nav a::before {
    filter: var(--brush-copper-filter);
}
```

### 2. Heading Link Hover (Amber)
**Location:** H2 heading links  
**CSS Variable:** `--brush-amber-filter`  
**Element:** `h2 a::after`

```css
h2 a::after {
    filter: var(--brush-amber-filter);
}
```

### 3. Accent Elements (Amber)
**Location:** Elements with `.brush-accent` class  
**CSS Variable:** `--brush-amber-filter`  
**Element:** `.brush-accent::after`

```css
.brush-accent::after {
    filter: var(--brush-amber-filter);
}
```

## How CSS Filters Work

The SVG brush strokes are black by default. CSS filters transform them to any color:

1. `brightness(0)` - Makes the image completely black
2. `saturate(100%)` - Maintains saturation level
3. `invert(X%)` - Inverts the color (0% = black, 100% = white)
4. `sepia(X%)` - Adds sepia tone
5. `saturate(X%)` - Adjusts color intensity
6. `hue-rotate(Xdeg)` - Shifts the hue on the color wheel
7. `brightness(X%)` - Adjusts final brightness
8. `contrast(X%)` - Adjusts contrast

## Preset Color Examples

### Red Brush Strokes
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(35%) sepia(80%)
        saturate(2500%) hue-rotate(350deg) brightness(100%) contrast(95%);
}
```

### Blue Brush Strokes
```css
:root {
    --brush-amber-filter: brightness(0) saturate(100%) invert(40%) sepia(60%)
        saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(90%);
}
```

### Green Brush Strokes
```css
:root {
    --brush-brown-filter: brightness(0) saturate(100%) invert(50%) sepia(50%)
        saturate(1200%) hue-rotate(80deg) brightness(90%) contrast(85%);
}
```

### Purple Brush Strokes
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(35%) sepia(70%)
        saturate(3000%) hue-rotate(270deg) brightness(90%) contrast(100%);
}
```

### Dark Brown/Black Brush Strokes
```css
:root {
    --brush-amber-filter: brightness(0) saturate(100%) invert(15%) sepia(30%)
        saturate(400%) hue-rotate(20deg) brightness(70%) contrast(95%);
}
```

### Light Gray Brush Strokes
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(80%) sepia(0%)
        saturate(0%) hue-rotate(0deg) brightness(90%) contrast(85%);
}
```

## Using an Online Filter Generator

The easiest way to create custom colors is to use a CSS filter generator:

1. Visit: https://codepen.io/sosuke/pen/Pjoqqp
2. Enter your target hex color (e.g., `#b87333` for copper)
3. Copy the generated filter value
4. Replace the filter in your CSS custom property

**Example:**
```
Target color: #b87333
Generated: invert(55%) sepia(25%) saturate(1500%) hue-rotate(345deg) brightness(95%) contrast(85%)
```

## Adjusting Opacity

Each brush stroke element also has an `opacity` property for fine-tuning:

```css
/* Navigation link hover - default opacity: 0.8 */
nav a:hover::before {
    opacity: 0.8;  /* Adjust between 0 and 1 */
}

/* Heading link hover - default opacity: 0.7 */
h2 a:hover::after {
    opacity: 0.7;  /* Adjust between 0 and 1 */
}

/* Accent elements - default opacity: 0.6 */
.brush-accent::after {
    opacity: 0.6;  /* Adjust between 0 and 1 */
}
```

## Behind Text Implementation

The brush strokes appear **behind** the text using these key CSS properties:

```css
/* Parent element needs positioning context */
nav a {
    position: relative;
    z-index: 1;  /* Text stays on top */
}

/* Brush stroke pseudo-element goes behind */
nav a::before {
    position: absolute;
    bottom: 0;       /* Aligned with text baseline */
    z-index: -1;     /* Behind the text */
    height: 12px;    /* Visible height behind text */
}
```

### Positioning Details

- **Bottom: 0** - Aligns the brush stroke with the text baseline
- **Height: 12-16px** - Makes the stroke tall enough to show behind lowercase and uppercase letters
- **Z-index: -1** - Places stroke behind text but above background
- **Parent z-index: 1** - Ensures text stays on top

## Adjusting Brush Stroke Height

To control how much of the stroke shows behind the text:

```css
/* Smaller strokes (subtle) */
nav a::before {
    height: 8px;
}

/* Medium strokes (default) */
nav a::before {
    height: 12px;
}

/* Larger strokes (bold) */
nav a::before {
    height: 20px;
}
```

## Custom Color Per Element

You can override the color for specific elements:

```css
/* Custom color for specific navigation item */
nav li:first-child a::before {
    filter: brightness(0) saturate(100%) invert(40%) sepia(60%)
        saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(90%);
}

/* Custom color for specific heading */
#beers h2 a::after {
    filter: brightness(0) saturate(100%) invert(35%) sepia(80%)
        saturate(2500%) hue-rotate(350deg) brightness(100%) contrast(95%);
}
```

## Troubleshooting

### Brush strokes not visible
- Check that parent element has `position: relative`
- Ensure parent has `z-index: 1` or higher
- Verify the filter is not making the stroke transparent
- Increase `opacity` value

### Brush strokes appear in front of text
- Add `z-index: -1` to the pseudo-element
- Ensure parent element has `z-index: 1` or higher

### Color not matching expectations
- Use the online filter generator for accurate colors
- Remember: start with `brightness(0) saturate(100%)`
- Adjust `invert()` first (controls lightness)
- Then adjust `hue-rotate()` (controls color)

### Brush strokes too subtle
- Increase `opacity` (0.7 → 0.9)
- Increase `saturate()` value (800% → 1500%)
- Increase `contrast()` value (85% → 100%)

### Brush strokes too bold
- Decrease `opacity` (0.8 → 0.5)
- Decrease `saturate()` value (1500% → 800%)
- Decrease `height` value (12px → 8px)

## Performance Notes

CSS filters are hardware-accelerated on modern browsers and have minimal performance impact. The brush stroke SVGs are cached by the browser, so there's no performance penalty for reusing them with different filters.

## Browser Compatibility

CSS filters are supported in all modern browsers:
- Chrome/Edge 18+
- Firefox 35+
- Safari 9.1+
- iOS Safari 9.3+

No fallback is needed for older browsers—they simply won't see the colored strokes.

## Example: Seasonal Color Schemes

### Fall/Autumn (Orange & Brown)
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(45%) sepia(70%)
        saturate(1800%) hue-rotate(15deg) brightness(95%) contrast(90%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(55%) sepia(50%)
        saturate(1200%) hue-rotate(350deg) brightness(90%) contrast(85%);
}
```

### Winter (Cool Blues & Grays)
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(50%) sepia(30%)
        saturate(800%) hue-rotate(180deg) brightness(90%) contrast(85%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(70%) sepia(10%)
        saturate(200%) hue-rotate(200deg) brightness(95%) contrast(80%);
}
```

### Spring (Fresh Greens)
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(60%) sepia(40%)
        saturate(1000%) hue-rotate(70deg) brightness(90%) contrast(85%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(75%) sepia(30%)
        saturate(600%) hue-rotate(50deg) brightness(95%) contrast(85%);
}
```

### Summer (Vibrant Colors)
```css
:root {
    --brush-copper-filter: brightness(0) saturate(100%) invert(50%) sepia(80%)
        saturate(2500%) hue-rotate(350deg) brightness(100%) contrast(100%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(70%) sepia(60%)
        saturate(2000%) hue-rotate(20deg) brightness(95%) contrast(95%);
}
```

## Summary

1. Brush strokes now appear **behind text** (z-index: -1)
2. Colors are controlled via CSS filters (no SVG editing needed)
3. Use CSS custom properties in `:root` for easy theme-wide changes
4. Use the online filter generator for precise color matching
5. Adjust opacity for subtlety, height for prominence
6. Override filters per element for custom styling

For more brush stroke effects, see `BRUSHSTROKE-GUIDE.md`.