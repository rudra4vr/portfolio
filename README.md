# Creative Designer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and GSAP/Framer Motion animations. Perfect for showcasing graphic design, video editing, and animation work.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎥 Video and image portfolio with filtering
- 📝 Contact form with validation
- 🌙 Dark mode support
- 🔍 SEO optimized
- ⚡ Fast performance

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Content

1. **Profile Information**
   - Update the profile picture in `public/placeholder-profile.jpg`
   - Modify the bio and skills in `src/components/About.tsx`

2. **Portfolio Items**
   - Add your projects in `src/components/Portfolio.tsx`
   - Replace placeholder images in the `public` directory
   - Update video URLs and descriptions

3. **Contact Information**
   - Update social media links in `src/components/Footer.tsx`
   - Modify contact email and location

4. **Colors and Styling**
   - Customize the color scheme in `tailwind.config.js`
   - Modify animations in individual components

### Adding New Projects

1. Add your project media to the `public` directory
2. Update the `projects` array in `src/components/Portfolio.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'video', // or 'logo' or 'animation'
    thumbnail: '/your-thumbnail.jpg',
    videoUrl: 'https://your-video-url.mp4', // optional
    description: 'Project description',
  },
  // Add more projects...
]
```

## Deployment

The site is ready to be deployed to Vercel or Netlify:

### Vercel
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
netlify deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [GSAP](https://greensock.com/gsap/) and [Framer Motion](https://www.framer.com/motion/)
