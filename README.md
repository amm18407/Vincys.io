# Vincys Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion. This landing page showcases AI-powered business solutions with a design inspired by modern tech companies like Perplexity.ai, UiPath, and Celonis.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient overlays and modern UI elements
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark Mode**: Built-in light/dark mode toggle with system preference detection
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Performance**: Optimized for Core Web Vitals with minimal layout shift
- **SEO Ready**: Comprehensive meta tags, Open Graph, and structured data
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 🎨 Design Inspiration

The design draws inspiration from:
- **Perplexity.ai**: Modern, clean tech vibes with gradient overlays
- **UiPath**: Bright accent colors and trust-driven design
- **Signavio**: Corporate-neutral, structured layout
- **Celonis**: Bold gradients and contemporary feel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── header.tsx           # Navigation header with mobile menu
│   ├── hero.tsx             # Hero section with animated content
│   ├── features.tsx         # Features grid with cards
│   ├── social-proof.tsx     # Testimonials and metrics
│   ├── cta-section.tsx      # Call-to-action section
│   ├── footer.tsx           # Footer with links and newsletter
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark/light mode toggle
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vincys-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js` and includes:
- **Primary**: Blue tones (#0ea5e9)
- **Secondary**: Purple tones (#d946ef)
- **Accent**: Orange tones (#f97316)
- **Neutral**: Gray scale (#f8fafc to #0f172a)

### Components

All components are modular and can be easily customized:
- Update content in component files
- Modify styles using TailwindCSS classes
- Adjust animations in Framer Motion components

### Meta Tags

Update SEO and social media meta tags in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card metadata
- Google verification

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The site automatically detects system preferences and includes a manual toggle. Dark mode styles are defined using TailwindCSS's `dark:` prefix.

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by route
- **CSS Optimization**: Purged unused CSS with TailwindCSS
- **Lazy Loading**: Components animate in when scrolled into view

## 🔧 Development

### Adding New Components

1. Create component file in `components/` directory
2. Export component as default or named export
3. Import and use in `app/page.tsx`

### Styling Guidelines

- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic color names from the custom palette

### Animation Guidelines

- Use Framer Motion for animations
- Implement `whileInView` for scroll-triggered animations
- Keep animations subtle and purposeful
- Ensure animations work with reduced motion preferences

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@vincys.io
- Website: https://vincys.io

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS

