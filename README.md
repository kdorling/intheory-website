# 🍺 Artisan Brewery Website - Brushstroke Theme

A beautifully crafted Hugo website featuring hand-painted brushstroke aesthetics designed specifically for craft breweries and taprooms.

![Theme: Brew](https://img.shields.io/badge/theme-brew-d4a574)
![Hugo](https://img.shields.io/badge/hugo-v0.153+-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🎨 Features

- **Brushstroke Aesthetics** - Hand-painted visual elements throughout
- **Warm Color Palette** - Amber, copper, and gold brewery colors
- **Animated Interactions** - Smooth, organic hover and scroll effects
- **Responsive Design** - Beautiful on desktop, tablet, and mobile
- **5 Custom SVGs** - Brushstroke assets for decorative elements
- **Performance Optimized** - Lightweight and fast-loading
- **Accessibility Focused** - Semantic HTML and ARIA labels

---

## 🚀 Quick Start

### 1. Start the Development Server

```bash
cd brew1
hugo server
```

Then open your browser to `http://localhost:1313`

### 2. Build for Production

```bash
hugo
```

Your site will be built in the `/public` directory.

---

## 📁 Project Structure

```
brew1/
├── content/              # Your content pages
│   ├── _index.md        # Homepage
│   ├── about/           # About section
│   └── beers/           # Beer listings
│
├── themes/brew/         # Brushstroke theme
│   ├── assets/
│   │   ├── css/         # Theme styles (470+ lines)
│   │   └── js/          # Interactive effects (147 lines)
│   ├── layouts/         # HTML templates
│   ├── static/images/   # 5 custom SVG brushstrokes
│   └── README.md        # Theme documentation
│
├── hugo.toml            # Site configuration
└── Documentation files...
```

---

## 🎨 Brushstroke Theme Highlights

### Visual Elements

- **Navigation Links** - Animated brushstroke underlines on hover
- **Section Dividers** - Hand-painted horizontal lines
- **Heading Accents** - Brushstrokes appear beneath titles
- **Interactive Buttons** - Paint splash effect on click
- **Content Cards** - Lift and shadow on hover

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Brew Dark | `#2c1810` | Primary text |
| Brew Amber | `#d4a574` | Highlights |
| Brew Copper | `#b87333` | Links, buttons |
| Brew Cream | `#f5e6d3` | Backgrounds |

All colors available as CSS variables: `var(--brew-*)`

---

## 📝 Adding Content

### Create a New Beer Page

```bash
hugo new beers/my-new-beer.md
```

Then edit the file:

```markdown
---
title: "West Coast IPA"
date: 2024-01-15
draft: false
---

## Tasting Notes

**ABV:** 7.2% | **IBU:** 65

Our West Coast IPA features bold hop flavors...
```

### Homepage

Edit `content/_index.md` to update your homepage content.

### Navigation Menu

Edit `hugo.toml` to add/modify menu items:

```toml
[[menu.main]]
  name = 'Taproom'
  url = '/taproom/'
  weight = 3
```

---

## 🎯 Theme Features

### Automatic Styling

These elements are automatically styled with brushstrokes:

- `<a>` links get gradient underlines on hover
- `<hr>` horizontal rules become brushstroke dividers
- `<nav>` navigation items get animated effects
- `<h2>` headings have brushstroke accents
- `<section>` content blocks lift on hover
- `<button>` elements show splash animations

### CSS Classes

```html
<!-- Add brushstroke accent to text -->
<span class="brush-accent">Featured</span>

<!-- Create a callout box -->
<div class="highlight-box">
    <h3>New Release!</h3>
    <p>Content here...</p>
</div>

<!-- Horizontal divider -->
<div class="brush-divider"></div>
```

---

## 🛠️ Customization

### Change Site Title

```toml
# hugo.toml
title = 'Your Brewery Name'
```

### Modify Theme Colors

Edit `themes/brew/assets/css/main.css`:

```css
:root {
    --brew-copper: #YOUR_COLOR;
    --brew-amber: #YOUR_COLOR;
}
```

### Add Custom Styles

Add your custom CSS at the end of `themes/brew/assets/css/main.css` or create a new file.

---

## 📚 Documentation

This project includes comprehensive documentation:

| File | Description |
|------|-------------|
| `themes/brew/README.md` | Theme installation and features |
| `BRUSHSTROKE-GUIDE.md` | Detailed styling guide with examples |
| `THEME-SHOWCASE.md` | Visual design showcase and specs |
| `IMPLEMENTATION-SUMMARY.md` | Technical implementation details |
| `QUICK-REFERENCE.md` | Quick reference card for common tasks |

**Total Documentation:** 2,200+ lines

---

## 🎨 SVG Assets

The theme includes 5 custom brushstroke SVGs:

1. **brush-stroke-horizontal.svg** - For dividers and borders
2. **brush-stroke-underline.svg** - For link hover effects
3. **brush-stroke-accent.svg** - For decorative elements
4. **brush-splatter.svg** - For background decorations
5. **brewery-icon.svg** - Beer glass logo with brushstroke textures

All SVGs use `currentColor` for easy color customization.

---

## 🌐 Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ iOS Safari 14+  
✅ Chrome Mobile 90+  

Gracefully degrades in older browsers.

---

## 📱 Responsive Design

- **Desktop (>768px):** Full layout with large typography
- **Mobile (≤768px):** Optimized layout with touch-friendly interactions

---

## ⚡ Performance

- **Build Time:** ~60ms
- **Total Assets:** < 10KB (all SVGs)
- **JavaScript:** Progressive enhancement (works without JS)
- **CSS:** GPU-accelerated animations

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios (WCAG AA)
- Focus indicators on all interactive elements

---

## 🎓 Learning Resources

### Hugo Documentation
- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Content Management](https://gohugo.io/content-management/)
- [Templates](https://gohugo.io/templates/)

### Theme Customization
- See `BRUSHSTROKE-GUIDE.md` for detailed styling examples
- Check `THEME-SHOWCASE.md` for visual design patterns
- Review example content in `/content` directory

---

## 🚀 Deployment

### Build the Site

```bash
hugo
```

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `hugo`
4. Publish directory: `public`

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework: Hugo
4. Output directory: `public`

### Deploy to GitHub Pages

```bash
hugo
cd public
git init
git add .
git commit -m "Deploy"
git push origin gh-pages
```

---

## 🔧 Troubleshooting

### Brushstrokes Not Showing

- Verify SVG files are in `themes/brew/static/images/`
- Run `hugo` to rebuild the site
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Styles Not Updating

- Stop the server (`Ctrl+C`)
- Clear Hugo cache: `hugo --cleanDestinationDir`
- Restart: `hugo server`

### Configuration Issues

- Check `hugo.toml` syntax
- Ensure `theme = 'brew'` is set
- Verify menu structure is correct

---

## 📦 What's Included

- ✅ Complete Hugo theme with brushstroke aesthetics
- ✅ 5 custom SVG brushstroke assets
- ✅ 470+ lines of custom CSS
- ✅ 147 lines of JavaScript enhancements
- ✅ 4 example content pages
- ✅ 2,200+ lines of documentation
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Performance optimizations

---

## 🎯 Perfect For

- Craft breweries and microbreweries
- Taprooms and beer halls
- Brewing supply companies
- Beer blogs and magazines
- Homebrew clubs and societies
- Beer festivals and events
- Any artisanal beverage business

---

## 💡 Tips

1. **Start with content** - Add your brewery's story and beers first
2. **Customize colors** - Match your brand with CSS variables
3. **Use the examples** - Reference provided content files
4. **Check documentation** - Comprehensive guides available
5. **Test responsive** - Verify on mobile devices

---

## 🤝 Contributing

This is a complete, ready-to-use theme. Feel free to:

- Customize for your brewery
- Extend with additional features
- Share improvements with the community

---

## 📄 License

MIT License - Free to use and modify for your brewery website.

---

## 🍺 Credits

Theme designed and developed for craft breweries with love for both code and craft beer.

**Special Features:**
- Hand-painted brushstroke aesthetics
- Warm, artisanal color palette
- Smooth, organic animations
- Brewery-focused content structure

---

## 🎉 Getting Help

1. **Read the docs** - Start with theme README and guides
2. **Check examples** - Review sample content pages
3. **Review code** - CSS and JS are well-commented
4. **Hugo docs** - Official Hugo documentation

---

## 🚀 Next Steps

1. Run `hugo server` to see the site
2. Explore the example pages
3. Add your brewery's content
4. Customize colors and styles
5. Deploy to production

---

**Cheers to great design and great beer! 🍺**

*Brew with style. Code with passion.*

© 2024 Brewery Brushstroke Theme - Crafted for craft breweries