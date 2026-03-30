# 🌍 Go Explore Quests - Complete Travel Booking Platform

A modern, full-featured travel booking application inspired by Booking.com, featuring 22+ destinations worldwide with detailed itineraries, real-time pricing, and comprehensive booking functionality.

![Go Explore Quests](https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80)

## ✨ Features

### 🗺️ Destinations
- **22+ destinations** across Europe, Asia, and Middle East
- **5 high-quality images** per destination with carousel gallery
- Detailed destination information including:
  - Local currency, timezone, and language
  - Visa requirements
  - Safety ratings
  - Best months to visit
  - User reviews and ratings

### 📅 Detailed Daily Itineraries
- **5-7 day curated plans** for each destination
- Real attractions with addresses, opening times, and costs
- Morning, afternoon, and evening activities
- Local tips and recommendations
- Daily cost breakdowns

### 🎯 Booking System
- **5-step booking process**:
  1. Travel details (dates, travelers, rooms)
  2. Flight class selection (Economy, Premium, Business)
  3. Hotel category (Budget, Standard, Luxury)
  4. Extras (insurance, transfers, tours, dining)
  5. Secure payment
- Real-time price calculation
- Taxes and fees breakdown
- Booking confirmation with reference number

### 💰 Realistic Pricing
- Dynamic calculations based on:
  - Number of travelers
  - Travel style (Budget, Standard, Comfort, Luxury)
  - Flight class
  - Hotel category
  - Activities and extras
- 15% taxes and fees (similar to Booking.com)
- Price breakdown by category

### 🎨 Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Beautiful image carousels
- Interactive booking flow
- Dark mode support

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query 5.83.0
- **Forms**: React Hook Form 7.61.1 + Zod
- **Animation**: Framer Motion 12.38.0
- **Testing**: Vitest 3.2.4 + Playwright 1.57.0

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun 1.0+
- npm or bun package manager

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd go-explore-quests-main
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Or using bun
bun install
```

3. **Start development server**
```bash
# Using npm
npm run dev

# Or using bun
bun run dev
```

4. **Open in browser**
```
http://localhost:8080
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run ESLint
```

## 🌍 Destinations Included

### Europe (9)
- 🇮🇹 Rome, Florence, Venice
- 🇫🇷 Paris, Nice
- 🇪🇸 Barcelona, Madrid
- 🇬🇷 Athens, Santorini

### Asia & Middle East (13)
- 🇯🇵 Tokyo, Kyoto, Osaka
- 🇹🇭 Bangkok, Chiang Mai, Phuket
- 🇸🇬 Singapore
- 🇦🇪 Dubai
- 🇹🇷 Istanbul
- 🇰🇷 Seoul
- 🇮🇩 Bali

## 📊 Project Structure

```
go-explore-quests-main/
├── src/
│   ├── components/
│   │   ├── BookingModal.tsx    # Complete booking flow
│   │   ├── ui/                  # shadcn/ui components
│   │   └── ...
│   ├── data/
│   │   ├── catalog.ts           # Destinations data
│   │   ├── daily-plans.ts       # Detailed itineraries
│   │   └── destinations.ts      # Destination info
│   ├── pages/
│   │   ├── Index.tsx            # Main page
│   │   └── NotFound.tsx         # 404 page
│   ├── hooks/
│   ├── i18n/
│   │   └── translations.ts      # Multi-language support
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Key Features Implementation

### Booking System
The booking system (`src/components/BookingModal.tsx`) includes:
- Multi-step form with progress indicator
- Flight class selection with price multipliers
- Hotel category selection
- Travel extras (insurance, transfers, tours)
- Secure payment form
- Booking confirmation

### Daily Plans
Each destination has detailed daily plans (`src/data/daily-plans.ts`):
- Structured activities for morning, afternoon, evening
- Real attraction names and addresses
- Opening hours and duration
- Entry costs
- Local tips and recommendations

### Pricing Engine
Realistic pricing calculation (`src/data/catalog.ts`):
```typescript
calculateTrip(place, days, travelers, style, transport)
```
- Base prices from real travel data
- Dynamic multipliers for travel style
- Room calculations
- 12% hotel taxes
- 5% booking fees

## 🔧 Configuration

### Environment Variables
Create a `.env` file if needed:
```env
VITE_API_URL=your-api-url
VITE_APP_TITLE=Go Explore Quests
```

### Tailwind Configuration
Customized in `tailwind.config.ts`:
- Custom colors (CSS variables)
- Extended border radius
- Custom animations
- Font families (Plus Jakarta Sans, Inter)

## 📝 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests with Playwright
npx playwright test
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com)
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

## 📞 Support

For support, email zakariaelqannaadv@gmail.com or open an issue in the repository.

---

Built with ❤️ for travel enthusiasts worldwide
