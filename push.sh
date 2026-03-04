#!/bin/zsh
cd /Users/sreeni/Documents/Code/Magna-case-study
git remote set-url origin https://github.com/Sreenivas-Sadhu-Prabhakara/MagnaAcquisition-OD-ChangeMgmt.git
git add -A
git status
git commit -m "Comprehensive OD & Change Management website - all sections" 2>&1 || echo "Nothing new to commit"
git push origin main 2>&1
echo "=== DONE ==="
