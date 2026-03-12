#!/bin/bash
# Run this from the ROOT of your buildyourhome repo
# git clone git@github.com:zarir-engineer/buildyourhome.git
# cd buildyourhome
# bash cleanup.sh
# git add -A && git commit -m "chore: cleanup unused files, add admin panel" && git push

echo "🧹 Starting Cornerstone repo cleanup..."

# ── 1. IDE config (should never be in a repo) ──
rm -rf .idea/
echo "✓ Removed .idea/ (IDE config)"

# ── 2. Krita / temp image files ──
rm -f assets/images/zarir.png.kra
rm -f "assets/images/zarir.png~"
echo "✓ Removed Krita source + temp files"

# ── 3. Old/backup JS files ──
rm -f assets/js/jquery.cookie.js.old
rm -f assets/js/modal-videos.js.old
echo "✓ Removed .old JS backups"

# ── 4. Temp file in root ──
rm -f _temp.delete.after.using.txt
echo "✓ Removed _temp file"

# ── 5. PHP mailer (does nothing on GitHub Pages static hosting) ──
rm -rf mailer/
echo "✓ Removed mailer/ (PHP doesn't run on GitHub Pages)"

# ── 6. Font Awesome local copy (loaded from CDN already in index.html) ──
rm -rf assets/fonts/
echo "✓ Removed assets/fonts/ (FA is loaded from CDN in <head>)"

# ── 7. Unused JS vendor files (not referenced in index.html) ──
rm -f assets/js/skrollr.js
rm -f assets/js/jarallax.min.js
rm -f assets/js/splitting.js
rm -f assets/js/jquery.scrolla.js
rm -f assets/js/imagesloaded.pkgd.js
echo "✓ Removed unused vendor JS files"

# ── 8. Unused images (not referenced in index.html, main.js, or includes) ──
UNUSED_IMAGES=(
  "1920-1080-exploring-south-mumbai.jpg"
  "404-southpark.jpg"
  "5b-1.webp"
  "cornerstone-realestate.jpg"
  "cornerstone-realtors.png"
  "cute-pet.jpg"
  "hero-old.jpg"
  "hero.jpg"
  "mumbai-india-june-24-2025-260nw-2653059137.webp"
  "nishith.jpg"
  "nishith.png"
  "profile-pic.jpeg"
  "profile2.png"
  "profile_building.jpg"
  "single1.jpg"
  "single2.jpg"
  "single4.jpg"
  "single6.jpg"
  "single7.jpg"
  "single8.jpg"
  "testi4-1.jpg"
  "testi4-2.jpg"
  "testi4-3.jpg"
  "testi4-4.jpg"
  "testi4-5.jpg"
  "work3.jpeg"
  "work6.jpeg"
  "zarir-profile-01.png"
  "zarir-profile.jpg"
  "zarir-profile.png"
  "zarir.png"
  "blog-2.jpg"
  "blog-4-scaled-1.jpg"
  "blog6.jpg"
  "blog8.jpg"
  "blog9.jpg"
  "alka_660_380.png"
  "avatar.png"
  "chin2.png"
  "pat-1.png"
  "pat-2.png"
  "rahul.png"
  "logo2.png"
)

for img in "${UNUSED_IMAGES[@]}"; do
  if [ -f "assets/images/$img" ]; then
    rm -f "assets/images/$img"
    echo "  ✓ Removed unused image: $img"
  fi
done

# ── 9. Duplicate post images (same as posts/ subfolder) ──
rm -f "assets/images/1920-1400-impact-of-infrastructure-on-mumbai.jpg"
rm -f "assets/images/1920-1400-repurposing-old-window-frames.jpg"
rm -f "assets/images/exploring-south-mumbai.jpg"
rm -f "assets/images/impact-of-infrastructure-on-mumbai.jpg"
rm -f "assets/images/repurposing-old-window-frames.jpg"
echo "✓ Removed duplicate post images (kept posts/ subfolder versions)"

echo ""
echo "✅ Cleanup done!"
echo ""
echo "Next steps:"
echo "  1. Copy admin/index.html into your repo (already created)"
echo "  2. git add -A"
echo "  3. git commit -m 'chore: cleanup + add admin panel'"
echo "  4. git push"
