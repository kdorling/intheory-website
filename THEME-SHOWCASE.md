# 🍺 Brewery Brushstroke Theme - Visual Showcase

## Theme Overview

The Brew theme transforms your Hugo brewery website with hand-painted brushstroke aesthetics that bring artisanal character and warmth to every page element.

---

## 🎨 Visual Design Elements

### Color Palette

Our carefully crafted brewery color palette evokes warmth, tradition, and craft:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Brew Dark** | `#2c1810` | Primary text, headings |
| **Brew Brown** | `#5d4037` | Secondary text, accents |
| **Brew Amber** | `#d4a574` | Highlights, brushstrokes |
| **Brew Gold** | `#c89446` | Interactive elements |
| **Brew Cream** | `#f5e6d3` | Backgrounds, cards |
| **Brew Copper** | `#b87333` | Links, buttons |
| **Brew Light** | `#faf7f2` | Page background |

### Typography

- **Headings:** Georgia, Garamond (serif)
- **Body:** Georgia, serif
- **Code:** Monaco, Courier New (monospace)
- **Scale:** Responsive, optimized for readability

---

## ✨ Brushstroke Features

### 1. Navigation Links

**Effect:** Animated brushstroke underlines that scale in from left to right

```
BEFORE HOVER:     Home
                  
DURING HOVER:     Home
                  ~~~~~
```

- Smooth cubic-bezier animation
- Copper-colored brushstroke
- Touch-friendly on mobile devices

### 2. Section Dividers

**Horizontal brushstrokes** replace traditional lines throughout the site:

- Header bottom border: Wide, flowing brushstroke
- Footer top border: Artistic separation
- HR elements: Automatic brushstroke styling
- Section accents: Gradient brushstroke bars

### 3. Content Links

**Progressive underline effect** that grows on hover:

```
BEFORE:  Visit our taproom
         
HOVER:   Visit our taproom
         ═══════════
```

- Gradient color transition
- Left-to-right animation
- Maintains text readability

### 4. Heading Links (H2)

**Enhanced brushstroke** with vertical movement:

```
BEFORE:  Copper Trail Amber Ale

HOVER:   Copper Trail Amber Ale
         ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
         (brushstroke appears and rises)
```

### 5. Interactive Sections

**Lift and shadow effect** on hover:

- Sections rise 2px with smooth animation
- Subtle shadow appears for depth
- Color transition on ::before pseudo-element

---

## 🎭 SVG Brushstroke Assets

### Horizontal Brush Stroke
**File:** `brush-stroke-horizontal.svg`
- Dimensions: 800x40px
- Wavy, organic line
- Fractal noise texture
- Used for: Dividers, borders, decorative lines

### Underline Brush Stroke
**File:** `brush-stroke-underline.svg`
- Dimensions: 300x20px
- Shorter, accent stroke
- Used for: Link hovers, heading accents

### Accent Brush Stroke
**File:** `brush-stroke-accent.svg`
- Dimensions: 200x60px
- Double-stroke design
- Used for: Special callouts, featured elements

### Brush Splatter
**File:** `brush-splatter.svg`
- Dimensions: 150x150px
- Paint splatter effect with drips
- Used for: Background decorations, badges

### Brewery Icon
**File:** `brewery-icon.svg`
- Dimensions: 120x120px
- Beer glass with foam, hops, and wheat
- All elements have brushstroke textures
- Used for: Logo, favicon, branding

---

## 🎬 Animation Details

### Navigation Stagger

Menu items fade in sequentially on page load:

```
Frame 1:  [Home]
Frame 2:  [Home] [Our Beers]
Frame 3:  [Home] [Our Beers] [Taproom]
Frame 4:  [Home] [Our Beers] [Taproom] [Events]
```

**Timing:** 100ms delay between each item

### Section Reveal

Sections fade and slide up as they enter viewport:

