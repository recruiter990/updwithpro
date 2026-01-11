# Deploy to Vercel (Get Live URL)

## Method 1: Deploy via Vercel Website (Easiest)

### Step 1: Push to GitHub
1. Create a GitHub account at https://github.com (if you don't have one)
2. Create a new repository on GitHub
3. In your project folder, run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub details)

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes
8. You'll get a live URL like: `https://your-project.vercel.app`

## Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```

### Step 3: Deploy
Navigate to your project folder and run:
```powershell
vercel
```
Follow the prompts. It will ask:
- Set up and deploy? → Yes
- Which scope? → Your account
- Link to existing project? → No (first time)
- Project name? → Press Enter (uses folder name)
- Directory? → Press Enter (uses current folder)
- Override settings? → No

### Step 4: Get your live URL
After deployment, you'll see:
```
✅ Production: https://your-project.vercel.app
```

## Method 3: One-Click Deploy (Fastest)

1. Make sure your code is on GitHub
2. Go to: https://vercel.com/new
3. Click "Import Git Repository"
4. Select your repository
5. Click "Deploy"
6. Done! You'll get a live URL instantly

## After Deployment

- Your site will be live at: `https://your-project.vercel.app`
- Every time you push to GitHub, Vercel auto-deploys
- You can add a custom domain later in Vercel settings

## Important Notes

- Make sure `.env.local` is NOT committed to GitHub (it's in .gitignore)
- For production, add environment variables in Vercel dashboard
- The first deployment might take 2-5 minutes
- Subsequent deployments are faster (1-2 minutes)


