#!/bin/bash
# Copy fonts and styles into the Astro public folder
# Run this from the repository root (where styles.css and font/ live):

set -e

echo "Creating destination folders..."
mkdir -p astro/public/font

echo "Copying font files..."
cp font/*.woff* astro/public/font/

echo "Copying styles.css..."
cp styles.css astro/public/styles.css

echo "Done. Fonts and styles copied to astro/public/."