```
OFF SCREEN:    [Section is invisible, 30px below]
                     ↓
ENTERING:      [Section fades in, moves up]
                     ↓
VISIBLE:       [Section fully visible, in position]
```

**Intersection Observer** triggers at 10% visibility

### Button Splash

Circular splash animation on click:

```
CLICK:    ● (small circle at click point)
           ↓
EXPAND:   ◉ (circle grows and fades)
           ↓
VANISH:   (removed from DOM)
```

**Duration:** 600ms

---

## 📱 Responsive Design

### Desktop (> 768px)
- Full navigation menu
- Large heading (3.5rem)
- Wide sections with 2rem padding
- Brushstrokes at full opacity

### Mobile (≤ 768px)
- Stacked navigation
- Smaller heading (2.5rem)
- Compact sections with 1.5rem padding
- Slightly reduced brushstroke sizes

---

## 🎯 Key Components

### Header

```
╔═══════════════════════════════════════════╗
║                                           ║
║        Artisan Brewery & Taproom          ║
║                                           ║
║  [Home] [Our Beers] [Taproom] [About]    ║
║                                           ║
╠═══════════════════════════════════════════╣  ← Brushstroke
```

- Centered title with text shadow
- Navigation with hover effects
- Decorative brushstroke bottom border

### Content Sections

```
╔═══════════════════════════════════════════╗  ← Gradient top
║                                           ║
║  Our Story                                ║
║  ─────────────                            ║  ← H2 with hover effect
║                                           ║
║  Founded in 2015, we started as a dream   ║
║  between three friends...                 ║
║                                           ║
╚═══════════════════════════════════════════╝
```

- Semi-transparent white background
- Top gradient accent bar
- Hover lift effect
- Rounded corners

### Footer

```
╠═══════════════════════════════════════════╣  ← Brushstroke
║                                           ║
║  © 2024 Artisan Brewery & Taproom         ║
║  Handcrafted with passion.                ║
║                                           ║
║  Brewing excellence, one batch at a time. ║
║                                           ║
╚═══════════════════════════════════════════╝
```

- Brushstroke top border
- Centered content
- Gradient background fade
- Italic tagline

---

## 🛠️ Technical Specifications

### CSS Features Used

- **CSS Variables:** For theme colors
- **Flexbox:** Navigation and layouts
- **CSS Transforms:** All animations
- **Pseudo-elements:** ::before, ::after for decorations
- **SVG Filters:** feTurbulence, feDisplacementMap
- **Cubic-bezier:** Custom easing functions
- **Media Queries:** Responsive breakpoints

### JavaScript Features

- **Intersection Observer API:** Section reveals
- **Event Listeners:** Hover, click, scroll
- **RequestAnimationFrame:** Smooth scroll effects
- **Dynamic Styling:** Random color selection
- **DOM Manipulation:** Splash effect creation

### Performance Optimizations

- Lightweight SVGs (< 6KB total)
- CSS transforms (GPU accelerated)
- Debounced scroll handlers
- Lazy intersection observers
- Efficient selectors

---

## 📐 Layout Structure

```
<body>
  <header>
    ├── <h1> Site Title
    └── <nav> Menu
          ├── brushstroke underline (::before)
          └── hover effects
  </header>
  
  <main>
    ├── <section> Content Block 1
    │     ├── gradient top (::before)
    │     ├── <h2> Heading with brush effect
    │     └── <p> Content
    │
    ├── <hr> Brushstroke divider
    │
    └── <section> Content Block 2
  </main>
  
  <footer>
    ├── brushstroke top (::before)
    └── <p> Copyright & tagline
  </footer>
</body>
```

---

## 🎨 CSS Class Reference

### Utility Classes

| Class | Purpose | Example |
|-------|---------|---------|
| `.brush-accent` | Inline brushstroke underline | `<span class="brush-accent">Featured</span>` |
| `.brush-divider` | Horizontal divider | `<div class="brush-divider"></div>` |
| `.highlight-box` | Callout box with accent | `<div class="highlight-box">Important!</div>` |
| `.footer-content` | Footer styling | Automatic in footer |
| `.summary` | Post summary text | Hugo template default |

