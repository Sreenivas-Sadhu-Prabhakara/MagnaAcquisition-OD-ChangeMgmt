#!/bin/zsh

echo "╔════════════════════════════════════════════════════════╗"
echo "║   Deploying Magna OD & Change Management to Vercel    ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

cd /Users/sreeni/Documents/Code/Magna-case-study

echo "📦 Git Status:"
git status
echo ""

echo "✏️  Adding files..."
git add index.html styles.css script.js vercel.json .gitignore .nojekyll
echo "✓ Files staged"
echo ""

echo "💾 Committing..."
git commit -m "Fix Vercel deployment: update vercel.json and add accessibility fixes"
echo ""

echo "🚀 Pushing to GitHub..."
git push origin main
echo ""

echo "╔════════════════════════════════════════════════════════╗"
echo "║             ✅ Deployment Complete!                   ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://magna-acquisition-od-change-mgmt-ian85xbph.vercel.app/"
echo ""
echo "📊 Production URL: https://magna-acquisition-od-change-mgmt-ian85xbph.vercel.app/"
echo ""
echo "⏳ Vercel should auto-deploy within 30-60 seconds"
echo "   Refresh the page above to see it live!"
echo ""
