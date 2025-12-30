# Brush Stroke Color Quick Reference

Quick guide to adjust brush stroke colors that appear **behind text**.

## Location of Settings

Edit: `themes/brew/assets/css/main.css`

Look for the `:root` section at the top of the file.

## CSS Variables

```css
:root {
    /* Brush stroke color filters */
    --brush-copper-filter: /* Navigation links */
    --brush-amber-filter:  /* Headings & accents */
    --brush-brown-filter:  /* Available for custom use */
}
```

## Quick Color Presets

### Current Theme (Copper & Amber)
```css
--brush-copper-filter: brightness(0) saturate(100%) invert(55%) sepia(25%)
    saturate(1500%) hue-rotate(345deg) brightness(95%) contrast(85%);
--brush-amber-filter: brightness(0) saturate(100%) invert(75%) sepia(15%)
    saturate(800%) hue-rotate(340deg) brightness(90%) contrast(85%);
```

### Red
```css
brightness(0) saturate(100%) invert(35%) sepia(80%)
saturate(2500%) hue-rotate(350deg) brightness(100%) contrast(95%)
```

### Blue
```css
brightness(0) saturate(100%) invert(40%) sepia(60%)
saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(90%)
```

### Green
```css
brightness(0) saturate(100%) invert(50%) sepia(50%)
saturate(1200%) hue-rotate(80deg) brightness(90%) contrast(85%)
```

### Purple
```css
brightness(0) saturate(100%) invert(35%) sepia(70%)
saturate(3000%) hue-rotate(270deg) brightness(90%) contrast(100%)
```

### Orange
```css
brightness(0) saturate(100%) invert(60%) sepia(80%)
saturate(1800%) hue-rotate(15deg) brightness(95%) contrast(90%)
```

### Dark Brown
```css
brightness(0) saturate(100%) invert(25%) sepia(40%)
saturate(800%) hue-rotate(15deg) brightness(75%) contrast(95%)
```

### Gray
```css
brightness(0) saturate(100%) invert(70%) sepia(0%)
saturate(0%) hue-rotate(0deg) brightness(90%) contrast(85%)
```

## Generate Custom Colors

**Tool:** https://codepen.io/sosuke/pen/Pjoqqp

1. Enter your hex color (e.g., `#b87333`)
2. Copy the generated filter
3. Paste into your CSS variable (after `brightness(0) saturate(100%)`)

## Opacity Quick Adjustments

```css
/* Navigation links hover */
nav a:hover::before {
    opacity: 0.8;  /* Default - adjust 0.0 to 1.0 */
}

/* Heading links hover */
h2 a:hover::after {
    opacity: 0.7;  /* Default - adjust 0.0 to 1.0 */
}

/* Accent elements */
.brush-accent::after {
    opacity: 0.6;  /* Default - adjust 0.0 to 1.0 */
}
```

## Height Quick Adjustments

```css
/* Navigation links */
nav a::before {
    height: 12px;  /* Default - try 8px (subtle) to 20px (bold) */
}

/* Heading links */
h2 a::after {
    height: 16px;  /* Default - try 10px to 24px */
}

/* Accent elements */
.brush-accent::after {
    height: 12px;  /* Default - try 8px to 18px */
}
```

## Where Strokes Appear

| Element | Location | Variable | On Hover? |
|---------|----------|----------|-----------|
| `nav a::before` | Navigation menu | `--brush-copper-filter` | Yes |
| `h2 a::after` | H2 headings | `--brush-amber-filter` | Yes |
| `.brush-accent::after` | Inline text | `--brush-amber-filter` | Always visible |

## Tips

- **More subtle:** Decrease opacity or height
- **More bold:** Increase opacity, height, or `saturate()` value
- **Different color:** Use the filter generator with your target hex
- **Test changes:** Save CSS → refresh browser (may need hard refresh: Cmd+Shift+R)

## Behind Text Implementation

The strokes use `z-index: -1` to appear **behind** text:

```css
/* Parent element */
nav a {
    position: relative;
    z-index: 1;  /* Keeps text on top */
}

/* Brush stroke */
nav a::before {
    position: absolute;
    bottom: 0;      /* Aligns with text baseline */
    z-index: -1;    /* Goes behind text */
}
```

## Troubleshooting

**Stroke not visible?**
- Check parent has `position: relative` and `z-index: 1`
- Increase `opacity` value
- Verify filter is correct (should start with `brightness(0) saturate(100%)`)

**Stroke in front of text?**
- Add `z-index: -1` to pseudo-element
- Ensure parent has `z-index: 1`

**Wrong color?**
- Use the filter generator tool
- Copy the FULL filter string (all functions)

## Full Documentation

See `BRUSHSTROKE-COLOR-GUIDE.md` for complete details and examples.