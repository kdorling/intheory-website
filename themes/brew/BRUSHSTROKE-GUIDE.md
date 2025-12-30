# Brushstroke Styling Guide

A comprehensive guide to using brushstroke effects in the Brew theme.

## Table of Contents

1. [Color Variables](#color-variables)
2. [Brushstroke SVGs](#brushstroke-svgs)
3. [CSS Classes](#css-classes)
4. [Link Effects](#link-effects)
5. [Custom Elements](#custom-elements)
6. [Best Practices](#best-practices)

---

## Color Variables

Use these CSS variables throughout your custom styles to maintain consistency:

```css
var(--brew-dark)      /* #2c1810 - Deep brown for primary text */
var(--brew-brown)     /* #5d4037 - Rich brown for secondary text */
var(--brew-amber)     /* #d4a574 - Warm amber for highlights */
var(--brew-gold)      /* #c89446 - Golden accents */
var(--brew-cream)     /* #f5e6d3 - Light backgrounds */
var(--brew-copper)    /* #b87333 - Links and interactive elements */
var(--brew-text)      /* #3a2a1a - Body text */
var(--brew-light)     /* #faf7f2 - Page background */
```

### Example Usage

```css
.custom-element {
    color: var(--brew-brown);
    background: var(--brew-cream);
    border-left: 4px solid var(--brew-copper);
}
```

---

## Brushstroke SVGs

The theme includes four main SVG brushstroke assets:

### 1. Horizontal Brushstrokes
**File:** `/images/brush-stroke-horizontal.svg`  
**Use:** Dividers, borders, header/footer decorations  
**Dimensions:** 800x40px

```css
.custom-divider {
    height: 12px;
    background-image: url('/images/brush-stroke-horizontal.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.6;
    color: var(--brew-amber);
}
```

### 2. Underline Brushstrokes
**File:** `/images/brush-stroke-underline.svg`  
**Use:** Link hover effects, heading accents  
**Dimensions:** 300x20px

```css
.custom-link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 8px;
    background-image: url('/images/brush-stroke-underline.svg');
    background-size: 100% 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.custom-link:hover::after {
    opacity: 0.8;
}
```

### 3. Accent Brushstrokes
**File:** `/images/brush-stroke-accent.svg`  
**Use:** Decorative elements, special sections  
**Dimensions:** 200x60px

### 4. Brush Splatter
**File:** `/images/brush-splatter.svg`  
**Use:** Background decorations, badges  
**Dimensions:** 150x150px

---

## CSS Classes

### `.brush-accent`

Adds a brushstroke underline to inline elements.

```html
<span class="brush-accent">Featured Text</span>
```

**CSS:**
```css
.brush-accent {
    position: relative;
    display: inline-block;
}

.brush-accent::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-image: url('/images/brush-stroke-underline.svg');
    opacity: 0.6;
    color: var(--brew-amber);
}
```

### `.brush-divider`

Creates a horizontal brushstroke divider.

```html
<div class="brush-divider"></div>
```

**Alternative:** Use `<hr>` tags - they're automatically styled with brushstrokes!

```html
<hr>
```

### `.highlight-box`

Creates a content box with brushstroke accent at the top.

```html
<div class="highlight-box">
    <h3>Important Information</h3>
    <p>Your content here...</p>
</div>
```

**Styling:**
- Cream background
- Copper left border
- Gradient brushstroke at top
- Responsive padding

---

## Link Effects

### Navigation Links

Navigation links automatically get brushstroke hover effects:

```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/beers/">Our Beers</a></li>
    </ul>
</nav>
```

**Effect:** Brushstroke underline scales in from left to right on hover.

### Content Links

Regular links in content areas have a gradient underline effect:

```html
<p>Check out our <a href="/taproom/">taproom</a> for details.</p>
```

**Effect:** Gradient line grows from left to right on hover.

### Heading Links (H2)

Links within H2 headings get enhanced brushstroke effects:

```html
<h2><a href="/beer-name/">Copper Trail Amber Ale</a></h2>
```

**Effect:** Larger brushstroke underline with vertical movement on hover.

---

## Custom Elements

### Creating Custom Brushstroke Buttons

```html
<button class="brew-button">
    <span>Reserve a Tour</span>
</button>
```

```css
.brew-button {
    background: var(--brew-copper);
    color: var(--brew-light);
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: 'Georgia', serif;
}

.brew-button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: var(--brew-gold);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: 0;
}

.brew-button:hover::before {
    width: 300px;
    height: 300px;
}

.brew-button:hover {
    color: var(--brew-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(184, 115, 51, 0.3);
}
```

### Custom Section Headers with Brushstrokes

```html
<section class="brew-section">
    <h2 class="brush-heading">Featured Beers</h2>
    <div class="brush-divider"></div>
    <!-- Content -->
</section>
```

```css
.brew-section {
    position: relative;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.6);
}

.brew-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
        to right,
        transparent 0%,
        var(--brew-amber) 20%,
        var(--brew-gold) 50%,
        var(--brew-amber) 80%,
        transparent 100%
    );
    opacity: 0.5;
}
```

### Image Frames with Brushstroke Borders

```html
<div class="brush-frame">
    <img src="/images/brewery.jpg" alt="Our Brewery">
</div>
```

```css
.brush-frame {
    position: relative;
    display: inline-block;
    padding: 1rem;
    background: var(--brew-cream);
}

.brush-frame::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/images/brush-stroke-horizontal.svg');
    background-size: 100% 4px;
    background-position: top, bottom;
    background-repeat: no-repeat;
    opacity: 0.6;
    pointer-events: none;
}

.brush-frame img {
    display: block;
    max-width: 100%;
}
```

---

## Best Practices

### 1. Color Consistency

Always use CSS variables instead of hardcoded colors:

```css
/* ✅ Good */
color: var(--brew-copper);

/* ❌ Avoid */
color: #b87333;
```

### 2. SVG Color Control

Brushstroke SVGs use `currentColor` for the stroke. Control their color with the `color` property:

```css
.custom-element {
    background-image: url('/images/brush-stroke-horizontal.svg');
    color: var(--brew-amber); /* This controls the SVG color */
}
```

### 3. Opacity for Subtlety

Brushstrokes should enhance, not overwhelm. Use opacity:

```css
.brush-element {
    opacity: 0.6; /* Good starting point */
}

.brush-element:hover {
    opacity: 0.8; /* Slightly more visible on interaction */
}
```

### 4. Animation Timing

Use easing functions that feel organic:

```css
/* ✅ Smooth, natural */
transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

/* ❌ Too mechanical */
transition: transform 0.2s linear;
```

### 5. Responsive Considerations

Reduce brushstroke sizes on mobile:

```css
@media (max-width: 768px) {
    .brush-element {
        height: 8px; /* Smaller on mobile */
    }
}
```

### 6. Accessibility

Ensure brushstrokes are decorative only:

```html
<!-- SVGs should not contain semantic content -->
<div aria-hidden="true" class="brush-decoration"></div>
```

### 7. Performance

- Use CSS transforms (not position) for animations
- Leverage `will-change` for heavy animations sparingly
- Use `transform: translateZ(0)` to enable hardware acceleration

```css
.animated-brush {
    transform: translateX(0);
    transition: transform 0.3s ease;
    will-change: transform; /* Only on hover-able elements */
}
```

---

## Advanced Techniques

### Animated Brushstroke Reveal

```css
@keyframes brushReveal {
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0 0 0);
    }
}

.reveal-brush {
    animation: brushReveal 1s ease-out forwards;
}
```

### Parallax Brushstrokes

```javascript
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const brush = document.querySelector('.parallax-brush');
    brush.style.transform = `translateY(${scrolled * 0.3}px)`;
});
```

### Random Brushstroke Colors

```javascript
const colors = ['#d4a574', '#c89446', '#b87333'];
const links = document.querySelectorAll('.random-brush');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        link.style.setProperty('--brush-color', randomColor);
    });
});
```

---

## Examples in Content

### Beer Description Card

```html
<article class="beer-card">
    <h2 class="brush-heading">
        <a href="/beers/copper-trail/">Copper Trail Amber</a>
    </h2>
    <div class="beer-meta">
        <span class="brush-accent">5.8% ABV</span> | 
        <span class="brush-accent">32 IBU</span>
    </div>
    <hr>
    <p>A smooth, balanced amber ale with caramel malt sweetness...</p>
    <button class="brew-button">
        <span>Learn More</span>
    </button>
</article>
```

### Highlighted Announcement

```html
<div class="highlight-box">
    <h3>🍺 New Release This Friday!</h3>
    <p>Join us for the debut of our <span class="brush-accent">Winter Warmer Imperial Stout</span>. 
    Limited quantities available.</p>
</div>
```

### Event Section

```html
<section class="brew-section">
    <h2>Upcoming Events</h2>
    <div class="brush-divider"></div>
    
    <article>
        <h3>Brewery Tour & Tasting</h3>
        <p>Every Saturday at 2pm and 4pm</p>
    </article>
    
    <hr>
    
    <article>
        <h3>Live Music Night</h3>
        <p>First Friday of every month</p>
    </article>
</section>
```

---

## Troubleshooting

### Brushstrokes Not Showing

1. **Check file paths:** SVGs must be in `/static/images/`
2. **Verify Hugo build:** Run `hugo` to ensure static files are copied
3. **Browser cache:** Hard refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Colors Not Matching

1. **Use CSS variables:** Ensure you're using `var(--brew-*)` 
2. **Check SVG color:** Use `color` property, not `stroke` or `fill`
3. **Opacity conflicts:** Parent opacity affects child elements

### Animation Performance

1. **Use transforms:** Avoid animating `width`, `height`, `top`, `left`
2. **Limit repaints:** Minimize changes to layout properties
3. **Reduce complexity:** Simplify SVG filters on mobile devices

---

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [SVG Filters Guide](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Cubic Bezier Easing](https://cubic-bezier.com/)

---

**Happy Brewing! 🍺**

*For questions or contributions, please refer to the main theme README.*