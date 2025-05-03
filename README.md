# Creative Portfolio Website

A modern, responsive portfolio website for graphic designers built with pure HTML, CSS, and JavaScript. Features include animated sections, interactive elements, and a clean, creative design.

## Features

- Modern, creative design with dark theme
- Responsive layout for all screen sizes
- Animated sections with AOS and GSAP
- Interactive particle background
- Portfolio filtering system
- Image gallery with lightbox
- Testimonials slider
- Contact form with validation
- Smooth scrolling
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- GSAP for animations
- AOS (Animate On Scroll)
- Particles.js for background effects
- Lightbox2 for image gallery
- Font Awesome for icons

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/creative-portfolio.git
cd creative-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
creative-portfolio/
├── public/
│   ├── images/
│   │   └── videos/
│   └── styles/
│       └── main.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors
Edit the CSS variables in `src/styles/main.css`:
```css
:root {
    --primary-color: #FF3D00;
    --secondary-color: #00BCD4;
    --background-color: #0A0A0A;
    /* ... */
}
```

### Content
Update the content in `index.html`:
- Replace placeholder text
- Add your own images to the `public/images` directory
- Update social media links
- Add your own portfolio items

### Animations
Customize animations in `src/js/main.js`:
- Adjust GSAP animation parameters
- Modify AOS settings
- Update particle.js configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Font Awesome for icons
- Vincent Garreau for particles.js
- Michał Sajnóg for AOS
- GreenSock for GSAP
- Lokesh Dhakar for Lightbox2
