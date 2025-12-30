# Brew - Brushstroke Brewery Theme for Hugo

A beautifully crafted Hugo theme designed specifically for breweries, featuring hand-painted brushstroke aesthetics that bring artisanal character to your website.

## Features

### 🎨 Brushstroke Design Elements

- **Horizontal Dividers**: Hand-painted brushstroke SVGs replace traditional lines
- **Link Hover Effects**: Animated brushstroke underlines on navigation and content links
- **Section Accents**: Brushstroke decorations on headers and footers
- **Interactive Animations**: Smooth, artistic transitions and hover effects

### 🍺 Brewery-Focused

- Warm, rustic color palette (amber, copper, gold, cream)
- Typography optimized for craft brewery branding
- Responsive design for all devices
- Clean, elegant layout perfect for showcasing beers and taproom info

### ⚡ Performance

- Lightweight CSS and JavaScript
- Optimized SVG graphics
- Smooth animations using CSS transforms
- Progressive enhancement approach

## Color Palette

```css
--brew-dark: #2c1810      /* Deep brown for text */
--brew-brown: #5d4037     /* Rich brown for accents */
--brew-amber: #d4a574     /* Warm amber for highlights */
--brew-gold: #c89446      /* Golden tones */
--brew-cream: #f5e6d3     /* Light cream backgrounds */
--brew-copper: #b87333    /* Copper for links and buttons */
--brew-light: #faf7f2     /* Main background */
```

## Installation

1. Copy the `brew` theme to your Hugo `themes` directory:
```bash
cd your-hugo-site
git clone [repository-url] themes/brew
```

2. Update your `hugo.toml`:
```toml
theme = 'brew'
```

3. Start your Hugo server:
```bash
hugo server
```

## Configuration

### Basic Setup

```toml
baseURL = 'https://yourbrewery.com/'
languageCode = 'en-us'
title = 'Your Brewery Name'
theme = 'brew'

[params]
  description = 'Handcrafted beers brewed with passion'
  author = 'Your Brewery'
```

### Navigation Menu

Add your menu items in `hugo.toml`:

```toml
[menu]
  [[menu.main]]
    name = 'Home'
    url = '/'
    weight = 1

  [[menu.main]]
    name = 'Our Beers'
    url = '/beers/'
    weight = 2

  [[menu.main]]
    name = 'Taproom'
    url = '/taproom/'
    weight = 3
```

## Content Structure

### Homepage

Create `content/_index.md`:

```markdown
---
title: "Your Brewery Name"
date: 2024-01-15
draft: false
---

## Welcome to Our Craft Brewery

Your brewery description here...
```

### Beer Pages

Create beer pages in `content/beers/`:

```markdown
---
title: "Beer Name"
date: 2024-01-15
draft: false
description: "Beer description"
---

## Beer Name

**Style:** IPA
**ABV:** 6.5%
**IBU:** 45

Description and tasting notes...
```

## Customization

### Custom CSS

Add custom styles in `assets/css/custom.css` and import in your theme.

### SVG Brushstrokes

The theme includes several brushstroke SVG files in `static/images/`:
- `brush-stroke-horizontal.svg` - For dividers and borders
- `brush-stroke-underline.svg` - For link hover effects
- `brush-stroke-accent.svg` - For decorative elements
- `brush-splatter.svg` - For background accents

You can customize these SVGs by editing the files or creating new ones.

### Typography

The theme uses Georgia and Garamond serif fonts by default. To change:

```css
body {
    font-family: 'Your-Font', serif;
}
```

## Brushstroke Effects

### Navigation Links

Navigation links feature animated brushstroke underlines on hover:
- Smooth scale animation from left to right
- Customizable color through CSS variables
- Responsive and touch-friendly

### Section Hover

Sections lift slightly with a subtle shadow on hover, creating depth.

### Content Links

Regular content links display an animated brushstroke underline that grows from left to right on hover.

### Heading Links

H2 links (post titles) show a larger brushstroke effect on hover.

## JavaScript Interactions

The theme includes subtle JavaScript enhancements:

- **Section Reveal**: Sections fade and slide in as you scroll
- **Navigation Stagger**: Nav items animate in sequentially on page load
- **Link Color Variation**: Random color selection from palette on hover
- **Button Splash Effect**: Paint splash animation on button clicks

All JavaScript features are progressive enhancements - the site works perfectly without JavaScript.

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels on navigation
- Sufficient color contrast ratios
- Keyboard navigation support
- Focus indicators

## Credits

Theme designed and developed for craft breweries with love for both code and craft beer.

## License

MIT License - Feel free to use and modify for your brewery!

## Support

For issues, questions, or contributions, please visit the theme repository.

---

**Cheers to great design and great beer! 🍺**