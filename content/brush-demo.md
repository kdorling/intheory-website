+++
title = "Brush Stroke Behind Text Demo"
date = 2024-01-15
draft = false
+++

# Brush Stroke Behind Text Demo

This page demonstrates the new brush stroke effect that appears **behind the text** instead of underneath it.

## Navigation Links

Hover over the navigation links at the top of this page to see the copper-colored brush strokes appear behind the text.

## Heading Links with Brush Strokes

[This is a clickable heading with brush stroke behind](#example)

Hover over the heading above to see the amber brush stroke appear behind the text. The stroke is positioned behind the letters, creating an integrated, hand-painted look.

## Inline Accent Elements

You can also add brush strokes to any text using the `.brush-accent` class:

This is normal text, but <span class="brush-accent">this text has a brush stroke behind it</span>.

## How It Works

The brush strokes now use:

1. **Position: absolute** - To position relative to the text
2. **Bottom: 0** - To align with the text baseline
3. **Z-index: -1** - To place the stroke behind the text
4. **CSS Filters** - To adjust colors without editing SVG files

## Adjustable Colors

The colors are controlled by CSS custom properties:

- `--brush-copper-filter` - Used for navigation links (copper/orange tone)
- `--brush-amber-filter` - Used for headings and accents (amber/gold tone)  
- `--brush-brown-filter` - Available for custom uses (brown tone)

### Example Color Variations

To change the brush stroke colors, edit the CSS variables in `themes/brew/assets/css/main.css`:

**Red Strokes:**
```css
--brush-copper-filter: brightness(0) saturate(100%) invert(35%) sepia(80%)
    saturate(2500%) hue-rotate(350deg) brightness(100%) contrast(95%);
```

**Blue Strokes:**
```css
--brush-amber-filter: brightness(0) saturate(100%) invert(40%) sepia(60%)
    saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(90%);
```

**Green Strokes:**
```css
--brush-brown-filter: brightness(0) saturate(100%) invert(50%) sepia(50%)
    saturate(1200%) hue-rotate(80deg) brightness(90%) contrast(85%);
```

## Technical Details

### Height Adjustment

The brush stroke height determines how much shows behind the text:

- **8px** - Subtle, barely visible
- **12px** - Default, shows behind most letters
- **16px** - Bold, shows prominently behind text
- **20px** - Very bold, almost like a highlight

### Opacity Control

Each element has its own opacity setting:

- Navigation links: `opacity: 0.8` on hover
- Heading links: `opacity: 0.7` on hover
- Accent elements: `opacity: 0.6` always visible

## Browser Support

CSS filters are supported in all modern browsers (Chrome, Firefox, Safari, Edge). The effect gracefully degrades in older browsers—they simply won't see the colored strokes.

## See Also

- [BRUSHSTROKE-COLOR-GUIDE.md](/themes/brew/BRUSHSTROKE-COLOR-GUIDE.md) - Complete color customization guide
- [BRUSHSTROKE-GUIDE.md](/themes/brew/BRUSHSTROKE-GUIDE.md) - General brushstroke usage guide

---

## Test Section

[Another heading with brush stroke effect](#test)

Hover over navigation links, headings, and <span class="brush-accent">inline accents</span> to see the brush strokes appear behind the text with smooth animations.