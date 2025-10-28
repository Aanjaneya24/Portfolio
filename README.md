# Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

Visit the live portfolio at: [Portfolio](https://portfolio-inky-chi-6ru5lsgmzu.vercel.app/)

## ✨ Features

- 📱 **Fully Responsive Design** - Optimized for all screen sizes
- 🎨 **Modern UI** - Smooth animations with Framer Motion
- 🌓 **Dark/Light Mode** 
  - Seamless theme switching with persistent preference
  - Custom magical cursor with spotlight effect (dark mode)
  - Theme-specific UI elements and animations
  - Dynamic parallax effects (moon in dark mode, sun in light mode)
- ⚡ **Fast Performance** - Optimized Next.js build
- 🎯 **SEO Optimized** - Meta tags and structured data
- 🧩 **Modular Code** - Clean, maintainable architecture

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Theme Management:** next-themes
- **Icons:** React Icons
- **Deployment:** GitHub Pages (or Vercel/Netlify)
- **Version Control:** Git & GitHub

## 📄 Sections

- **About** - Introduction and professional summary
- **Skills** - Technical skills with animated display
- **Experience** - Work experience timeline with detailed bullet points
- **Projects** - Showcase of personal and professional projects
- **Education** - Academic background
- **Achievements** - Notable accomplishments and awards
- **Contact** - Get in touch section

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Aanjaneya24/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will auto-reload when you make changes

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/      # Project screenshots
│   │   ├── skills/        # Skill icons
│   │   └── Aanjaneya.png  # Profile photo
│   └── favicon.png
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   │   ├── home/         # Home page sections
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utility functions and metadata
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── LICENSE
├── README.md
└── package.json
```

## 🎨 Customization

To customize this portfolio for yourself:

1. **Update Personal Information:**
   - Edit `src/lib/metadata.ts` with your details
   - Update `portfolioData.json` with your information

2. **Replace Images:**
   - Add your profile photo to `public/images/`
   - Add project screenshots to `public/images/projects/`
   - Update favicon.png

3. **Modify Sections:**
   - Edit components in `src/components/home/`
   - Customize colors in `tailwind.config.ts`

4. **Update Domain:**
   - Change `CNAME` file to your domain
   - Update `siteUrl` in `src/lib/metadata.ts`

## 🌐 Deployment

### GitHub Pages

1. Update `next.config.js` with your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Deploy using GitHub Actions (workflow included)

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aanjaneya Pandey**

- Portfolio: [https://aanjaneyapandey.com/](https://aanjaneyapandey.com/)
- LinkedIn: [Aanjaneya Pandey](https://www.linkedin.com/in/aanjaneya-pandey-9715b2335/)
- GitHub: [@Aanjaneya24](https://github.com/Aanjaneya24)
- LeetCode: [@Aanjaneya24](https://leetcode.com/u/Aanjaneya24/)
- Email: pandeyaanjaneya76@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ If you like this portfolio, please give it a star on GitHub!
