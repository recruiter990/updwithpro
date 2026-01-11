# 🚀 Complete Deployment Guide - Make Your Website Live

This comprehensive guide will help you deploy your website and make it accessible to the world.

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] All content updated in `lib/constants.ts`
- [ ] Contact information updated in Footer
- [ ] Privacy Policy and Terms pages reviewed
- [ ] Images optimized and added
- [ ] Email service configured (optional but recommended)
- [ ] Google Analytics set up (optional)
- [ ] Domain name ready (optional)

---

## 🌐 Option 1: Deploy to Vercel (Recommended - Easiest & Free)

Vercel is the best platform for Next.js websites. It's free, fast, and automatically deploys on every push.

### Step 1: Prepare Your Code

1. **Make sure everything is committed:**
   ```powershell
   git status
   git add .
   git commit -m "Ready for deployment"
   ```

### Step 2: Push to GitHub

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository:**
   - Go to GitHub → New Repository
   - Name it: `digital-marketing-agency`
   - Make it Public or Private
   - Don't initialize with README (you already have one)

3. **Push your code:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/digital-marketing-agency.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy on Vercel

1. **Sign up for Vercel:** [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Use "Continue with GitHub"

2. **Import your project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add Environment Variables** (if needed):
   - Click "Environment Variables"
   - Add:
     - `RESEND_API_KEY` (if using email)
     - `NEXT_PUBLIC_GA_ID` (if using Google Analytics)
     - `CONTACT_EMAIL` (your email)

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Step 4: Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)
   - Follow DNS configuration instructions

2. **Update DNS:**
   - Go to your domain registrar
   - Add the DNS records Vercel provides
   - Wait 24-48 hours for propagation

---

## 🌐 Option 2: Deploy to Netlify

### Step 1: Push to GitHub
(Same as Vercel Step 2)

### Step 2: Deploy on Netlify

