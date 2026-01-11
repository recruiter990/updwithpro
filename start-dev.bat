@echo off
echo Starting Next.js Development Server...
echo.
cd /d "%~dp0"
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)
echo.
echo Starting server on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev

