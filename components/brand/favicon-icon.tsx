interface FaviconIconProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  glowColor?: string;
  glowOpacity?: number;
}

export function FaviconIcon({
  size = 32,
  primaryColor = "#233dff",
  secondaryColor = "#233dff",
  glowColor = "#233dff",
  glowOpacity = 10,
}: FaviconIconProps) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondaryColor};stop-opacity:0.9" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="400%" height="400%">
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
  
  <!-- Q Symbol - Centered and scaled -->
  <g transform="translate(8, 8) scale(1.2)" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="0.25mm" fill="#ffffff" style="stroke:#ffffff;stroke-width:0.25mm;fill:#ffffff">
    <path d="M 23.436 20.736 L 27.648 20.736 L 27.648 25.704 L 14.328 25.704 Q 10.044 25.704 6.804 24.174 Q 3.564 22.644 1.782 19.8 A 11.613 11.613 0 0 1 0.141 15.191 A 14.997 14.997 0 0 1 0 13.104 A 14.187 14.187 0 0 1 0.549 9.097 A 12.212 12.212 0 0 1 1.782 6.264 Q 3.564 3.276 6.642 1.638 A 14.096 14.096 0 0 1 12.347 0.041 A 17.011 17.011 0 0 1 13.536 0 A 15.073 15.073 0 0 1 18.091 0.673 A 13.577 13.577 0 0 1 20.394 1.638 Q 23.472 3.276 25.236 6.264 A 12.755 12.755 0 0 1 26.933 11.633 A 15.798 15.798 0 0 1 27 13.104 A 9.474 9.474 0 0 1 26.229 16.81 A 11.225 11.225 0 0 1 25.974 17.37 A 11.564 11.564 0 0 1 24.866 19.212 A 8.831 8.831 0 0 1 23.436 20.736 Z M 13.536 20.268 A 7.299 7.299 0 0 0 16.32 19.741 A 6.998 6.998 0 0 0 17.028 19.404 Q 18.612 18.54 19.548 16.92 Q 20.484 15.3 20.484 13.14 A 8.591 8.591 0 0 0 20.283 11.238 A 6.691 6.691 0 0 0 19.566 9.378 Q 18.648 7.776 17.064 6.894 A 7.041 7.041 0 0 0 13.898 6.02 A 8.355 8.355 0 0 0 13.536 6.012 Q 11.556 6.012 9.972 6.894 Q 8.388 7.776 7.47 9.378 A 6.849 6.849 0 0 0 6.661 11.721 A 8.958 8.958 0 0 0 6.552 13.14 A 8.603 8.603 0 0 0 6.768 15.106 A 6.806 6.806 0 0 0 7.47 16.92 Q 8.388 18.54 9.99 19.404 A 7.288 7.288 0 0 0 13.28 20.265 A 8.599 8.599 0 0 0 13.536 20.268 Z"/>
  </g>
</svg>`.trim();
}

export const faviconSizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
