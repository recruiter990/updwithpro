# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd digital-marketing-agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your API keys (optional for development).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Next Steps

### 1. Customize Content
- Edit `lib/constants.ts` to update services, pricing, and stats
- Update testimonials in `components/sections/Testimonials.tsx`
- Modify case studies in `app/portfolio/page.tsx`

### 2. Add Your Branding
- Replace logo in `components/layout/Navbar.tsx`
- Update colors in `tailwind.config.ts`
- Add your favicon to `public/`

### 3. Configure Email Service
- Sign up for [Resend](https://resend.com) or another email service
- Add your API key to `.env.local`
- Uncomment and configure the email code in `app/api/contact/route.ts`

### 4. Add Analytics
- Set up Google Analytics
- Add Facebook Pixel (if needed)
- Update tracking IDs in `.env.local`

### 5. Add Images
- Replace placeholder images with real photos
- Optimize images using Next.js Image component
- Add images to `public/images/`

### 6. Deploy
- Push to GitHub
- Deploy on [Vercel](https://vercel.com) (recommended)
- Or deploy to your preferred hosting provider

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_COLOR",
    // ...
  }
}
```

### Modify 3D Animation
Edit `components/3d/FloatingShapes.tsx` to customize the 3D scene.

### Update Typography
Change fonts in `app/globals.css` and `tailwind.config.ts`.

## 📚 Documentation

See `README.md` for full documentation.

## 🆘 Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript errors
```bash
# Check types
npm run lint
```

## 📞 Support

For issues or questions, check the README or open an issue on GitHub.

