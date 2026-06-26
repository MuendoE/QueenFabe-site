/* ==========================================================================
   QUEEN OF FABULOUSNESS — Product catalog (Shop)
   Sample data, priced in South African Rand (ZAR). Replace with your real
   catalog or wire up to a CMS/headless commerce backend later — every page
   reads from this single PRODUCTS array.
   ========================================================================== */

const PRODUCTS = [
  {
    id: 1,
    slug: "silk-renewal-cleansing-oil",
    name: "Silk Renewal Cleansing Oil",
    category: "Skincare",
    icon: "pump",
    price: 420,
    oldPrice: null,
    badge: "Bestseller",
    size: "150ml",
    rating: 4.8,
    reviews: 212,
    shortDesc: "A silken cleansing oil that melts away makeup and impurities without stripping the skin.",
    description: "Our signature cleansing oil transforms from silk to milk on contact with water, lifting away makeup, SPF, and the day itself. Formulated with camellia and jojoba oils, it leaves skin balanced, never tight — the first step in every Queen of Fabulousness ritual.",
    howToUse: [
      "Massage 2–3 pumps onto dry skin in circular motions",
      "Add a splash of warm water to emulsify",
      "Rinse thoroughly and follow with your favorite cleanser if double-cleansing"
    ],
    ingredients: ["Camellia seed oil", "Jojoba oil", "Vitamin E", "Sweet almond extract"]
  },
  {
    id: 2,
    slug: "velvet-glow-vitamin-c-serum",
    name: "Velvet Glow Vitamin C Serum",
    category: "Skincare",
    icon: "dropper",
    price: 650,
    oldPrice: null,
    badge: "Bestseller",
    size: "30ml",
    rating: 4.9,
    reviews: 340,
    shortDesc: "A brightening serum with stabilized vitamin C for visibly even, luminous skin.",
    description: "A fast-absorbing serum that pairs 15% stabilized vitamin C with ferulic acid and vitamin E to brighten, firm, and protect against environmental stress. Skin appears more even-toned and radiant within weeks.",
    howToUse: [
      "Apply 3–4 drops to clean, dry skin each morning",
      "Follow with moisturizer and SPF",
      "Patch test if new to vitamin C formulas"
    ],
    ingredients: ["15% Vitamin C (ascorbic acid)", "Ferulic acid", "Vitamin E", "Hyaluronic acid"]
  },
  {
    id: 3,
    slug: "dew-drop-hydrating-moisturizer",
    name: "Dew Drop Hydrating Moisturizer",
    category: "Skincare",
    icon: "jar",
    price: 560,
    oldPrice: null,
    badge: null,
    size: "50ml",
    rating: 4.7,
    reviews: 158,
    shortDesc: "A weightless gel-cream that floods skin with moisture for a dewy, plumped finish.",
    description: "Layer after serum for a dewy, cushioned finish. This gel-cream combines five-weight hyaluronic acid with squalane to hydrate every layer of skin without a trace of heaviness.",
    howToUse: [
      "Smooth a pearl-sized amount over face and neck, morning and night",
      "Press gently into skin rather than rubbing",
      "Layer over serum, before SPF in the morning"
    ],
    ingredients: ["Multi-weight hyaluronic acid", "Squalane", "Niacinamide", "Panthenol"]
  },
  {
    id: 4,
    slug: "midnight-repair-eye-cream",
    name: "Midnight Repair Eye Cream",
    category: "Skincare",
    icon: "jar",
    price: 520,
    oldPrice: null,
    badge: "New",
    size: "15ml",
    rating: 4.6,
    reviews: 96,
    shortDesc: "A rich overnight eye cream that targets fine lines and morning puffiness.",
    description: "An overnight treatment for the eye contour, blending peptides and caffeine to soften the look of fine lines and reduce morning puffiness by the time you wake.",
    howToUse: [
      "Dot a rice-grain amount around the orbital bone each evening",
      "Pat gently with the ring finger until absorbed",
      "Avoid direct contact with the lash line"
    ],
    ingredients: ["Peptide complex", "Caffeine", "Squalane", "Shea butter"]
  },
  {
    id: 5,
    slug: "rose-quartz-exfoliating-mask",
    name: "Rose Quartz Exfoliating Mask",
    category: "Skincare",
    icon: "jar",
    price: 480,
    oldPrice: null,
    badge: null,
    size: "75ml",
    rating: 4.5,
    reviews: 121,
    shortDesc: "A gentle resurfacing mask with fruit acids and finely milled rose quartz.",
    description: "A weekly ritual mask that pairs fruit-derived AHAs with finely milled rose quartz powder to gently lift away dullness, revealing softer, brighter skin beneath.",
    howToUse: [
      "Apply an even layer to clean, dry skin, avoiding the eye area",
      "Leave on for 8–10 minutes",
      "Rinse with warm water and follow with moisturizer"
    ],
    ingredients: ["Rose quartz powder", "Glycolic acid", "Papaya extract", "Aloe vera"]
  },
  {
    id: 6,
    slug: "satin-touch-foundation",
    name: "Satin Touch Foundation",
    category: "Makeup",
    icon: "pump",
    price: 600,
    oldPrice: null,
    badge: null,
    size: "30ml",
    rating: 4.6,
    reviews: 204,
    shortDesc: "A buildable, skin-like foundation with a soft satin finish that lasts all day.",
    description: "Medium, buildable coverage that looks like skin, not makeup. Infused with hyaluronic acid and a soft-focus complex, it wears comfortably for up to 12 hours without settling into fine lines.",
    howToUse: [
      "Apply with a damp sponge or foundation brush, building coverage where needed",
      "Set with a light dusting of powder for longer wear",
      "Shake well before each use"
    ],
    ingredients: ["Hyaluronic acid", "Soft-focus silica", "Vitamin E", "SPF 15"]
  },
  {
    id: 7,
    slug: "velvet-tint-lip-oil",
    name: "Velvet Tint Lip Oil",
    category: "Makeup",
    icon: "dropper",
    price: 340,
    oldPrice: null,
    badge: "New",
    size: "7ml",
    rating: 4.8,
    reviews: 177,
    shortDesc: "A glossy, nourishing lip oil that adds a sheer wash of buildable color.",
    description: "A high-shine lip oil that conditions as it tints, building from a sheer wash to a richer flush of color with every pass. Finished with a hint of natural rose fragrance.",
    howToUse: [
      "Sweep directly onto bare lips, alone or over lipstick",
      "Layer for more intensity",
      "Reapply throughout the day as needed"
    ],
    ingredients: ["Jojoba oil", "Vitamin E", "Castor seed oil", "Natural rose flavor"]
  },
  {
    id: 8,
    slug: "velour-matte-lipstick",
    name: "Velour Matte Lipstick",
    category: "Makeup",
    icon: "lipstick",
    price: 420,
    oldPrice: null,
    badge: null,
    size: "3.5g",
    rating: 4.7,
    reviews: 265,
    shortDesc: "A long-wearing matte lipstick with a soft, comfortable, non-drying finish.",
    description: "A true matte that doesn't compromise on comfort. The velvet-soft formula glides on evenly and sets to a long-wearing finish that resists fading through meals and meetings alike.",
    howToUse: [
      "Apply directly from bullet or with a lip brush for precision",
      "For maximum wear, line lips first and blot after first application",
      "Available in 12 signature shades"
    ],
    ingredients: ["Shea butter", "Vitamin E", "Jojoba esters", "Mica pigments"]
  },
  {
    id: 9,
    slug: "featherlight-volumizing-mascara",
    name: "Featherlight Volumizing Mascara",
    category: "Makeup",
    icon: "mascara",
    price: 360,
    oldPrice: null,
    badge: "Bestseller",
    size: "9ml",
    rating: 4.7,
    reviews: 298,
    shortDesc: "A clump-free mascara that builds feather-light volume and all-day curl hold.",
    description: "An hourglass-shaped brush coats every lash from root to tip for buildable volume without clumps. A flexible polymer film holds curl through humidity, tears, and long days.",
    howToUse: [
      "Wiggle the brush at the base of lashes, then sweep upward",
      "Layer a second coat while still slightly damp for extra volume",
      "Removes easily with warm water or oil-based remover"
    ],
    ingredients: ["Beeswax", "Panthenol", "Flexible film-forming polymer"]
  },
  {
    id: 10,
    slug: "champagne-glow-highlighter",
    name: "Champagne Glow Highlighter",
    category: "Makeup",
    icon: "compact",
    price: 460,
    oldPrice: null,
    badge: null,
    size: "8g",
    rating: 4.8,
    reviews: 142,
    shortDesc: "A finely milled pressed highlighter for a lit-from-within champagne glow.",
    description: "A silky, finely milled powder that melts into skin for a true lit-from-within glow rather than glitter. One sweep along the cheekbones, nose, and collarbones is all it takes.",
    howToUse: [
      "Tap excess off a fan brush before applying",
      "Sweep along the high points of the face",
      "Layer for a more intense glow on special occasions"
    ],
    ingredients: ["Mica", "Silica", "Jojoba esters", "Vitamin E"]
  },
  {
    id: 11,
    slug: "silk-strand-repair-oil",
    name: "Silk Strand Repair Oil",
    category: "Haircare",
    icon: "dropper",
    price: 520,
    oldPrice: null,
    badge: null,
    size: "100ml",
    rating: 4.6,
    reviews: 88,
    shortDesc: "A lightweight finishing oil that smooths frizz and adds mirror-like shine.",
    description: "A blend of argan and camellia oils that absorbs instantly, taming frizz and flyaways while leaving strands soft and glass-like — never greasy.",
    howToUse: [
      "Warm 2–3 drops between palms and smooth over damp or dry hair",
      "Focus on mid-lengths and ends",
      "Use daily or as needed for shine"
    ],
    ingredients: ["Argan oil", "Camellia oil", "Vitamin E"]
  },
  {
    id: 12,
    slug: "botanical-shine-shampoo",
    name: "Botanical Shine Shampoo",
    category: "Haircare",
    icon: "pump",
    price: 320,
    oldPrice: null,
    badge: null,
    size: "250ml",
    rating: 4.5,
    reviews: 133,
    shortDesc: "A sulfate-free shampoo that gently cleanses while preserving natural shine.",
    description: "A sulfate-free, color-safe formula that cleanses without stripping, leaving hair soft, glossy, and easy to manage. Lightly scented with rose and bergamot.",
    howToUse: [
      "Lather into wet hair, focusing on the scalp",
      "Rinse thoroughly and follow with conditioner or mask",
      "Safe for color-treated hair"
    ],
    ingredients: ["Coconut-derived cleansers", "Rose extract", "Panthenol"]
  },
  {
    id: 13,
    slug: "luxe-revive-hair-mask",
    name: "Luxe Revive Hair Mask",
    category: "Haircare",
    icon: "jar",
    price: 580,
    oldPrice: null,
    badge: "New",
    size: "200ml",
    rating: 4.7,
    reviews: 74,
    shortDesc: "A deeply nourishing weekly mask that restores softness to dry, damaged hair.",
    description: "A rich, weekly treatment mask that deposits keratin and shea butter deep into the hair shaft, repairing visible damage and restoring softness after just one use.",
    howToUse: [
      "Apply generously to clean, towel-dried hair from mid-length to ends",
      "Leave on for 5–10 minutes",
      "Rinse thoroughly; use once or twice weekly"
    ],
    ingredients: ["Hydrolyzed keratin", "Shea butter", "Argan oil"]
  },
  {
    id: 14,
    slug: "queen-signature-edp",
    name: "Queen Signature Eau de Parfum",
    category: "Fragrance",
    icon: "perfume",
    price: 980,
    oldPrice: null,
    badge: "Bestseller",
    size: "50ml",
    rating: 4.9,
    reviews: 410,
    shortDesc: "Our house signature — peony and white musk over a warm amber base.",
    description: "The fragrance that started it all. Top notes of peony and pink pepper open into a heart of jasmine, settling into a warm base of white musk and amber that lingers softly through the day.",
    howToUse: [
      "Spray onto pulse points: wrists, neck, and collarbone",
      "Apply to moisturized skin for longer-lasting wear",
      "Reapply lightly in the evening if desired"
    ],
    ingredients: ["Peony", "Jasmine absolute", "White musk", "Amber"]
  },
  {
    id: 15,
    slug: "blush-bloom-edp",
    name: "Blush Bloom Eau de Parfum",
    category: "Fragrance",
    icon: "perfume",
    price: 890,
    oldPrice: null,
    badge: null,
    size: "50ml",
    rating: 4.7,
    reviews: 189,
    shortDesc: "A romantic floral bouquet of rose, lychee, and soft vanilla.",
    description: "A romantic, modern floral built around Turkish rose and juicy lychee, rounded out with soft vanilla and a touch of sandalwood for warmth.",
    howToUse: [
      "Spray onto pulse points for the truest scent development",
      "Layer with the matching body oil for longer wear",
      "Store away from direct sunlight"
    ],
    ingredients: ["Turkish rose", "Lychee accord", "Vanilla", "Sandalwood"]
  },
  {
    id: 16,
    slug: "royal-amber-edp",
    name: "Royal Amber Eau de Parfum",
    category: "Fragrance",
    icon: "perfume",
    price: 1060,
    oldPrice: null,
    badge: "Limited Edition",
    size: "50ml",
    rating: 4.8,
    reviews: 97,
    shortDesc: "A richer, spiced amber fragrance for evening wear, released in limited batches.",
    description: "A deeper, more intense composition for evening — spiced amber and warm vanilla layered over a base of sandalwood and a whisper of smoked vetiver. Released in limited seasonal batches.",
    howToUse: [
      "Best applied to skin rather than clothing for true development",
      "One to two sprays is enough given its intensity",
      "Pairs well in cooler months"
    ],
    ingredients: ["Amber", "Vanilla", "Sandalwood", "Vetiver"]
  },
  {
    id: 17,
    slug: "whipped-body-butter",
    name: "Whipped Body Butter",
    category: "Body",
    icon: "jar",
    price: 460,
    oldPrice: null,
    badge: null,
    size: "200ml",
    rating: 4.7,
    reviews: 151,
    shortDesc: "An ultra-rich, whipped body butter that melts into skin for 48-hour hydration.",
    description: "Whipped to a cloud-like texture, this shea and cocoa butter blend melts into skin on contact, locking in moisture for up to 48 hours without any greasy residue.",
    howToUse: [
      "Scoop a small amount and warm between palms",
      "Massage into skin, focusing on elbows, knees, and dry patches",
      "Best applied right after showering on damp skin"
    ],
    ingredients: ["Shea butter", "Cocoa butter", "Coconut oil", "Vitamin E"]
  },
  {
    id: 18,
    slug: "golden-hour-body-oil",
    name: "Golden Hour Body Oil",
    category: "Body",
    icon: "dropper",
    price: 520,
    oldPrice: 620,
    badge: "Sale",
    size: "100ml",
    rating: 4.6,
    reviews: 112,
    shortDesc: "A dry-touch shimmer oil that hydrates while leaving a subtle golden glow.",
    description: "A fast-absorbing dry oil infused with the faintest golden shimmer, leaving skin hydrated, soft, and subtly luminous — never sticky or oily to the touch.",
    howToUse: [
      "Massage into damp or dry skin after showering",
      "Focus on shoulders, collarbones, and legs for a sunlit effect",
      "Can be layered under or over body lotion"
    ],
    ingredients: ["Sweet almond oil", "Vitamin E", "Mica shimmer", "Jojoba oil"]
  },
  {
    id: 19,
    slug: "pro-vegan-brush-set",
    name: "Pro Vegan Brush Set",
    category: "Tools",
    icon: "brush",
    price: 890,
    oldPrice: null,
    badge: "Bestseller",
    size: "12-piece set",
    rating: 4.8,
    reviews: 64,
    shortDesc: "The 12-piece vegan brush set our trainers hand to every student on day one.",
    description: "A full 12-piece set of cruelty-free, vegan-bristle brushes covering face, eyes, and lips — the same set issued to every Queen of Fabulousness student for in-studio practice. Densely packed bristles hold and blend product without shedding.",
    howToUse: [
      "Wash bristles weekly with a gentle brush cleanser",
      "Lay flat to dry, never standing bristle-up while wet",
      "Comes with a roll-up canvas case for kit bags"
    ],
    ingredients: ["Vegan synthetic bristles", "Aluminum ferrules", "Beechwood handles"]
  },
  {
    id: 20,
    slug: "queen-starter-kit",
    name: "Queen Starter Kit",
    category: "Tools",
    icon: "tote",
    price: 1450,
    oldPrice: 1690,
    badge: "New",
    size: "Kit",
    rating: 4.9,
    reviews: 41,
    shortDesc: "Everything a first-year student needs in one tote: brushes, basics, and a practice palette.",
    description: "Built alongside our own instructors, the Queen Starter Kit bundles the brush set, a neutral practice palette, and core skincare basics into one tote — exactly what's listed on the supply sheet for new students, at a better price than buying separately.",
    howToUse: [
      "Unpack and check each item against the included supply card",
      "Bring the tote to your first in-studio session",
      "Restock individual items from the Shop as you use them up"
    ],
    ingredients: ["Brush set", "Practice palette", "Mini cleansing oil", "Canvas tote"]
  }
];

/* Convenience lookups used across pages */
const CATEGORIES = ["Skincare", "Makeup", "Haircare", "Fragrance", "Body", "Tools"];

function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

/* Manual Rand formatting (avoids locale-dependent toLocaleString quirks) */
function formatPrice(value) {
  const num = Number(value) || 0;
  const fixed = num.toFixed(2);
  const parts = fixed.split(".");
  let intPart = parts[0];
  let sign = "";
  if (intPart.charAt(0) === "-") {
    sign = "-";
    intPart = intPart.slice(1);
  }
  let grouped = "";
  while (intPart.length > 3) {
    grouped = "," + intPart.slice(-3) + grouped;
    intPart = intPart.slice(0, -3);
  }
  grouped = intPart + grouped;
  return "R" + sign + grouped + "." + parts[1];
}
