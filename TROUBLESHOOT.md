# Troubleshooting Guide

## If you can't run `npm run dev`, try these steps:

### Step 1: Check if Node.js is installed
Open PowerShell/Command Prompt and run:
```powershell
node --version
npm --version
```

**If you get an error:**
- Download and install Node.js from https://nodejs.org/
- Choose the LTS version
- Restart your terminal after installation

### Step 2: Navigate to the project folder
```powershell
cd "C:\path\to\digital-marketing-agency"
```
(Replace with your actual path)

### Step 3: Install dependencies (FIRST TIME ONLY)
```powershell
npm install
```
Wait for this to complete. It may take 2-5 minutes.

### Step 4: Check if all files exist
Make sure these files are in the folder:
- package.json ✓
- tsconfig.json ✓
- next.config.js ✓
- tailwind.config.ts ✓
- app/ folder ✓
- components/ folder ✓

### Step 5: Try running the dev server
```powershell
npm run dev
```

## Common Errors and Solutions:

### Error: "npm is not recognized"
**Solution:** Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart terminal after installation

### Error: "Cannot find module..."
**Solution:** Dependencies not installed
```powershell
npm install
```

### Error: "Port 3000 is already in use"
**Solution:** Another app is using port 3000
```powershell
# Option 1: Kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Option 2: Use a different port
npm run dev -- -p 3001
```

### Error: "Missing script: dev"
**Solution:** Wrong directory or package.json is missing
- Make sure you're in the digital-marketing-agency folder
- Check that package.json exists

### Error: TypeScript/ESLint errors
**Solution:** These are usually warnings, try:
```powershell
npm run dev -- --no-lint
```

## Still having issues?

Share the EXACT error message you see, and I'll help you fix it!


