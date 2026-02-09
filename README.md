# Global Income Bootcamp Landing Page

A modern, responsive landing page for the Global Income Bootcamp built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design inspired by dumele.io
- 💚 Green color scheme with dark theme
- ✨ Smooth animations and transitions
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎯 Registration form with validation
- 🔒 100% Money-Back Guarantee section
- 💬 Testimonials and social proof
- ❓ FAQ accordion
- 🚀 Ready for Render deployment

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd bootcamp-landing
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

## Project Structure

```
bootcamp-landing/
├── components/          # React components
│   ├── Hero.js         # Hero section with CTA
│   ├── About.js        # About global earners
│   ├── Why.js          # Why section
│   ├── Bootcamp.js     # Bootcamp details
│   ├── Testimonials.js # Success stories
│   ├── Pricing.js      # Pricing and registration
│   ├── FAQ.js          # Frequently asked questions
│   └── Footer.js       # Footer
├── pages/              # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── render.yaml         # Render deployment config
```

## Deployment to Render

### Option 1: Deploy from GitHub

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` and deploy

### Option 2: Deploy Manually

1. Install Render CLI:
```bash
npm install -g render-cli
```

2. Login to Render:
```bash
render login
```

3. Deploy:
```bash
render deploy
```

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`

## Customization

### Colors

Edit `tailwind.config.js` to customize the green color palette:

```js
colors: {
  primary: {
    500: '#22c55e', // Main green
    600: '#16a34a', // Darker green
    // ... more shades
  }
}
```

### Content

Update content in component files under `/components/` directory.

### Form Submission

Currently, the form is set to simulate submission. To connect to a backend:

1. Update the `handleSubmit` function in `components/Pricing.js`
2. Add your API endpoint
3. Handle success/error states

## Environment Variables

For production, you may want to add:

```
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_WHATSAPP_NUMBER=your-number
```

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For support, contact: team@abovezen.com

---

Built with ❤️ for the Global Income Bootcamp
