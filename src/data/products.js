
const images = import.meta.glob("../assets/products/*", {
  eager: true,
  import: "default",
});

const getImage = (filename) => images[`../assets/${filename}`];

export const products = [
  {
    id: 1,
    slug: "midnight-grace-abaya",
    name: "Midnight Grace Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/black-abaya.jpeg"],
    description:
      "Elegant black abaya crafted with premium fabric for comfort and timeless style.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    slug: "moonlit-grace-abaya",
    name: "Moonlit Grace Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/black-abaya-2.jpeg"],
    description:
      "An elegant black abaya featuring delicate beadwork on the sleeves for a subtle touch of sophistication. Made from soft Premium Nida fabric, it combines comfort, modesty, and style.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    slug: "eclipse-elegance-abaya",
    name: "Eclipse Elegance Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/black-abaya-3.jpeg"],
    description:
      "A refined black abaya adorned with intricate sleeve embellishments and a flattering silhouette. The breathable Premium Nida fabric drapes beautifully, making it perfect for both casual and formal settings.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    slug: "pearl-essence-abaya",
    name: "Pearl Essence Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/creme-abaya.jpeg"],
    description:
      "A graceful cream-colored abaya that radiates simplicity and elegance. Designed with a flowing fit and crafted from Premium Nida fabric, it offers all-day comfort with a sophisticated finish.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    slug: "moon-grey-abaya",
    name: "Moon Grey Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/grey-abaya.jpeg"],
    description:
      "A chic moon-grey abaya featuring a modern yet modest design. Its smooth Premium Nida fabric provides a luxurious feel, while the relaxed fit ensures comfort throughout the day.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    slug: "ocean-mist-abaya",
    name: "Ocean Mist Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/blue-abaya.jpeg"],
    description:
      "A graceful front-open abaya in a soft sky-blue shade, detailed with delicate contrast piping and a stylish pendant accent. Made from lightweight Premium Nida fabric and paired with a matching niqab, it offers effortless elegance and all-day comfort.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    slug: "golden-dusk-abaya",
    name: "Golden Dusk Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/brown-abaya.jpeg"],
    description:
      "A beautifully tailored brown abaya inspired by warm golden dusk tones. Crafted from Premium Nida fabric, it features a flowing silhouette that blends comfort, modesty, and understated elegance.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    slug: "midnight-blossom-abaya",
    name: "Midnight Blossom Abaya",
    price: "₹450",
    originalPrice: "₹599",
    image: images["../assets/products/black-abaya-flower-sleeves.jpeg"],
    description:
      "An elegant black abaya crafted from Premium Nida fabric, featuring exquisite floral handwork with intricate bead and sequin embroidery on the sleeves. Designed with a graceful flowing silhouette, it offers the perfect balance of sophistication, comfort, and modest style.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },

  // TODO: fill in real data + unique image filenames for each new product below
  {
    id: 9,
    slug: "Classic Black Embroidery Sleeve Abaya",
    name: "Classic Black Embroidery Sleeve Abaya",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/hand-work-abaya-black.jpeg"],
    description: "Elevate your everyday wardrobe with the Rida Collection Black Elegance Abaya, crafted from premium Jasmine Fabric for a soft, lightweight, and comfortable feel. Designed with exquisite Astin embroidery lace enhanced with delicate stone work, this abaya offers a graceful blend of sophistication and timeless style. The flowing silhouette provides a flattering fit, while the intricately embroidered sleeves add a luxurious touch, making it perfect for both casual wear and special occasions.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    slug: "Emerald Luxe Front Open Abaya (Teal)",
    name: "Emerald Luxe Front Open Abaya (Teal)",
    price: "₹430",
    originalPrice: "₹599",
    image: images["../assets/products/emerald-open-abaya.jpeg"],
    description: "Elevate your modest wardrobe with the Emerald Luxe Front Open Abaya, crafted from premium Jasmine fabric for exceptional comfort and graceful drape. Featuring elegant contrast piping, a stylish front-open design, and a decorative premium pendant, this abaya offers a refined look suitable for daily wear, festive gatherings, and special occasions.",
    fabric: "Premium Nida",
    sizes: ["S", "M", "L", "XL"],
  },
  {
  id: 11,
  slug: "olive-grace-contrast-trim-abaya",
  name: "Olive Grace Contrast Trim Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/olive-abaya.jpeg"],
  description:
    "Designed with premium Jasmine fabric, this elegant olive green abaya features stylish contrast trim detailing on the front and sleeves. Lightweight, breathable, and comfortable for everyday wear, office, gatherings, and special occasions.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 12,
  slug: "silver-front-open-satin-abaya",
  name: "Silver Front Open Satin Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/jacket-abaya-grey.jpeg"],
  description:
    "Crafted from premium satin fabric, this front-open silver abaya features a graceful V-neckline, elegant metal buttons, and a luxurious drape that makes it perfect for festive and formal occasions.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 13,
  slug: "Black Front Open Satin Abaya",
  name: "Black Front Open Satin Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/front-open-satin-abaya.jpeg"],
  description:
    "A timeless black satin abaya with a stylish front-open design, premium metal buttons, and a soft flowing silhouette. Ideal for evening events, parties, and elegant everyday wear.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 14,
  slug: "Black Front Open Satin Abaya",
  name: "Black Front Open Satin Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/front-open-satin-abaya-blue.jpeg"],
  description:
    "A timeless black satin abaya with a stylish front-open design, premium metal buttons, and a soft flowing silhouette. Ideal for evening events, parties, and elegant everyday wear.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 15,
  slug: "classic-grace-adjustable-dori-abaya",
  name: "Classic Grace Adjustable Dori Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/frock-type-black.jpeg"],
  description:
    "Featuring a stylish half-zip neckline, adjustable waist dori with tassels, and comfortable elastic cuffs, this premium abaya offers the perfect blend of elegance, comfort, and everyday functionality.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 16,
  slug: "timeless-elegance-stand-collar-abaya",
  name: "Timeless Elegance Stand Collar Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/coat-abaya-black.jpeg"],
  description:
    "A sophisticated stand collar abaya featuring premium decorative stone buttons, adjustable waist dori, and a graceful full-length silhouette. Designed for women who appreciate timeless modest fashion.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
{
  id: 17,
  slug: "timeless-elegance-stand-collar-abaya",
  name: "Timeless Elegance Stand Collar Abaya",
  price: "₹430",
  originalPrice: "₹599",
  image: images["../assets/products/jacket-abaya-black.jpeg"],
  description:
    "A premium front-open jacket abaya crafted from luxurious fabric with elegant diamond strip lace detailing, decorative pendant closure, and a graceful silhouette. Perfect for casual, festive, and formal wear.",
  fabric: "Premium Nida",
  sizes: ["S", "M", "L", "XL"],
},
];