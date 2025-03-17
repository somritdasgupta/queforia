interface FaviconIconProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  glowColor?: string;
  glowOpacity?: number;
}

export function FaviconIcon({
  size = 32,
  primaryColor = "#050a30",
  secondaryColor = "#233dff",
  glowColor = "#233dff",
  glowOpacity = 0.4,
}: FaviconIconProps) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondaryColor};stop-opacity:0.9" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 ${parseInt(glowColor.slice(1, 3), 16) / 255}
        0 0 0 0 ${parseInt(glowColor.slice(3, 5), 16) / 255}
        0 0 0 0 ${parseInt(glowColor.slice(5, 7), 16) / 255}
        0 0 0 ${glowOpacity} 0
      "/>
    </filter>
  </defs>
  
  <!-- Background with rounded corners -->
  <rect width="48" height="48" rx="12" fill="url(#grad1)"/>
  
  <!-- Q Symbol -->
  <g transform="translate(12, 12)" filter="url(#glow)">
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm1.5-6l2 2c1.5-1.5 2.5-3.5 2.5-6 0-4.418-3.582-8-8-8S2 9.582 2 14s3.582 8 8 8c1.5 0 3-.5 4.5-1.5L12 18c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4c0 1-.5 2-1.5 2z" 
          fill="#f2efeb" 
          fill-opacity="0.95"/>
  </g>
</svg>`.trim();
}

export const faviconSizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
