# Charlie Henin - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

- **Multilingual Support**: Complete English/French translation with language toggle
- **Modern Design**: Clean, professional layout inspired by contemporary design trends
- **Enhanced Image Export**: Optimized layout captured as high-quality JPG, available in US Letter and A4 formats
- **Language-specific Downloads**: Downloads include language suffix (EN/FR) for easy identification
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animations**: Smooth Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Fully typed for better development experience
- **No Photo**: Professional layout without personal photos (North American standard)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-generated-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Personal Information

Update your personal information in `lib/portfolio-data.ts`:

- Personal info (name, title, about) - supports both English and French
- Contact information
- Work experience with localized descriptions
- Education with localized content
- Technologies (shared across languages)
- Hobbies with localized names

### Multilingual Support

The portfolio supports both English and French:

- **Language Toggle**: Click the EN/FR toggle in the header to switch languages
- **Automatic Language Detection**: Downloads are generated with language-specific filenames
- **Complete Translation**: All content including job descriptions, education details, and hobbies are translated

### Image Export

The portfolio includes high-quality image generation functionality:

- **US Letter Format**: Standard North American resume format
- **A4 Format**: International standard format
- **Optimized Layout**: Compact, professional layout designed to fit on a single page
- **Language-specific Filenames**: Downloads include language suffix (charlie-henin-resume-US-Letter-EN.jpg)
- **High Quality**: 2x scale rendering for crisp text and graphics
- Click the download buttons in the header to generate high-quality JPG images

### Styling

The design uses TailwindCSS with a custom color scheme:

- Primary colors: Blue tones
- Accent colors: Purple tones
- Clean typography with Inter font
- Professional spacing and layout

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Export**: html-to-image with high-quality JPG generation
- **Internationalization**: React Context for language management
- **Font**: Inter (Google Fonts)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy

You can deploy this portfolio to any hosting platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Use the Next.js build settings
- **AWS Amplify**: Deploy directly from Git
- **Docker**: Build and deploy in containers

## 📧 Contact Information

Current contact details in the portfolio:

- **Phone**: +33.629.68.53.34
- **Email**: charlie.henin@gmail.com
- **Website**: www.charliehenin.com
- **LinkedIn**: charlie-henin
- **GitHub**: kimchicharlie

## 🎯 Latest Updates

- ✅ **Multilingual Support**: Complete English/French translation with language toggle
- ✅ **Enhanced Image Export**: High-quality JPG generation with compact layout
- ✅ **Language-specific Downloads**: Automatic language detection in filenames
- ✅ Added current Stingray position (July 2024 - Present)
- ✅ Modern, professional design
- ✅ Mobile-responsive layout
- ✅ Smooth animations and interactions
- ✅ SEO optimization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for professional excellence**