### Automatic Styling

These elements are styled automatically:

- `<a>` - Links get hover effects
- `<nav>` - Navigation brushstroke underlines
- `<hr>` - Horizontal rules become brushstrokes
- `<h2>` - Headings get brush hover effects
- `<section>` - Content blocks get accents
- `<button>` - Buttons get splash effects

---

## 🌟 Special Effects Gallery

### 1. Gradient Brushstroke Bar

Used at the top of sections for subtle decoration.

**Visual:** `[Transparent → Amber → Gold → Amber → Transparent]`

### 2. Text Shadow on H1

Creates depth and artistic quality on main heading.

**Effect:** `2px 2px 0 rgba(amber, 0.2)`

### 3. Radial Background Gradients

Subtle circular gradients in page background for warmth.

**Positions:** Top-right and bottom-left

### 4. Link Background Animation

Progressive gradient underline that grows on hover.

**Animation:** `background-size: 0% → 100%`

### 5. Parallax Brushstroke (Optional)

Header decorations can move slightly on scroll for depth.

**Effect:** `translateY(scrolled * 0.1)`

---

## 📊 Browser Support

### Fully Supported
✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ iOS Safari 14+
✅ Chrome Mobile 90+

### Graceful Degradation
- Older browsers show standard underlines
- SVG filters may not render (shows solid strokes)
- Animations disabled in reduced-motion mode

---

## 🎯 Use Cases

### Perfect For:

✅ Craft breweries
✅ Artisanal beer makers
✅ Taprooms and beer halls
✅ Brewing supply companies
✅ Beer blogs and magazines
✅ Homebrew clubs

### Design Philosophy:

- **Artisanal:** Hand-painted aesthetic
- **Warm:** Inviting color palette
- **Professional:** Clean, readable layouts
- **Interactive:** Engaging hover effects
- **Responsive:** Works on all devices

---

## 🚀 Quick Start

### 1. Basic Setup

```bash
# In your Hugo project
cd themes/brew
hugo server
```

### 2. Customize Colors

Edit `assets/css/main.css`:

```css
:root {
    --brew-copper: #YOUR_COLOR;
    --brew-amber: #YOUR_COLOR;
}
```

### 3. Add Content

```markdown
---
title: "Your Brewery"
---

## Welcome

Your content here...
```

### 4. View in Browser

Navigate to `http://localhost:1313`

---

## 📚 Additional Resources

- **README.md** - Installation and configuration
- **BRUSHSTROKE-GUIDE.md** - Detailed styling guide
- **hugo.toml** - Configuration examples
- **Example content** - In `/content` directory

---

## 🎉 Features at a Glance

| Feature | Status | Description |
|---------|--------|-------------|
| Brushstroke Links | ✅ | Animated underlines on hover |
| Responsive Design | ✅ | Mobile and desktop optimized |
| SVG Graphics | ✅ | 5 custom brushstroke assets |
| Color Palette | ✅ | 7 brewery-themed colors |
| Animations | ✅ | Smooth, organic transitions |
| JavaScript Effects | ✅ | Progressive enhancements |
| Accessibility | ✅ | ARIA labels, keyboard nav |
| Documentation | ✅ | Complete guides and examples |
| Performance | ✅ | Lightweight and optimized |
| Customization | ✅ | Easy CSS variable system |

---

## 🍺 The Result

A website that feels as handcrafted as your beer:

- **Visual Identity:** Distinct brushstroke aesthetic
- **User Experience:** Smooth, engaging interactions
- **Brand Alignment:** Artisanal, warm, approachable
- **Technical Excellence:** Fast, accessible, modern

---

**Brew with Style. Code with Passion.** 🍺✨

© 2024 Brew Theme - Crafted for craft breweries