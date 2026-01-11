# 📅 Daily Workflow Guide - How to Work with This Website

This guide will help you make daily changes, updates, and manage your website efficiently.

## 🚀 Quick Start - Daily Routine

### 1. **Starting Your Work Day**

```powershell
# Navigate to your project
cd C:\digital-marketing-agency

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Common Daily Tasks

### **Task 1: Update Content (Services, Pricing, Stats)**

**File to Edit:** `lib/constants.ts`

**What You Can Change:**
- Services descriptions and features
- Pricing plans and prices
- Statistics (clients, growth, impressions)
- Process steps

**Example - Update a Service:**
```typescript
{
  id: "social-media",
  title: "Social Media Management",
  description: "Your new description here",
  // ... update features array
}
```

**Example - Update Pricing:**
```typescript
{
  name: "Growth",
  price: 599,  // Change price here
  period: "mese",
  features: [
    "20 post/mese",
    // Add or remove features
  ],
}
```

**After Changes:**
- Save the file
- The page will automatically reload (hot reload)
- Check your browser to see changes

---

### **Task 2: Update Testimonials**

**File to Edit:** `components/sections/Testimonials.tsx`

**What You Can Change:**
- Client names
- Business names
- Testimonial text
- Ratings
- Images (add to `public/images/testimonials/`)

**Example:**
```typescript
{
  name: "Mario Rossi",
  business: "Ristorante Bella Vista",
  text: "Amazing results!",
  rating: 5,
  image: "/images/testimonials/mario.jpg"
}
```

---

### **Task 3: Update Portfolio/Case Studies**

**File to Edit:** `app/portfolio/page.tsx`

**What You Can Change:**
- Case study titles
- Descriptions
- Results/metrics
- Images
- Client names

---

### **Task 4: Update Contact Information**

**Multiple Files to Edit:**

1. **Footer Contact Info:** `components/layout/Footer.tsx`
   - Email: `info@digitalagency.it`
   - Phone: `+39 349 123 4567`
   - Address: `Ancona, Italia`

2. **Navbar:** `components/layout/Navbar.tsx`
   - Logo text
   - Navigation links

3. **Social Media Links:** `components/layout/Footer.tsx`
   - Instagram, Facebook, LinkedIn URLs

---

### **Task 5: Update Hero Section (Main Banner)**

**File to Edit:** `components/sections/Hero.tsx`

**What You Can Change:**
- Main headline/title
- Subtitle/description
- CTA button text
- Background colors

---

### **Task 6: Add Blog Posts**

**File to Edit:** `app/blog/page.tsx`

**Current Status:** Basic structure exists

**To Add a Blog Post:**
1. Create a new file: `app/blog/[slug]/page.tsx` (for individual posts)
2. Or add posts to the blog listing page
3. Add images to `public/images/blog/`

---

### **Task 7: Update Colors/Branding**

**File to Edit:** `tailwind.config.ts`

**Find the colors section:**
```typescript
colors: {
  primary: {
    DEFAULT: "#6366F1",  // Change this
    light: "#818CF8",
    dark: "#4F46E5",
  },
}
```

**After Changes:**
- Save the file
- Restart dev server: Press `Ctrl+C` then `npm run dev`

---

### **Task 8: Update About Page**

**File to Edit:** `app/about/page.tsx`

**What You Can Change:**
- Company story
- Team members
- Mission/vision
- Images

---

## 🎨 Visual Changes

### **Change Images**

1. **Add New Images:**
   - Place images in `public/images/` folder
   - Use subfolders: `public/images/hero/`, `public/images/portfolio/`, etc.

2. **Update Image References:**
   - Find the component using the image
   - Update the path: `src="/images/your-image.jpg"`

### **Change Fonts**

**File to Edit:** `app/layout.tsx` and `tailwind.config.ts`

1. Import new font in `app/layout.tsx`
2. Add font variable to `tailwind.config.ts`

---

## 📧 Email Form Configuration

### **Set Up Email Service (One-Time Setup)**

1. **Sign up for Resend** (or another email service):
   - Go to [resend.com](https://resend.com)
   - Create account and get API key

2. **Install Resend:**
   ```powershell
   npm install resend
   ```

3. **Create `.env.local` file:**
   ```env
   RESEND_API_KEY=your_api_key_here
   CONTACT_EMAIL=your-email@domain.com
   ```

4. **Update Contact API:**
   - Open `app/api/contact/route.ts`
   - Uncomment the Resend code (lines 14-33)
   - Update the email addresses

5. **Test the form:**
   - Fill out contact form on website
   - Check your email inbox

---

## 📊 Analytics Setup (One-Time)

### **Google Analytics**

1. **Get Google Analytics ID:**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create property and get Measurement ID (G-XXXXXXXXXX)

2. **Add to `.env.local`:**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Component is already created:** `components/analytics/GoogleAnalytics.tsx`
   - It will automatically load when you add the env variable

---

## 🔄 Daily Workflow Checklist

### **Morning Routine:**
- [ ] Start dev server: `npm run dev`
- [ ] Check website at localhost:3000
- [ ] Review any pending updates

### **Making Changes:**
- [ ] Edit the appropriate file
- [ ] Save the file
- [ ] Check browser (auto-reloads)
- [ ] Test on mobile (responsive design)

### **Before Publishing:**
- [ ] Test all pages
- [ ] Check contact form
- [ ] Verify all links work
- [ ] Test on mobile device
- [ ] Check spelling/grammar

### **Publishing Changes:**
```powershell
# Commit changes
git add .
git commit -m "Update: [describe your changes]"
git push
```

**If using Vercel:** Changes deploy automatically!

---

## 🛠️ Troubleshooting

### **Website Not Loading:**
```powershell
# Stop server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

