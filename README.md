# Soham Sonar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🧩 **shadcn/ui** components
- ✨ **Framer Motion** animations
- 🌙 **Dark mode** support
- 📱 **Fully responsive**
- ♿ **Accessible** (WCAG AA compliant)
- 🚀 **Performance optimized**
- 🔍 **SEO ready**

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/
├── lib/
│   └── utils.ts
└── ...
```

## Performance

This portfolio is optimized for performance with:
- Server-side rendering (SSR)
- Static generation where possible
- Optimized images and fonts
- Code splitting
- Minimal bundle size

## Accessibility

Built with accessibility in mind:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- High contrast ratios

## License

MIT License - see LICENSE file for details.