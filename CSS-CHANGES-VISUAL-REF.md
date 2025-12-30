# CSS Changes Visual Reference

## Overview

This document shows the exact CSS changes made to move brush strokes **behind text** instead of underneath, and make colors adjustable.

---

## Change 1: CSS Custom Properties Added

### Location: `:root` section (top of main.css)

```css
:root {
    /* Original theme colors */
    --brew-dark: #2c1810;
    --brew-brown: #5d4037;
    --brew-amber: #d4a574;
    --brew-gold: #c89446;
    --brew-cream: #f5e6d3;
    --brew-copper: #b87333;
    --brew-text: #3a2a1a;
    --brew-light: #faf7f2;

    /* NEW: Brush stroke color filters */
    --brush-copper-filter: brightness(0) saturate(100%) invert(55%) sepia(25%)
        saturate(1500%) hue-rotate(345deg) brightness(95%) contrast(85%);
    --brush-amber-filter: brightness(0) saturate(100%) invert(75%) sepia(15%)
        saturate(800%) hue-rotate(340deg) brightness(90%) contrast(85%);
    --brush-brown-filter: brightness(0) saturate(100%) invert(35%) sepia(20%)
        saturate(600%) hue-rotate(350deg) brightness(80%) contrast(90%);
}
```

---

## Change 2: Navigation Link Strokes

### BEFORE:
```css
nav a::before {
    content: "";
    position: absolute;
    bottom: -4px;              /* Below the text */
    left: 0;
    width: 100%;
    height: 8px;               /* Small height */
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition:
        opacity 0.4s ease,
        transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    color: var(--brew-copper);  /* Didn't work with SVG backgrounds */
}
```

### AFTER:
```css
nav li {
    position: relative;
    z-index: 1;                /* NEW: Keep text on top */
}

nav a::before {
    content: "";
    position: absolute;
    bottom: 0;                 /* CHANGED: Align with text baseline */
    left: 0;
    width: 100%;
    height: 12px;              /* CHANGED: Taller to show behind text */
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition:
        opacity 0.4s ease,
        transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: -1;               /* NEW: Behind text */
    filter: var(--brush-copper-filter);  /* NEW: CSS filter for color */
}
```

### Visual Difference:
```
BEFORE (underneath):        AFTER (behind):
    Text                        Text
    ----                        [===]  (shows through letters)
```

---

## Change 3: Heading Link Strokes

### BEFORE:
```css
h2 a::after {
    content: "";
    position: absolute;
    bottom: -8px;              /* Below the text */
    left: 0;
    width: 100%;
    height: 10px;              /* Small height */
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scaleX(0) translateY(-5px);  /* Offset downward */
    transform-origin: left;
    transition:
        opacity 0.5s ease,
        transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: var(--brew-amber);  /* Didn't work */
}
```

### AFTER:
```css
h2 a {
    color: var(--brew-dark);
    position: relative;
    display: inline-block;
    transition: color 0.3s ease;
    z-index: 1;                /* NEW: Keep text on top */
}

h2 a::after {
    content: "";
    position: absolute;
    bottom: 0;                 /* CHANGED: Align with text baseline */
    left: 0;
    width: 100%;
    height: 16px;              /* CHANGED: Taller */
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    transform: scaleX(0) translateY(0);  /* CHANGED: No vertical offset */
    transform-origin: left;
    transition:
        opacity 0.5s ease,
        transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: -1;               /* NEW: Behind text */
    filter: var(--brush-amber-filter);  /* NEW: CSS filter */
}
```

---

## Change 4: Accent Elements

### BEFORE:
```css
.brush-accent::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.6;
    color: var(--brew-amber);  /* Didn't work */
    z-index: -1;               /* Already had this */
}
```

### AFTER:
```css
.brush-accent {
    position: relative;
    display: inline-block;
    z-index: 1;                /* NEW: Keep text on top */
}

.brush-accent::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12px;              /* CHANGED: Taller */
    background-image: url("/images/brush-stroke-underline.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.6;
    z-index: -1;
    filter: var(--brush-amber-filter);  /* NEW: CSS filter */
}
```

---

## Key Concepts

### Z-Index Stacking
```
Layer 3: Text (z-index: 1)
Layer 2: Brush stroke (z-index: -1)  ← Shows behind text
Layer 1: Background (z-index: 0 or auto)
```

### Bottom Position
```
bottom: -8px → Text sits ABOVE stroke (separated)
bottom: 0    → Stroke starts AT text baseline (integrated)
```

### Height Adjustment
```
         ████████  ← height: 16px (tall, shows behind most letters)
Text     ██████    ← height: 12px (medium, shows behind some)
         ████      ← height: 8px (subtle, barely visible)
```

### CSS Filter Chain
```
SVG (black)
    ↓ brightness(0)      → Pure black
    ↓ saturate(100%)     → Full saturation maintained
    ↓ invert(55%)        → Make it lighter (inverted)
    ↓ sepia(25%)         → Add warmth
    ↓ saturate(1500%)    → Intensify color
    ↓ hue-rotate(345deg) → Shift to copper/orange
    ↓ brightness(95%)    → Fine-tune brightness
    ↓ contrast(85%)      → Adjust contrast
Result: Copper colored stroke
```

---

## Summary of All Changes

| Aspect | Old Value | New Value | Purpose |
|--------|-----------|-----------|---------|
| **Position** | `bottom: -4px` or `-8px` | `bottom: 0` | Align with text baseline |
| **Height** | `8px` or `10px` | `12px` or `16px` | More visible behind text |
| **Parent z-index** | Not set | `z-index: 1` | Keep text on top |
| **Stroke z-index** | Not set or `-1` | `z-index: -1` | Place behind text |
| **Color method** | `color: var(--brew-*)` | `filter: var(--brush-*-filter)` | Actually works with SVG |
| **Transform offset** | `translateY(-5px)` | `translateY(0)` | No vertical offset needed |

---

## How to Adjust

### Change Color Globally
Edit the filter variables in `:root`:
```css
--brush-copper-filter: brightness(0) saturate(100%) invert(XX%) ... ;
```

### Change Color for One Element
Override the filter directly:
```css
nav li:first-child a::before {
    filter: brightness(0) saturate(100%) invert(40%) sepia(60%)
        saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(90%);
}
```

### Make More Subtle
```css
nav a:hover::before {
    opacity: 0.5;  /* Down from 0.8 */
    height: 8px;   /* Down from 12px */
}
```

### Make More Bold
```css
nav a:hover::before {
    opacity: 1.0;  /* Up from 0.8 */
    height: 20px;  /* Up from 12px */
}
```

---

## Files Changed

1. **themes/brew/assets/css/main.css** - All CSS changes
2. **themes/brew/BRUSHSTROKE-COLOR-GUIDE.md** - Detailed documentation
3. **themes/brew/BRUSH-COLOR-QUICK-REF.md** - Quick reference
4. **content/brush-demo.md** - Demo page
5. **BRUSH-BEHIND-TEXT-UPDATE.md** - Summary document

---

## Result

✓ Brush strokes appear **behind text** instead of underneath  
✓ Colors adjustable via CSS filters (no SVG editing)  
✓ More artistic, hand-painted look  
✓ Fully backwards compatible  
✓ Works in all modern browsers