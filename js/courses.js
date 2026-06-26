/* ==========================================================================
   QUEEN OF FABULOUSNESS — Course catalog (Academy)
   Sample data, priced in South African Rand (ZAR). IDs start at 1001 so they
   never collide with PRODUCTS ids — see cart.js getCatalogItemById(), which
   looks courses up alongside products for a single unified cart.
   ========================================================================== */

const COURSES = [
  {
    id: 1001,
    slug: "professional-makeup-artistry",
    name: "Professional Makeup Artistry",
    category: "Makeup",
    level: "Foundation",
    icon: "brush",
    price: 8500,
    oldPrice: null,
    badge: "Most Popular",
    duration: "8 weeks",
    classSize: "Max 12 students",
    nextIntake: "4 August 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.9,
    reviews: 86,
    shortDesc: "Our flagship course — complexion, eyes, and full face from first principles to a finished portfolio.",
    description: "A complete grounding in professional makeup application, from skin prep and color theory through to full glam. Over eight weeks you'll build a working kit, work on live models every week, and leave with a photographed portfolio you can use to start booking clients.",
    curriculum: [
      "Skin prep, color theory & product knowledge",
      "Complexion: foundation, concealing & contouring",
      "Eye design for different shapes, lash application",
      "Bridal & soft glam looks",
      "Editorial & bold creative looks",
      "Working with diverse skin tones and textures",
      "Building a kit and pricing your services",
      "Final portfolio shoot & assessment"
    ],
    instructor: {
      name: "Thandeka Mokoena",
      role: "Lead Makeup Instructor",
      bio: "14 years behind the brush across South African fashion weeks and bridal seasons, Thandeka leads our Makeup and Skincare programmes."
    },
    size: "8 weeks · Next intake 4 Aug 2026"
  },
  {
    id: 1002,
    slug: "lash-extensions-foundation",
    name: "Lash Extensions Foundation",
    category: "Lashes & Brows",
    level: "Foundation",
    icon: "mascara",
    price: 6200,
    oldPrice: null,
    badge: "Bestseller",
    duration: "4 weeks",
    classSize: "Max 10 students",
    nextIntake: "20 July 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.8,
    reviews: 73,
    shortDesc: "Classic and volume lash application, isolation technique, and safe lash mapping for every eye shape.",
    description: "A hands-on foundation course in classic and volume eyelash extensions. You'll master isolation technique, lash mapping, adhesive selection, and aftercare — building real practice hours on live models along the way.",
    curriculum: [
      "Lash anatomy, health & safety, patch testing",
      "Isolation technique & classic application",
      "Lash mapping for different eye shapes",
      "Volume fans & hybrid sets",
      "Removal, infills & aftercare",
      "Client consultations & retail add-ons"
    ],
    instructor: {
      name: "Naledi Khumalo",
      role: "Lashes & Brows Instructor",
      bio: "A lash and brow specialist with her own Joburg studio for nine years before joining the academy to train the next generation."
    },
    size: "4 weeks · Next intake 20 Jul 2026"
  },
  {
    id: 1003,
    slug: "brow-lamination-shaping",
    name: "Brow Lamination & Shaping",
    category: "Lashes & Brows",
    level: "Foundation",
    icon: "sparkle",
    price: 4800,
    oldPrice: null,
    badge: "New",
    duration: "2 weeks",
    classSize: "Max 10 students",
    nextIntake: "10 August 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.7,
    reviews: 38,
    shortDesc: "Brow mapping, tinting, waxing, threading and the lamination technique that's reshaped the brow bar.",
    description: "A fast, focused course covering everything behind a great brow: mapping and measuring, tinting, waxing and threading, and the lamination process that keeps brows brushed-up and full for weeks at a time.",
    curriculum: [
      "Brow mapping & face shape assessment",
      "Tinting, waxing & threading technique",
      "Lamination: prep, perm, and styling",
      "Aftercare & retail recommendations"
    ],
    instructor: {
      name: "Naledi Khumalo",
      role: "Lashes & Brows Instructor",
      bio: "A lash and brow specialist with her own Joburg studio for nine years before joining the academy to train the next generation."
    },
    size: "2 weeks · Next intake 10 Aug 2026"
  },
  {
    id: 1004,
    slug: "gel-acrylic-nail-technology",
    name: "Gel & Acrylic Nail Technology",
    category: "Nails",
    level: "Foundation",
    icon: "nailpolish",
    price: 7400,
    oldPrice: null,
    badge: "Bestseller",
    duration: "6 weeks",
    classSize: "Max 10 students",
    nextIntake: "27 July 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.8,
    reviews: 91,
    shortDesc: "Nail prep, gel and acrylic application, structure and overlays, finished with salon-ready speed.",
    description: "From nail prep and cuticle work through to full sets in gel and acrylic, this course builds the fundamentals every working nail technician needs — structure, overlays, soak-off removal, and the speed to run a full chair day.",
    curriculum: [
      "Nail anatomy, prep & sanitation",
      "Gel overlays & soak-off removal",
      "Acrylic application & structure",
      "Tips, forms & sculpted extensions",
      "Soak-off & rebalancing",
      "Speed, pricing & client flow"
    ],
    instructor: {
      name: "Palesa Nkosi",
      role: "Nails Instructor",
      bio: "A competition nail artist and salon owner who has trained technicians across Gauteng for the past seven years."
    },
    size: "6 weeks · Next intake 27 Jul 2026"
  },
  {
    id: 1005,
    slug: "nail-art-specialist",
    name: "Nail Art Specialist",
    category: "Nails",
    level: "Intermediate",
    icon: "nailpolish",
    price: 5600,
    oldPrice: null,
    badge: null,
    duration: "4 weeks",
    classSize: "Max 10 students",
    nextIntake: "14 September 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.7,
    reviews: 29,
    shortDesc: "Freehand design, encapsulation, 3D and chrome finishes for technicians who already have the basics down.",
    description: "Built for technicians who already have gel or acrylic fundamentals, this course pushes into freehand line work, encapsulation, 3D embellishment, and the chrome and cat-eye finishes clients are asking for most.",
    curriculum: [
      "Freehand line work & brush control",
      "Encapsulation & foil techniques",
      "3D acrylic embellishment",
      "Chrome, cat-eye & magnetic finishes",
      "Building an Instagram-ready portfolio"
    ],
    instructor: {
      name: "Palesa Nkosi",
      role: "Nails Instructor",
      bio: "A competition nail artist and salon owner who has trained technicians across Gauteng for the past seven years."
    },
    size: "4 weeks · Next intake 14 Sep 2026"
  },
  {
    id: 1006,
    slug: "weave-wig-styling",
    name: "Weave & Wig Styling",
    category: "Hair",
    level: "Foundation",
    icon: "scissors",
    price: 6900,
    oldPrice: null,
    badge: null,
    duration: "5 weeks",
    classSize: "Max 10 students",
    nextIntake: "17 August 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.6,
    reviews: 47,
    shortDesc: "Closure and frontal installs, wig construction, and styling techniques built for South African textures and climate.",
    description: "A practical course in installing and styling closures, frontals, and full wigs, plus building wigs from scratch. Every technique is taught with South African hair textures, humidity, and client maintenance routines in mind.",
    curriculum: [
      "Hair typing & consultation",
      "Closure & frontal install methods",
      "Wig construction from scratch",
      "Styling, cutting & customizing units",
      "Maintenance & client aftercare plans"
    ],
    instructor: {
      name: "Bongani Zulu",
      role: "Hair Instructor",
      bio: "A session stylist for music videos and bridal parties across Johannesburg, now teaching the techniques behind his bookings."
    },
    size: "5 weeks · Next intake 17 Aug 2026"
  },
  {
    id: 1007,
    slug: "skin-fundamentals-facials",
    name: "Skin Fundamentals & Facials",
    category: "Skincare",
    level: "Foundation",
    icon: "jar",
    price: 7800,
    oldPrice: null,
    badge: null,
    duration: "6 weeks",
    classSize: "Max 12 students",
    nextIntake: "7 September 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.8,
    reviews: 52,
    shortDesc: "Skin analysis, facial treatment protocols, and the product knowledge behind every great skincare consult.",
    description: "A foundation course in reading skin, building treatment protocols, and performing the facials that keep clients coming back monthly. You'll also learn to translate treatment results into simple, honest at-home product recommendations.",
    curriculum: [
      "Skin analysis & consultation",
      "Cleansing, exfoliation & extraction technique",
      "Facial massage & mask protocols",
      "Treating common concerns: dryness, breakouts, dullness",
      "Building a treatment menu & retail recommendations"
    ],
    instructor: {
      name: "Thandeka Mokoena",
      role: "Lead Makeup & Skincare Instructor",
      bio: "14 years behind the brush across South African fashion weeks and bridal seasons, Thandeka leads our Makeup and Skincare programmes."
    },
    size: "6 weeks · Next intake 7 Sep 2026"
  },
  {
    id: 1008,
    slug: "bridal-editorial-makeup-mastery",
    name: "Bridal & Editorial Makeup Mastery",
    category: "Advanced",
    level: "Advanced",
    icon: "compact",
    price: 9800,
    oldPrice: null,
    badge: "Advanced",
    duration: "6 weeks",
    classSize: "Max 8 students",
    nextIntake: "21 September 2026",
    mode: "In-studio · Sandton campus",
    rating: 4.9,
    reviews: 34,
    shortDesc: "For graduates ready to specialize — long-wear bridal looks, editorial concepts, and working a real shoot day.",
    description: "An advanced studio for students who've completed Professional Makeup Artistry (or have equivalent experience) and want to specialize in bridal and editorial work — long-wear techniques for all-day events, working with photographers and stylists, and building a concept-driven editorial portfolio.",
    curriculum: [
      "Long-wear techniques for all-day bridal looks",
      "Working bridal trials & timeline management",
      "Editorial concept development & mood boards",
      "Working with photographers, stylists & hair teams on set",
      "Advanced color correction & camera-ready finishing",
      "Final editorial shoot & portfolio review"
    ],
    instructor: {
      name: "Thandeka Mokoena",
      role: "Lead Makeup Instructor",
      bio: "14 years behind the brush across South African fashion weeks and bridal seasons, Thandeka leads our Makeup and Skincare programmes."
    },
    size: "6 weeks · Next intake 21 Sep 2026",
    prerequisite: "Professional Makeup Artistry or equivalent experience"
  }
];

const COURSE_CATEGORIES = ["Makeup", "Lashes & Brows", "Nails", "Hair", "Skincare", "Advanced"];

function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug);
}

function getCourseById(id) {
  return COURSES.find((c) => c.id === Number(id));
}