### **Changes Not Showing:**
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors (F12)

### **Build Errors:**
```powershell
# Check for errors
npm run lint
# Fix TypeScript errors
npm run build
```

### **Port Already in Use:**
```powershell
# Use different port
npm run dev -- -p 3001
```

---

## 📁 File Structure Quick Reference

```
digital-marketing-agency/
├── app/
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── portfolio/page.tsx    # Portfolio page
│   ├── blog/page.tsx         # Blog page
│   ├── contact/page.tsx      # Contact page
│   ├── pricing/page.tsx     # Pricing page
│   └── api/contact/route.ts  # Contact form API
├── components/
│   ├── sections/            # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   └── constants.ts          # ⭐ MAIN CONTENT FILE
└── public/
    └── images/              # All images go here
```

---

## 🎯 Most Common Edits (90% of your work)

### **1. Update Services** → `lib/constants.ts`
### **2. Update Pricing** → `lib/constants.ts`
### **3. Update Testimonials** → `components/sections/Testimonials.tsx`
### **4. Update Contact Info** → `components/layout/Footer.tsx`
### **5. Update Stats** → `lib/constants.ts`

---

## 💡 Pro Tips

1. **Use VS Code or Cursor** - Best editor for this project
2. **Keep Browser DevTools Open** - See errors immediately (F12)
3. **Test on Mobile** - Use browser dev tools device mode
4. **Save Often** - Auto-reload makes testing fast
5. **Use Git** - Commit changes daily to track your work

---

## 🚀 Publishing Your Changes

### **If Using Vercel (Recommended):**

1. **Push to GitHub:**
   ```powershell
   git add .
   git commit -m "Daily update: [what you changed]"
   git push
   ```

2. **Vercel automatically:**
   - Detects the push
   - Builds the website
   - Deploys to production
   - Your site is live in 2-3 minutes!

### **Manual Deployment:**

```powershell
# Build for production
npm run build

# Test production build locally
npm start
```

---

## 📞 Need Help?

- **Check:** `README.md` for full documentation
- **Check:** `TROUBLESHOOT.md` for common issues
- **Check:** `QUICK_START.md` for setup help

---

## ✅ Daily Checklist Template

Copy this for your daily work:

```
Date: ___________

Today's Updates:
[ ] Updated services in constants.ts
[ ] Updated pricing plans
[ ] Added new testimonial
[ ] Updated contact information
[ ] Added blog post
[ ] Changed colors/branding
[ ] Other: ________________

Testing:
[ ] Tested on desktop
[ ] Tested on mobile
[ ] Contact form works
[ ] All links work

Published:
[ ] Committed to git
[ ] Pushed to GitHub
[ ] Deployed to production
```

---

**Remember:** Most changes are in `lib/constants.ts` - that's your main content file! 🎯

