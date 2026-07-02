const fs = require('fs');
const path = require('path');

const v2CssPath = 'C:/Users/Chirag/Desktop/ThinkDigital/GTS/app/v2.css';
const galleryCssPath = 'C:/Users/Chirag/Desktop/ThinkDigital/GTS/app/components/CircularCardGallery.css';

function fixWidths(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log('File not found:', filePath);
    return;
  }
  let css = fs.readFileSync(filePath, 'utf-8');
  
  // Replace width: 123px; with width: 100%; max-width: 123px; (only for widths >= 100px)
  css = css.replace(/width:\s*([1-9]\d{2,})px;/g, 'width: 100%; max-width: $1px;');
  
  // Replace min-width: 123px; with min-width: min(100%, 123px);
  css = css.replace(/min-width:\s*([1-9]\d{2,})px;/g, 'min-width: min(100%, $1px);');
  
  // specific grid fixes
  if (filePath.endsWith('v2.css')) {
    css += `\n\n/* Responsive Overrides */\n@media (max-width: 768px) {\n  .glass-dock {\n    display: none !important;\n  }\n  .hero-grid, .services-grid, .content-grid, .grid-container {\n    grid-template-columns: 1fr !important;\n  }\n}\n`;
  }
  
  if (filePath.endsWith('CircularCardGallery.css')) {
    css += `\n\n/* Responsive Overrides */\n@media (max-width: 1024px) {\n  .circular-gallery-grid { grid-template-columns: 1fr 1fr !important; }\n}\n@media (max-width: 768px) {\n  .circular-gallery-grid { grid-template-columns: 1fr !important; }\n}\n`;
  }

  fs.writeFileSync(filePath, css);
  console.log('Fixed', filePath);
}

fixWidths(v2CssPath);
fixWidths(galleryCssPath);
