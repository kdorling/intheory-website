# 🍺 Brushstroke Theme - Quick Reference Card

## Essential Commands

```bash
# Start development server
hugo server

# Build production site
hugo

# Create new content
hugo new beers/my-beer.md
```

---

## Color Variables

```css
var(--brew-dark)    /* #2c1810 - Dark brown text */
var(--brew-brown)   /* #5d4037 - Brown accents */
var(--brew-amber)   /* #d4a574 - Amber highlights */
var(--brew-gold)    /* #c89446 - Gold accents */
var(--brew-cream)   /* #f5e6d3 - Cream backgrounds */
var(--brew-copper)  /* #b87333 - Copper links */
var(--brew-light)   /* #faf7f2 - Page background */
```

---

## SVG Assets

| File | Size | Usage |
|------|------|-------|
| `brush-stroke-horizontal.svg` | 800x60 | Dividers, borders (with drips) |
| `brush-stroke-underline.svg` | 300x30 | Link hovers (with drips) |
| `brush-stroke-accent.svg` | 200x80 | Heavy decorations (with drips) |
| `brush-splatter.svg` | 150x150 | Backgrounds, splatters |
| `brewery-icon.svg` | 120x120 | Logo, branding |

**Note:** Updated with artistic, hand-painted style featuring organic edges, paint drips, and layered textures.

**Path:** `/images/filename.svg`

---

## CSS Classes

```html
<!-- Brushstroke accent on text -->
<span class="brush-accent">Featured</span>

<!-- Horizontal divider -->
<div class="brush-divider"></div>

<!-- Highlight box -->
<div class="highlight-box">
    <h3>Important!</h3>
    <p>Content here...</p>
</div>

<!-- Standard HR gets brushstroke -->
<hr>
```

---

## Automatic Styling

These elements style themselves:

- `<a>` → Gradient underline on hover
- `<nav a>` → Brushstroke underline on hover
- `<h2><a>` → Large brushstroke on hover
- `<hr>` → Brushstroke divider
- `<section>` → Lift effect on hover
- `<button>` → Splash effect on click

---

## Content Template

```markdown
---
title: "Beer Name"
date: 2024-01-15
draft: false
description: "Short description"
---

## Heading with Brushstroke

Paragraph text with [links](/path/) that get hover effects.

---

## Another Section

More content here...
```

---

## Navigation Menu

Add to `hugo.toml`:

```toml
[[menu.main]]
  name = 'Page Name'
  url = '/page/'
  weight = 1
```

---

## Custom Brushstroke Element

```css
.my-element {
    height: 60px; /* Increased for paint drips */
    background-image: url('/images/brush-stroke-horizontal.svg');
    background-size: 100% 100%;
    color: var(--brew-amber); /* Controls SVG color */
    opacity: 0.6;
}

/* Heavy accent stroke */
.accent-element {
    height: 80px; /* Extra height for artistic drips */
    background-image: url('/images/brush-stroke-accent.svg');
    background-size: 100% 100%;
}
```

---

## Animation Effects

| Element | Hover Effect | Duration |
|---------|-------------|----------|
| Nav links | Brush underline | 0.4s |
| Content links | Gradient grow | 0.4s |
| H2 links | Brush rise | 0.5s |
| Sections | Lift + shadow | 0.4s |
| Buttons | Circle expand | 0.6s |

---

## Responsive Breakpoint

```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

Desktop: > 768px  
Mobile: ≤ 768px

---

## Directory Structure

```
brew1/
├── content/          # Your pages
│   ├── _index.md    # Homepage
│   ├── about/
│   └── beers/
├── hugo.toml        # Config
└── themes/brew/
    ├── assets/
    │   ├── css/main.css
    │   └── js/main.js
    └── static/images/  # SVGs here
```

---

## Common Customizations

### Change Site Title
```toml
# hugo.toml
title = 'Your Brewery Name'
```

### Change Theme Colors
```css
/* themes/brew/assets/css/main.css */
:root {
    --brew-copper: #YOUR_COLOR;
}
```

### Add Custom CSS
```css
/* In main.css or custom file */
.custom-class {
    /* Your styles */
}
```

---

## Troubleshooting

**Brushstrokes not showing?**
- Check SVG paths in `/static/images/`
- Rebuild: `hugo`
- Hard refresh: Cmd+Shift+R

**Colors wrong?**
- Use CSS variables: `var(--brew-*)`
- SVG color: Use `color` property
- All strokes use `currentColor`

**Brushstrokes cut off?**
- Increase container height (drips extend below)
- Horizontal: 60px height
- Underline: 30px height
- Accent: 80px height

**Animations not working?**
- Check browser support
- Verify JavaScript is enabled
- Look for console errors

---

## Links to Full Docs

- **README.md** → Installation & setup
- **BRUSHSTROKE-GUIDE.md** → Detailed styling
- **THEME-SHOWCASE.md** → Visual examples
- **IMPLEMENTATION-SUMMARY.md** → Technical details

---

## Typography

- **Headings:** Georgia, Garamond
- **Body:** Georgia
- **Code:** Monaco, Courier New

---

## Artistic Brushstrokes Features

✨ **Hand-painted aesthetic** with organic edges  
✨ **Multiple layered strokes** for depth  
✨ **Paint drips and splatters** for texture  
✨ **No SVG filters** - faster rendering  
✨ **Pure vector paths** - universal support  

## Performance Tips

✅ Use CSS transforms for animations  
✅ Leverage GPU acceleration  
✅ Minimize JavaScript  
✅ Optimize SVG files (no filters = faster)  
✅ Use CSS variables  

---

## Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers  

---

## Quick Examples

### Beer Page
```markdown
---
title: "IPA Name"
---

## Tasting Notes

**ABV:** 6.5% | **IBU:** 45

Description here with [link](/taproom/)...
```

### Button
```html
<button>
    <span>Reserve Now</span>
</button>
```

### Callout Box
```html
<div class="highlight-box">
    <h3>New Release!</h3>
    <p>Coming this Friday...</p>
</div>
```

---

## Keyboard Shortcuts

While developing:
- `Ctrl+C` → Stop server
- `Cmd+R` → Refresh browser
- `Cmd+Shift+R` → Hard refresh

---

## Git Workflow

```bash
git add .
git commit -m "Update brewery content"
git push origin main
```

---

## Production Deployment

```bash
# Build site
hugo

# Upload /public directory to:
# - Netlify
# - Vercel
# - GitHub Pages
# - Your hosting provider
```

---

## Contact & Support

- Check documentation files first
- Review example content in `/content`
- Test in development with `hugo server`

---

## ✨ New Artistic Features

The brushstrokes have been updated with:
- **Organic, irregular edges** (hand-painted look)
- **Multiple paint layers** (3-6 per stroke)
- **Paint drips** hanging from edges
- **Splatter dots** for texture
- **No SVG filters** (better performance)
- **Layered opacity** for depth

See `ARTISTIC-BRUSHSTROKES-UPDATE.md` for full details.

---

**Remember:** This theme works best for craft breweries, taprooms, and artisanal beverage businesses. The artistic brushstroke aesthetic brings authentic, hand-painted warmth and character to your online presence.

**Cheers! 🍺**

---

*Quick Reference v1.0 - Brew Theme for Hugo*