1. **Sign up:** [netlify.com](https://netlify.com)

2. **Import from Git:**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Add Environment Variables:**
   - Site settings → Environment variables
   - Add your variables

---

## 🌐 Option 3: Deploy to Other Platforms

### Railway

1. Sign up: [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repo
4. Railway auto-detects Next.js

### AWS Amplify

1. Sign up: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
2. Connect GitHub repository
3. Auto-detects Next.js settings

### DigitalOcean App Platform

1. Sign up: [digitalocean.com](https://digitalocean.com)
2. Create App → GitHub
3. Select repository
4. Auto-detects Next.js

---

## 🔧 Post-Deployment Setup

### 1. Configure Email Service

**Using Resend (Recommended):**

1. **Sign up:** [resend.com](https://resend.com)
2. **Get API Key:**
   - Dashboard → API Keys → Create API Key
   - Copy the key

3. **Add to Vercel/Netlify:**
   - Environment Variables → Add:
     - Key: `RESEND_API_KEY`
     - Value: `re_xxxxxxxxxxxxx`

4. **Update Contact API:**
   - File: `app/api/contact/route.ts`
   - Uncomment the Resend code (lines 14-33)
   - Update email addresses:
     ```typescript
     from: "onboarding@resend.dev",  // Your verified domain
     to: "info@digitalagency.it",     // Your email
     ```

5. **Install Resend:**
   ```powershell
   npm install resend
   ```

6. **Redeploy:**
   - Push changes to GitHub
   - Vercel/Netlify auto-deploys

### 2. Set Up Google Analytics

1. **Create Google Analytics Account:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account and property
   - Get Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables:**
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

3. **Redeploy:**
   - The GoogleAnalytics component will automatically load

### 3. Set Up Facebook Pixel (Optional)

1. **Get Pixel ID:**
   - Facebook Business Manager → Events Manager
   - Create Pixel → Copy Pixel ID

2. **Add to Environment Variables:**
   - Key: `NEXT_PUBLIC_FB_PIXEL_ID`
   - Value: `xxxxxxxxxxxxx`

3. **Add to layout.tsx** (if needed):
   ```typescript
   // Add Facebook Pixel script
   ```

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] All pages accessible (Home, Services, Portfolio, About, Blog, Contact, Pricing)
- [ ] Contact form works (test submission)
- [ ] Mobile responsive (test on phone)
- [ ] Dark/Light mode toggle works
- [ ] Cookie consent banner appears
- [ ] Privacy Policy and Terms pages accessible
- [ ] All links work (internal and external)
- [ ] Images load correctly
- [ ] Google Analytics tracking (check in GA dashboard)
- [ ] SEO meta tags (view page source)

---

## 🔄 Making Updates After Deployment

### Daily Updates Workflow:

1. **Make changes locally:**
   ```powershell
   npm run dev
   # Make your changes
   # Test at localhost:3000
   ```

2. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Update: [describe changes]"
   git push
   ```

3. **Auto-deploy:**
   - Vercel/Netlify automatically detects the push
   - Builds and deploys in 2-3 minutes
   - Your site updates automatically!

### Manual Deployment (if needed):

```powershell
# Build locally to test
npm run build
npm start

# If successful, push to trigger auto-deploy
git push
```

---

## 🐛 Troubleshooting Deployment

### Build Fails on Vercel/Netlify

1. **Check build logs:**
   - Go to deployment → View logs
   - Look for error messages

2. **Common issues:**
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Run `npm run lint` locally
   - Environment variables missing → Add in platform settings

3. **Fix locally first:**
   ```powershell
   npm run build
   # Fix any errors
   git push
   ```

### Website Not Loading

1. **Check deployment status:**
   - Vercel/Netlify dashboard → Check if "Ready"

2. **Check domain DNS:**
   - If using custom domain, verify DNS settings

3. **Clear cache:**
   - Hard refresh: `Ctrl+Shift+R`
   - Or clear browser cache

### Environment Variables Not Working

1. **Check variable names:**
   - Must match exactly (case-sensitive)
   - `NEXT_PUBLIC_` prefix for client-side variables

2. **Redeploy after adding:**
   - Add variable → Save → Redeploy

---

## 📊 Monitoring Your Website

### Vercel Analytics (Free)

- Built into Vercel
- View in Dashboard → Analytics
- See page views, visitors, performance

### Google Analytics

- Set up as described above
- View in [analytics.google.com](https://analytics.google.com)
- See detailed visitor data

### Uptime Monitoring (Optional)

- **UptimeRobot:** [uptimerobot.com](https://uptimerobot.com) (free)
- **StatusCake:** [statuscake.com](https://statuscake.com) (free tier)

---

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Never commit `.env.local` to Git
   - Use platform environment variables

2. **HTTPS:**
   - Vercel/Netlify provide free SSL certificates
   - Automatically enabled

3. **Rate Limiting:**
   - Consider adding rate limiting to API routes
   - Prevent spam/abuse

4. **Regular Updates:**
   - Keep dependencies updated
   - Run `npm audit` regularly

---

## 📈 Performance Optimization

### Already Optimized:

- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Font optimization
- ✅ CSS optimization

### Additional Optimizations:

1. **Image CDN:**
   - Use Cloudinary or Imgix for images
   - Faster image delivery

2. **Caching:**
   - Vercel/Netlify handle caching automatically
   - Consider adding cache headers for API routes

---

## 🎉 You're Live!

Once deployed, your website is accessible to the world. Share your URL and start getting clients!

**Remember:**
- Updates deploy automatically on every `git push`
- Test changes locally first with `npm run dev`
- Monitor analytics to see visitor behavior
- Keep content fresh and updated regularly

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Check:** `HOW_TO_WORK_DAILY.md` for daily workflow
- **Check:** `TROUBLESHOOT.md` for common issues

---

**Congratulations! Your website is now live! 🚀**

