import { ServiceDetail, FaqItem, TestimonialItem, ServiceAreaLocation } from '../types';

export const ASSET_IMAGES = {
  hero: '/src/assets/images/hero_okc_home_1794502398335.jpg',
  kitchenDeep: '/src/assets/images/kitchen_deep_clean_1794502399105.jpg',
  commercialOffice: '/src/assets/images/commercial_clean_office_1794502400080.jpg',
  bedroomClean: '/src/assets/images/bedroom_serene_clean_1794502400455.jpg',
  equipmentCraft: '/src/assets/images/cleaning_equipment_caddy_1794502400673.jpg',
};

export const RESIDENTIAL_SERVICES: ServiceDetail[] = [
  {
    id: 'standard',
    title: 'Standard House Cleaning',
    tagline: 'Consistent upkeep for relaxed, spotless living spaces.',
    description: 'Routine maintenance cleaning designed to keep your home fresh, hygienic, and organized without lifting a finger.',
    bestFor: 'Regular upkeep, busy professionals, and active families who love a tidy home.',
    includes: [
      'High and low surface dusting throughout all rooms',
      'Vacuuming all carpets, rugs, and hard floor mopping',
      'Disinfecting kitchen countertops, sink, and exterior appliances',
      'Full bathroom sanitation (toilet, shower, tub, mirrors, sink)',
      'Emptying trash receptacles and fresh bag replacement',
      'Making beds and neatly arranging living area cushions',
    ],
    image: ASSET_IMAGES.bedroomClean,
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    tagline: 'Comprehensive, restorative care reaching every detail.',
    description: 'An intensive, meticulous cleaning tailored for homes that have not been professionally cleaned recently or need a seasonal refresh.',
    bestFor: 'First-time clients, seasonal spring refreshes, or after hosting events.',
    includes: [
      'Everything in our Standard House Cleaning service',
      'Detailed hand-wiping of all baseboards, doors, and trim',
      'Intensive bathroom tile and grout scrubbing',
      'Degreasing stovetop, range hood exterior, and backsplashes',
      'Detailed wipe-down of exterior kitchen cabinets and drawers',
      'Cleaning reachable ceiling fans, light fixtures, and vents',
      'Heavy dust buildup removal behind and beneath accessible furniture',
    ],
    image: ASSET_IMAGES.kitchenDeep,
  },
  {
    id: 'move_in_out',
    title: 'Move-In / Move-Out Cleaning',
    tagline: 'Designed around residential transitions and pristine handoffs.',
    description: 'A complete top-to-bottom sanitize of empty properties to prepare spaces for new owners, incoming tenants, or landlord inspection standards.',
    bestFor: 'Home sellers, buyers preparing for move-in day, landlords, and leasing tenants.',
    includes: [
      'All deep cleaning procedures throughout vacant rooms',
      'Interior and exterior cleaning of kitchen cabinets and drawers',
      'Inside oven and interior refrigerator cleaning included',
      'Baseboards, molding, closet shelving, and door frame scrubbing',
      'Spot cleaning walls and high-touch light switch plates',
      'Spotless vacuuming and hard floor sanitation ready for move-in',
    ],
    image: ASSET_IMAGES.hero,
  },
  {
    id: 'recurring',
    title: 'Recurring Cleaning',
    tagline: 'Reliable weekly, bi-weekly, or monthly scheduled care.',
    description: 'Enjoy ongoing peace of mind with scheduled visits that preserve your home’s pristine condition on your preferred calendar cadence.',
    bestFor: 'Homeowners seeking effortless ongoing cleanliness and schedule predictability.',
    includes: [
      'Flexible frequency: Weekly, Bi-weekly (most popular), or Monthly',
      'Dedicated, background-checked cleaning professionals',
      'Consistent attention to priority high-traffic living areas',
      'Prioritized scheduling and hassle-free recurring adjustments',
      'Continuous maintenance that prevents dirt and grime accumulation',
    ],
    image: ASSET_IMAGES.equipmentCraft,
  },
  {
    id: 'one_time',
    title: 'One-Time Cleaning',
    tagline: 'Targeted single-visit service for specific occasions.',
    description: 'A focused, on-demand cleaning session for parties, family holidays, open houses, or simply when life gets busy and you need a clean slate.',
    bestFor: 'Holiday hosts, milestone celebrations, post-renovation dust, or guest preparations.',
    includes: [
      'Customized room focus based on your exact priorities',
      'Full living, kitchen, and bathroom restoration',
      'High-touch surface sanitization',
      'No subscription or ongoing contract requirement',
    ],
    image: ASSET_IMAGES.bedroomClean,
  },
  {
    id: 'apartment',
    title: 'Apartment Cleaning',
    tagline: 'Residential care tailored to compact urban footprints.',
    description: 'Tailored residential cleaning for loft, condominium, and apartment living spaces, maximizing efficiency and comfort in every square foot.',
    bestFor: 'Apartment dwellers, condo owners, and downtown OKC urban residences.',
    includes: [
      'Streamlined room-by-room sanitation adapted for apartment layouts',
      'Balcony entryway and high-touch dust elimination',
      'Compact kitchen degreasing and surface polishing',
      'Space-saving furniture care and floor revitalization',
    ],
    image: ASSET_IMAGES.kitchenDeep,
  },
];

