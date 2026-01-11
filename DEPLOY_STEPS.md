# Quick Deploy Steps

## Step 1: Push Code to GitHub

Open PowerShell in your project folder and run these commands:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Rename branch to main
git branch -M main

# Connect to your GitHub repository
# REPLACE with your actual GitHub repository URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

Example:
```powershell
git remote add origin https://github.com/johnsmith/digital-marketing-agency.git
```

## Step 2: Deploy on Vercel

1. Go to: **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Click **"Add New..."** → **"Project"**
6. You'll see your repositories - click **"Import"** next to your repository
7. Vercel will auto-detect Next.js settings - just click **"Deploy"**
8. Wait 2-3 minutes
9. **Done!** You'll see: `✅ Production: https://your-project.vercel.app`

## That's it! 🎉

Your website is now live! Share the Vercel URL with anyone.


