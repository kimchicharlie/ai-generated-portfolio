# Charlie Henin - Professional Portfolio

This project is my upgraded resume website, built as the next step after my previous [portfolio](https://github.com/kimchicharlie/portfolio).

My previous site was starting to feel outdated, so I set out to build a more modern version—tailored to the North American resume style, powered by newer technologies, and created as an experiment in AI-assisted development.

One of my goals was to see how far I could go without writing much code myself. Using Cursor (claude-4-sonnet), I explored the limits of AI-assisted development.

The result is a modern, responsive website powered by:
- Next.js
- TypeScript
- TailwindCSS

I also added a small memory game so visitors can get to know me in a more interactive way!


## 🌟 Features

- **Multilingual Support**: Complete English/French translation with language toggle
- **Modern Design**: Clean, professional layout inspired by contemporary design trends
- **PDF Download**: PDF download, available in US Letter and A4 formats
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animations**: Smooth Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Fully typed for better development experience

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

Update personal information in `lib/portfolio-data.ts`:

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

### PDF Export

The portfolio includes high-quality PDF generation functionality:

- **US Letter Format**: Standard North American resume format
- **A4 Format**: International standard format
- **Optimized Layout**: Compact, professional layout designed to fit on a single page
- **Language-specific Filenames**: Downloads include language suffix (charlie-henin-resume-US-Letter-EN.pdf)
- Click the download buttons in the header to generate high-quality PDF

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
- **PDF generation**: jspdf
- **Internationalization**: React Context for language management
- **Font**: Inter (Google Fonts)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.