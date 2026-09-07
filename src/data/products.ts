export interface Product {
  id: string;
  name: string;
  category: "Monokinis" | "Bikinis" | "Mesh & Cutouts" | "Resortwear";
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  fabricDetails: string;
  isBestseller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "bronze-wrap-monokini",
    name: "The Aurelia Wrap Monokini",
    category: "Monokinis",
    price: 8900,
    originalPrice: 10500,
    image: "/images/hero_beach_luxury.jpg",
    badge: "Bestseller",
    colors: [
      { name: "Bronze Espresso", hex: "#5c3d2e" },
      { name: "Onyx Black", hex: "#111111" },
    ],
    sizes: ["XS", "S", "M", "L", "Custom Fit"],
    description:
      "Handcrafted criss-cross wrap monokini in metallic shimmer lycra. Tailored to accentuate curves with high-leg cuts and seamless luxury stretch.",
    fabricDetails: "80% Italian Micro-Polyamide, 20% Elastane. UV 50+ Protection, Chlorine Resistant.",
    isBestseller: true,
  },
  {
    id: "santorini-black-mesh",
    name: "The Aegean Sheer Mesh Monokini",
    category: "Mesh & Cutouts",
    price: 9800,
    originalPrice: 11200,
    image: "/images/swimsuit_mesh_black.jpg",
    badge: "Exclusive",
    colors: [
      { name: "Midnight Black", hex: "#0c0c0c" },
      { name: "Pure Ivory", hex: "#faf6f0" },
    ],
    sizes: ["XS", "S", "M", "L", "Custom Fit"],
    description:
      "Sculptural plunge high-neck monokini featuring optical sheer mesh paneling and double-lined contour support.",
    fabricDetails: "Premium Sheer Italian Mesh & Matt Lycra. Double Layered Bust Support.",
    isBestseller: true,
  },
  {
    id: "neon-lime-bikini",
    name: "The Riviera High-Waist Bikini",
    category: "Bikinis",
    price: 7500,
    image: "/images/swimsuit_neon_lime.jpg",
    badge: "Trending",
    colors: [
      { name: "Neon Lime", hex: "#a6e52c" },
      { name: "Sunset Coral", hex: "#ff6f61" },
    ],
    sizes: ["XS", "S", "M", "L", "Custom Fit"],
    description:
      "Vibrant high-waist ribbed bikini set featuring supportive underbust bands and cheek contour shaping.",
    fabricDetails: "Textured Ribbed Swim Fabric, Quick-Dry Finish with Gold Hardware.",
    isBestseller: true,
  },
  {
    id: "ocean-blue-buckle",
    name: "The Capri Gold-Buckle Set",
    category: "Bikinis",
    price: 8400,
    originalPrice: 9600,
    image: "/images/swimsuit_ocean_blue.jpg",
    badge: "New Arrival",
    colors: [
      { name: "Mediterranean Royal Blue", hex: "#0047ab" },
      { name: "Emerald Green", hex: "#005a36" },
    ],
    sizes: ["XS", "S", "M", "L", "Custom Fit"],
    description:
      "Structured push-up bikini with handcrafted 24k gold-plated buckle accents and adjustable shoulder straps.",
    fabricDetails: "High Compression Swim Satin, Anti-Tarnish Gold-Plated Clasp.",
    isBestseller: false,
  },
];