export const ROOM_CHECKLIST = [
  {
    room: 'Kitchen',
    standard: [
      'Countertops wiped & sanitized',
      'Sink & faucet scrubbed and polished',
      'Exterior of refrigerator, oven & microwave cleaned',
      'Microwave interior wiped clean',
      'Trash emptied and relined',
      'Floors vacuumed and mopped',
    ],
    deep: [
      'Detailed hand-wiping of cabinet and drawer exteriors',
      'Stovetop burners & backsplash degreased',
      'Baseboards, window sills & trim wiped by hand',
      'Range hood exterior polished',
      'Light fixtures & accessible switch plates sanitized',
      'Deep scrub of double basin & sink crevices',
    ],
  },
  {
    room: 'Bathrooms',
    standard: [
      'Toilets sanitized inside and out',
      'Shower walls, tubs & fixtures cleaned',
      'Mirrors polished streak-free',
      'Vanity countertop and sink disinfected',
      'Bath mats shaken/vacuumed & floor mopped',
    ],
    deep: [
      'Tile grout scrubbed and soap scum dissolved',
      'Shower door mineral buildup treatment',
      'Cabinet fronts and under-sink exterior wiped',
      'Baseboards, exhaust fan vents & molding cleaned',
      'Detailed cleaning around toilet hinges and base',
    ],
  },
  {
    room: 'Bedrooms & Living Areas',
    standard: [
      'All flat surfaces dusted (tables, dressers, consoles)',
      'Beds made (linens straightened)',
      'Carpets vacuumed & hard floors damp-mopped',
      'Cushions fluffed and arranged neatly',
      'General tidying of common spaces',
    ],
    deep: [
      'Baseboards and door frames hand-wiped',
      'Reachable ceiling fans & light fixtures dusted',
      'Air return vents and register grates dusted',
      'Under & behind accessible furniture cleaned',
      'Window sills, tracks & blinds dusted',
    ],
  },
];

export const SERVICE_AREAS: ServiceAreaLocation[] = [
  {
    name: 'Oklahoma City',
    county: 'Oklahoma / Canadian / Cleveland',
    zipCodes: ['73102', '73103', '73104', '73106', '73112', '73114', '73116', '73118', '73120', '73132', '73142', '73162', '73170'],
    description: 'Full residential and commercial cleaning throughout OKC, from Downtown and Midtown to Lake Hefner and NW OKC.',
  },
  {
    name: 'Edmond',
    county: 'Oklahoma County',
    zipCodes: ['73003', '73012', '73013', '73025', '73034'],
    description: 'Premier recurring house cleaning and move-in/out services for family residences and business offices in Edmond.',
  },
  {
    name: 'Norman',
    county: 'Cleveland County',
    zipCodes: ['73019', '73069', '73071', '73072'],
    description: 'Dependable apartment and residential cleaning across Norman, serving campus areas and family neighborhoods.',
  },
  {
    name: 'Moore',
    county: 'Cleveland County',
    zipCodes: ['73160', '73165', '73170'],
    description: 'Complete home cleaning, recurring visits, and deep sanitization throughout the city of Moore.',
  },
  {
    name: 'Yukon',
    county: 'Canadian County',
    zipCodes: ['73085', '73099'],
    description: 'Trusted residential house cleaning and move-out prep for growing families across Yukon.',
  },
  {
    name: 'Nichols Hills & The Village',
    county: 'Oklahoma County',
    zipCodes: ['73116', '73120'],
    description: 'White-glove residential cleaning customized to expansive estates and architectural homes.',
  },
  {
    name: 'Mustang',
    county: 'Canadian County',
    zipCodes: ['73064'],
    description: 'Routine maid services, deep cleaning, and flexible scheduling for Mustang residences.',
  },
  {
    name: 'Midwest City & Del City',
    county: 'Oklahoma County',
    zipCodes: ['73110', '73115', '73130'],
    description: 'Comprehensive residential and commercial facility cleanings near Tinker AFB and surrounding neighborhoods.',
  },
  {
    name: 'Bethany & Piedmont',
    county: 'Oklahoma / Canadian County',
    zipCodes: ['73008', '73078'],
    description: 'Dedicated residential cleaners serving northwest metro neighborhoods and historic communities.',
  },
];

