# Tufte/Computer Modern Restyling Plan

## Design Principles

Tufte CSS emphasizes:
- Clean serif typography (Computer Modern/Latin Modern)
- Cream background (#fffff8) with dark text (#111)
- Wide left margins for sidenotes (though we won't use sidenotes)
- Minimal decoration - let typography speak
- No colored separators - use whitespace
- Subtle link styling (underlines that don't descend through descenders)

## Font Stack

```css
/* Body text */
font-family: "Computer Modern Serif", "Latin Modern Roman", Georgia, serif,
             "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji";

/* Code */
font-family: "Computer Modern Typewriter", "Latin Modern Mono",
             Consolas, monospace;

/* Headings (same as body, but could use sans for contrast) */
font-family: "Computer Modern Serif", Georgia, serif;
```

Font source: `https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts.css`

## Component-by-Component Changes

### 1. global.css
- [ ] Import Computer Modern fonts
- [ ] Set base font-size to 15px
- [ ] Body: cream background, CM Serif font
- [ ] Remove Nord color utilities (keep only .danger for red)
- [ ] Update typography scale to Tufte sizes (h1: 3.2rem, h2: 2.2rem italic, etc.)
- [ ] Tufte-style link underlines
- [ ] Code styling with CM Typewriter

### 2. BaseLayout.astro
- [ ] Update theme-color meta to #fffff8
- [ ] Remove KaTeX CSS (not needed)
- [ ] Add CM font preconnect

### 3. Splash.tsx + Splash.css
- [ ] Remove gradient background - use cream
- [ ] Left-align content with Tufte margins (87.5% width, 12.5% left padding)
- [ ] Avatar: smaller, simple circle
- [ ] Name as h1, tagline as italic subtitle
- [ ] Reduce visual weight - more understated

### 4. Sep.astro
- [ ] **Remove entirely** - Tufte uses whitespace, not colored bars
- [ ] Update index.astro to remove Sep imports

### 5. Card.astro
- [ ] Remove solid border
- [ ] Use subtle bottom border or just spacing
- [ ] Alternatively: light gray top border as section divider

### 6. Resume.astro
- [ ] Use semantic HTML (article, section)
- [ ] Section headers as h2 (italic per Tufte)
- [ ] Experience entries as h3
- [ ] Content at 55% max-width on desktop
- [ ] Remove .big/.biggish classes, use proper heading hierarchy

### 7. ResumeCardInterior.astro
- [ ] Company name as h3
- [ ] Role as span.subtitle (italic)
- [ ] Dates in smaller text
- [ ] Clean paragraph styling

### 8. HeadedList.astro
- [ ] Header as h4 or strong
- [ ] Standard list styling
- [ ] Remove anchor functionality (or make subtle)

### 9. ButtonLink.astro
- [ ] Convert to simple anchor links
- [ ] Remove button styling
- [ ] Tufte-style underlines

### 10. Link.astro
- [ ] Tufte-style underlines (background gradient trick)

### 11. Highlights.astro
- [ ] Simple section with h2 header
- [ ] Paragraph content
- [ ] Match Tufte container width

### 12. Footer.astro
- [ ] Minimal - just GitHub icon and copyright
- [ ] Small text, centered or left-aligned
- [ ] Remove "Theme inspired by Nord" or update

### 13. index.astro
- [ ] Remove Sep components
- [ ] Add article wrapper with Tufte container class
- [ ] Proper semantic structure

## Layout Structure

```
<body>
  <article class="tufte">
    <header>  <!-- Splash -->
      <h1>Jiahong</h1>
      <p class="subtitle">Currently...</p>
    </header>

    <section>  <!-- Highlights -->
      <h2>What's New</h2>
      <p>...</p>
    </section>

    <section>  <!-- Resume -->
      <h2>Experience</h2>
      ...
    </section>

    <footer>
      ...
    </footer>
  </article>
</body>
```

## CSS Variables

```css
:root {
  --bg: #fffff8;
  --fg: #111;
  --fg-light: #555;
  --accent: #a00000;
  --border: #ccc;

  --font-body: "Computer Modern Serif", Georgia, serif;
  --font-code: "Computer Modern Typewriter", Consolas, monospace;

  --content-width: 55%;
  --container-width: 87.5%;
  --margin-left: 12.5%;
}
```

## Migration Order

1. Update global.css with new fonts and base styles
2. Update BaseLayout.astro
3. Restyle Splash (most visible change)
4. Remove Sep component and update index.astro
5. Restyle Card and Resume components
6. Update remaining components
7. Final polish and responsive testing

## Responsive Considerations

At < 760px:
- Full width content (no wide margins)
- Slightly smaller base font (14px)
- Stack elements vertically
