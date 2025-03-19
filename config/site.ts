// Base URL configuration as const
export const BASE_URL = {
  SITE: "https://queforia.com",
  API: "https://api.queforia.com",
  SHOP: "https://shop.queforia.com",
  ASSETS: "https://assets.queforia.com",
} as const;

export const siteConfig = {
  name: "Queforia",
  description: "Extra, Before Ordinary",
  url: BASE_URL.SITE,
  ogImage: getOgImageUrl({ title: "Queforia", mode: "dark" }),
  links: {
    shop: BASE_URL.SHOP,
    social: {
      instagram: "https://instagram.com/queforia",
      twitter: "https://twitter.com/queforia",
      youtube: "https://youtube.com/@queforia",
    },
  },
  creator: "@queforia",
  keywords: [
    "Queforia",
    "Innovation",
    "Design",
    "Creative",
    "Technology",
    "Premium Brand",
    "Mystery",
    "Extraordinary",
  ] as string[], // Fix readonly array issue
  authors: [
    {
      name: "Queforia Team",
      url: `${BASE_URL.SITE}/team`,
    },
  ] as const,
  brandColors: [
    { value: "#050a30", label: "Navy", description: "Primary brand color" },
    {
      value: "#233dff",
      label: "Electric Blue",
      description: "Secondary accent",
    },
    { value: "#f2efeb", label: "Cream", description: "Light backgrounds" },
    { value: "#8f5d46", label: "Brown", description: "Warm accent" },
  ],
  aspectRatios: [
    // Common & Social Media Ratios
    {
      id: "square",
      label: "Square",
      description: "1:1 Format",
      ratio: 1,
      category: "common",
    },
    {
      id: "portrait-4-5",
      label: "4:5",
      description: "Portrait Format",
      ratio: 0.8, // 4:5
      category: "common",
    },
    {
      id: "portrait-9-16",
      label: "9:16",
      description: "Mobile/Story Format",
      ratio: 9 / 16,
      category: "common",
    },
    {
      id: "landscape-16-9",
      label: "16:9",
      description: "Widescreen Format",
      ratio: 16 / 9,
      category: "common",
    },
    {
      id: "twitter",
      label: "1.91:1",
      description: "Twitter Card Format",
      ratio: 1.91,
      category: "common",
    },
    {
      id: "portrait-2-3",
      label: "2:3",
      description: "Portrait Format",
      ratio: 2 / 3,
      category: "common",
    },
    {
      id: "portrait-3-4",
      label: "3:4",
      description: "Portrait Format",
      ratio: 3 / 4,
      category: "common",
    },
    {
      id: "landscape-4-3",
      label: "4:3",
      description: "Classic Format",
      ratio: 4 / 3,
      category: "common",
    },
    {
      id: "landscape-5-4",
      label: "5:4",
      description: "Photo Format",
      ratio: 5 / 4,
      category: "common",
    },
    {
      id: "landscape-16-10",
      label: "16:10",
      description: "Display Format",
      ratio: 16 / 10,
      category: "common",
    },
    {
      id: "cinema-21-9",
      label: "21:9",
      description: "Ultrawide Format",
      ratio: 21 / 9,
      category: "common",
    },
  ],
  urls: {
    base: BASE_URL.SITE,
    assets: {
      images: `${BASE_URL.ASSETS}/images`,
      fonts: `${BASE_URL.ASSETS}/fonts`,
      icons: `${BASE_URL.ASSETS}/icons`,
    },
    api: {
      base: BASE_URL.API,
      endpoints: {
        contact: "/contact",
        subscribe: "/subscribe",
      },
    },
    social: {
      instagram: "https://instagram.com/queforia",
      twitter: "https://twitter.com/queforia",
      youtube: "https://youtube.com/@queforia",
    },
    legal: {
      privacy: "/privacy",
      terms: "/terms",
      cookies: "/cookies",
    },
  },
} as const;

// Helper functions
export function getUrl(path: string): string {
  return `${BASE_URL.SITE}${path}`;
}

export function getAssetUrl(path: string): string {
  return `${BASE_URL.ASSETS}${path}`;
}

export function getApiUrl(endpoint: string): string {
  return `${BASE_URL.API}${endpoint}`;
}

export function getOgImageUrl(params: {
  title?: string;
  mode?: "light" | "dark";
  type?: "default" | "blog" | "product";
}): string {
  const url = new URL(`${BASE_URL.SITE}/api/og`);
  if (params.title) url.searchParams.set("title", params.title);
  if (params.mode) url.searchParams.set("mode", params.mode);
  if (params.type) url.searchParams.set("type", params.type);
  return url.toString();
}

export type SiteConfig = typeof siteConfig;
