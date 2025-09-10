# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth animations, and a clean design to showcase professional experience, projects, and skills.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean design with Tailwind CSS
- **TypeScript**: Full type safety
- **SEO Optimized**: Built-in Next.js SEO features
- **Fast Performance**: Optimized build and static generation

## 🏗️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

## 📦 Sections

- **Hero**: Introduction and overview
- **About**: Personal background and story
- **Experience**: Professional work experience
- **Projects**: Featured projects and work
- **GitHub Contributions**: Contribution graph display
- **Recent Achievements**: Latest accomplishments
- **Skills**: Technical skills and competencies
- **Contact**: Contact information and form

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohamvsonar/sohamvsonar.github.io
cd sohamvsonar.github.io
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

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run deploy` - Build and deploy to GitHub Pages

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

```bash
npm run deploy
```


## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── project-library/
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── github-contributions.tsx
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── projects.tsx
│   ├── recent-achievements.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts
```

## 🎨 Customization

### Colors and Themes

Modify the theme configuration in `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Content

Update the content in each component file to reflect your personal information:

- `src/components/hero.tsx` - Personal introduction
- `src/components/about.tsx` - About section
- `src/components/experience.tsx` - Work experience
- `src/components/projects.tsx` - Project showcase
- `src/components/skills.tsx` - Technical skills
- `src/components/contact.tsx` - Contact information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!