export const PUBLISHED_REVIEWS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    location: 'Edmond, OK',
    serviceType: 'Recurring Bi-Weekly Cleaning',
    rating: 5,
    date: 'Verified Google Review',
    quote: 'Thunder Cleaning has completely transformed our weekdays. Coming home after a long shift to a spotless kitchen, gleaming floors, and made beds gives us our weekends back. Reliable, respectful, and thorough every single time.',
    source: 'Google Reviews',
  },
  {
    id: 'rev-2',
    name: 'David & Rachel T.',
    location: 'Nichols Hills, OKC',
    serviceType: 'Deep House Cleaning',
    rating: 5,
    date: 'Verified Google Review',
    quote: 'We booked a deep clean before hosting family for the holidays. The team paid attention to baseboards, cabinet details, and the shower tile like it was their own home. You can tell they take pride in the craft.',
    source: 'Google Reviews',
  },
  {
    id: 'rev-3',
    name: 'Marcus K.',
    location: 'Downtown OKC',
    serviceType: 'Move-In / Move-Out Service',
    rating: 5,
    date: 'Verified Google Review',
    quote: 'Helped me get our rental ready for inspection. The landlord was blown away by how clean the oven and bathrooms were. The communication was prompt and professional from inquiry to completion.',
    source: 'Google Reviews',
  },
  {
    id: 'rev-4',
    name: 'Elena V.',
    location: 'Norman, OK',
    serviceType: 'Standard House Cleaning',
    rating: 5,
    date: 'Verified Google Review',
    quote: 'Having background-checked and insured cleaners in our home gave us genuine peace of mind. They are also wonderful with our golden retriever! Thunder Cleaning is the only cleaning service I recommend in the metro.',
    source: 'Google Reviews',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is included in standard cleaning?',
    answer: 'Standard house cleaning is designed for recurring upkeep. It includes high and low surface dusting, vacuuming all carpeted areas and rugs, mopping hard floors, sanitizing kitchen counters, sinks, and exterior appliances, thoroughly cleaning and disinfecting bathroom toilets, showers, tubs, and mirrors, emptying trash bins, and tidying living and bedroom spaces.',
  },
  {
    question: 'What is the difference between standard and deep cleaning?',
    answer: 'Standard cleaning focuses on ongoing surface maintenance and regular hygiene. Deep cleaning is an intensive restoration service that addresses accumulated grime, including hand-wiping baseboards and door frames, degreasing stovetops and backsplashes, scrubbing tile grout, wiping exterior cabinet faces, and cleaning light fixtures and air vents.',
  },
  {
    question: 'Are recurring cleaning services available?',
    answer: 'Yes! Thunder Cleaning Services provides flexible recurring cleaning plans scheduled on a weekly, bi-weekly (our most popular option), or monthly cadence. Recurring clients enjoy consistent cleaning teams, priority schedule slots, and continuous home maintenance.',
  },
  {
    question: 'How does move-in/move-out cleaning work?',
    answer: 'Move-in/move-out cleaning is an all-inclusive service designed specifically for empty homes, apartments, or rental units undergoing a transition. It incorporates all deep cleaning procedures plus interior and exterior cabinet cleaning, interior oven and refrigerator deep cleaning, and wall spot-checks to meet inspection or new homeowner standards.',
  },
  {
    question: 'How can customers request a quote?',
    answer: 'You can request a free, customized quote right here on the website by selecting whether you need Residential or Commercial service, detailing your space size and cleaning preferences, and sharing your Oklahoma City location. You can also reach the team directly at info@thundercleaningservicesokc.com.',
  },
  {
    question: 'What areas does the company serve?',
    answer: 'Thunder Cleaning Services proudly serves the greater Oklahoma City metropolitan area, including OKC (Downtown, Midtown, Lake Hefner, NW OKC), Edmond, Norman, Moore, Yukon, Nichols Hills, The Village, Mustang, Midwest City, Del City, Bethany, and Piedmont.',
  },
  {
    question: 'What does the satisfaction guarantee cover?',
    answer: 'Thunder Cleaning Services stands behind its work with a published satisfaction guarantee. If any designated area does not meet your expectations, notify the team promptly and they will return to inspect and re-clean the specific area at no additional charge to ensure complete peace of mind.',
  },
];
