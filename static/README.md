# Utho IaaS Landing Page - Static Version

This is a static HTML, CSS, and JavaScript version of the Utho IaaS landing page, converted from the original React application.

## Files Structure

```
static/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet with all styles
├── script.js           # JavaScript for interactivity
├── data.json           # JSON data for dynamic content
├── hero-cloud.jpg      # Hero background image
└── README.md           # This file
```

## Features

- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **SEO Optimized**: Includes proper meta tags, structured data ready
- **Interactive Elements**: Accordion FAQ section, hover effects
- **Dynamic Content**: Content loaded from JSON for easy updates
- **Professional Design**: Enterprise-grade styling with custom CSS variables
- **Performance Optimized**: Minimal JavaScript, efficient CSS

## How to Use

1. **Local Development**: 
   - Open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

2. **Deployment**:
   - Upload all files to your web server
   - Ensure `data.json` is accessible via HTTP
   - Update image paths if needed

3. **Customization**:
   - Edit `data.json` to update content (features, testimonials, FAQs)
   - Modify CSS variables in `styles.css` for color scheme changes
   - Update meta tags in `index.html` for SEO

## Key Components

### Hero Section
- Full-screen background with gradient overlay
- Prominent call-to-action buttons
- SEO-optimized headings and content

### Console Preview
- Laptop mockup design ready for video integration
- Feature highlights with icons
- Responsive grid layout

### Datacenter Locations
- Left: Location descriptions with tier information
- Right: Map placeholder for interactive map integration

### Features Grid
- Responsive card layout
- Hover animations and effects
- Icon integration

### Customer Section
- Logo grid with hover effects
- Testimonial cards with star ratings
- Author information with avatars

### FAQ Section
- Collapsible accordion interface
- Smooth animations
- Keyboard accessible

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: hsl(210, 85%, 25%);    /* Main brand color */
    --accent: hsl(180, 85%, 35%);     /* Accent color */
    --background: hsl(0, 0%, 100%);   /* Background */
    /* ... other variables */
}
```

### Content
Update `data.json` to modify:
- Features list
- Datacenter locations
- Customer testimonials
- FAQ questions and answers

### Styling
- Modify `styles.css` for visual changes
- All styles use semantic CSS variables
- Responsive breakpoints included

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Basic support (no CSS Grid fallbacks included)

## Performance

- Minimal JavaScript footprint
- Optimized CSS with utility classes
- Semantic HTML for accessibility
- Image optimization recommended

## Integration Notes

- Replace video placeholder in console section with actual demo video
- Integrate interactive map in datacenter locations section
- Update customer logos with actual brand assets
- Connect CTA buttons to actual signup/pricing pages

## SEO Features

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions and keywords
- Open Graph and Twitter Card tags
- Canonical URLs
- Alt text for images
- Clean, crawlable URLs ready

The static version maintains all the functionality and design of the original React application while being completely self-contained and deployable to any web server.