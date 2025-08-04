# SecuFleet Next.js Application

This is the SecuFleet application migrated from React to Next.js, maintaining the same codebase and functionality.

## Features

- Fleet Management Solutions
- Professional Consulting Services
- Web and App Development
- Vehicle Inspection and Tracking
- Route Planning and Optimization
- Digital Reports and Analytics
- Asset Tracking and GPS Monitoring

## Technology Stack

- **Framework**: Next.js 15.4.5
- **React**: 19.1.0
- **Styling**: Bootstrap 5.3.7
- **Icons**: Font Awesome
- **Animations**: WOW.js
- **Routing**: Next.js App Router

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd secufleet-nextjs
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
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with Font Awesome setup
│   ├── page.js            # Home page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page components
│   └── layout/           # Layout components (Navbar, Footer)
└── pages/                # Additional pages (legacy from React app)

public/
└── assets/               # Static assets
    ├── css/              # Stylesheets
    ├── images/           # Images and icons
    ├── js/               # JavaScript files
    ├── fonts/            # Font files
    └── videos/           # Video files
```

## Key Changes from React to Next.js

1. **Routing**: Migrated from React Router to Next.js App Router
2. **Image Handling**: Updated image imports to work with Next.js public directory
3. **CSS Imports**: Updated CSS import paths to point to public directory
4. **Link Components**: Replaced React Router Link with Next.js Link
5. **Client Components**: Added 'use client' directive for interactive components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to SecuFleet.
