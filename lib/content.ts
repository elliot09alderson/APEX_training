export const site = {
  name: "APX Training",
  short: "APX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apxtraining.in",
  tagline: "Fighter-built physique coaching and training community.",
  description:
    "APX Training is a subscription coaching community led by Aditya Janghel, an international kickboxing and wushu athlete with 40+ national and state gold medals. Structured blocks, weekly form review, and nutrition built for Indian kitchens.",
  instagram: "https://instagram.com/APX_training",
  instagramHandle: "@APX_training",
  email: "hello@apxtraining.in",
  whatsapp: "918815799589",
  whatsappDisplay: "+91 88157 99589",
  founders: ["Pratik Verma", "Aditya Janghel"],
} as const;

export const nav = [
  { label: "Training", href: "/#training" },
  { label: "Coach", href: "/#coach" },
  { label: "Gallery", href: "/gallery" },
  { label: "How it runs", href: "/#method" },
  { label: "Membership", href: "/#membership" },
  { label: "Contact", href: "/contact" },
] as const;

/** Single label for the join intent. Used in nav, hero, pricing and footer. */
export const joinCta = { label: "Join APX", href: "/#membership" } as const;

export const proof = [
  {
    value: "40+",
    countTo: 40,
    suffix: "+",
    label: "Gold medals across national and state championships",
  },
  {
    value: "INTL",
    label: "Kickboxing and wushu competitor at international level",
  },
  {
    value: "SAI",
    label: "Former Sports Authority of India Elite athlete",
  },
] as const;

export const coach = {
  name: "Aditya Janghel",
  role: "Head coach",
  video: "/assets/powerhouse-pose.mp4",
  poster: "/assets/posters/powerhouse-pose.jpg",
  portraitAlt:
    "Aditya Janghel holding a front lat spread during posing practice.",
  paragraphs: [
    "Aditya, who everyone in the gym calls Aadi, competes in kickboxing and wushu at international level, and has taken 40+ golds across national and state championships. Before APX he trained as a Sports Authority of India Elite athlete, on the same schedule that produces national medalists.",
    "That background is the whole point. Fighters have to be lean, strong and able to repeat hard work for months without breaking. APX takes the parts of that system that build an aesthetic physique, and drops the parts that only matter on fight night.",
  ],
  record: [
    {
      heading: "Competition",
      items: [
        "International kickboxing circuit",
        "National and state wushu championships",
        "40+ gold medals",
      ],
    },
    {
      heading: "Training background",
      items: [
        "Sports Authority of India Elite athlete",
        "Full-time combat sport programming",
        "Strength and conditioning for fighters",
      ],
    },
    {
      heading: "Coaching",
      items: [
        "Physique and body recomposition blocks",
        "Form correction over video",
        "Beginners through competitive athletes",
      ],
    },
  ],
} as const;

export const pillars = [
  {
    title: "Strength first",
    body: "Compound lifts with a real progression model. Load goes up every week you earn it, not every week the calendar says so.",
    image: "/assets/photos/curl-stronger.jpg",
    imageAlt: "Dumbbell curl under a gym wall reading stronger than yesterday.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Combat conditioning",
    body: "Rounds, not jogging. Pad work and interval structures that strip fat while keeping the muscle you paid for.",
    accent: true,
    span: "lg:col-span-2",
  },
  {
    title: "Food you already eat",
    body: "Roti, rice, dal, eggs, paneer. Targets are set around your kitchen instead of a Western meal-prep template.",
    span: "",
  },
  {
    title: "Weekly form review",
    body: "You film your working sets. Aadi sends back corrections before a small technique error turns into a shoulder that hurts.",
    image: "/assets/photos/training-partners-photo.jpg",
    imageAlt: "Two APX members training together on the gym floor.",
    span: "",
  },
  {
    title: "Stay in one piece",
    body: "Mobility and prehab work built into the block, because the person who trains for ten years wins against the person who trains hard for four months.",
    span: "lg:col-span-4",
  },
] as const;

export const method = [
  {
    label: "Onboarding call",
    body: "A 30 minute call on training history, injuries, your schedule, and what aesthetic actually means for your frame. You leave with a target, not a vibe.",
  },
  {
    label: "Your first block",
    body: "A four week training block with video demos for every lift, plus nutrition targets built around the food in your house. Delivered the same week.",
  },
  {
    label: "Weekly review",
    body: "You send your lifts and check-in numbers. We correct technique, adjust load, and rewrite the block when your body stops responding.",
  },
  {
    label: "Live on Tuesday, Thursday, Saturday",
    body: "Three live sessions a week for every member. Aadi takes you through the session, fixes technique on the call, and answers whatever came up since the last one.",
  },
] as const;

/* TODO (Pratik): confirm final pricing before launch. Values below are placeholders. */
export const plans = [
  {
    key: "community",
    name: "Community",
    price: "₹999",
    cadence: "per month",
    summary: "Group programming and the room to train in.",
    features: [
      "Monthly group training block",
      "Live sessions every Tuesday, Thursday and Saturday",
      "Members-only chat",
      "Form-check thread",
    ],
    featured: false,
  },
  {
    key: "coached",
    name: "Coached",
    price: "₹2,499",
    cadence: "per month",
    summary: "Your own block, reviewed every week by Aadi.",
    features: [
      "Everything in Community",
      "Personal training block",
      "Coached live on the Tuesday, Thursday and Saturday calls",
      "Weekly video form review",
      "Nutrition targets for your kitchen",
      "Block rewritten every four weeks",
    ],
    featured: true,
  },
  {
    key: "one-to-one",
    name: "One to one",
    price: "₹7,999",
    cadence: "per month",
    summary: "Direct line to the coach, for people chasing a deadline.",
    features: [
      "Everything in Coached",
      "Private live coaching sessions on your own schedule",
      "Direct WhatsApp line",
      "Contest or shoot prep",
    ],
    featured: false,
  },
] as const;

export const heroMedia = {
  video: "/assets/physique-pose.mp4",
  poster: "/assets/posters/physique-pose.jpg",
  alt: "APX athlete holding a physique pose in the gym.",
} as const;

export const galleryCategories = [
  "All",
  "Physique",
  "Training",
  "Conditioning",
  "Community",
] as const;

/* Real APX clips. Vertical 9:16, 10 to 20 seconds each. */
export const galleryBanner = {
  image: "/assets/photos/back-spread.jpg",
  alt: "Back double biceps pose against a bright wall.",
} as const;

export const galleryItems = [
  {
    type: "video",
    title: "Physique check",
    category: "Physique",
    src: "/assets/physique-pose.mp4",
    poster: "/assets/posters/physique-pose.jpg",
    alt: "APX athlete holding a physique pose in black and white.",
  },
  {
    type: "photo",
    title: "Side chest",
    category: "Physique",
    src: "/assets/photos/side-chest.jpg",
    poster: "/assets/photos/side-chest.jpg",
    alt: "Side chest pose mid session on the gym floor.",
  },
  {
    type: "video",
    title: "Posing practice",
    category: "Physique",
    src: "/assets/powerhouse-pose.mp4",
    poster: "/assets/posters/powerhouse-pose.jpg",
    alt: "Front lat spread during posing practice in the gym.",
  },
  {
    type: "photo",
    title: "Mirror work",
    category: "Physique",
    src: "/assets/photos/mirror-pose.jpg",
    poster: "/assets/photos/mirror-pose.jpg",
    alt: "Posing in front of the gym mirror after a session.",
  },
  {
    type: "photo",
    title: "Conditioned",
    category: "Physique",
    src: "/assets/photos/bw-pose.jpg",
    poster: "/assets/photos/bw-pose.jpg",
    alt: "Black and white physique pose showing conditioning.",
  },
  {
    type: "photo",
    title: "Lean and dry",
    category: "Physique",
    src: "/assets/photos/bw-pose-two.jpg",
    poster: "/assets/photos/bw-pose-two.jpg",
    alt: "Black and white abdominal and arm pose in the gym.",
  },
  {
    type: "photo",
    title: "Back spread",
    category: "Physique",
    src: "/assets/photos/back-spread.jpg",
    poster: "/assets/photos/back-spread.jpg",
    alt: "Rear lat spread against a bright wall.",
  },
  {
    type: "video",
    title: "Back and arms",
    category: "Physique",
    src: "/assets/arms-back.mp4",
    poster: "/assets/posters/arms-back.jpg",
    alt: "Back and arm development shot from behind in the gym doorway.",
  },
  {
    type: "photo",
    title: "Stronger than yesterday",
    category: "Training",
    src: "/assets/photos/curl-stronger.jpg",
    poster: "/assets/photos/curl-stronger.jpg",
    alt: "Dumbbell curl under a gym wall reading stronger than yesterday.",
  },
  {
    type: "video",
    title: "Between sets",
    category: "Training",
    src: "/assets/gym-standing.mp4",
    poster: "/assets/posters/gym-standing.jpg",
    alt: "Resting between working sets on the gym floor.",
  },
  {
    type: "photo",
    title: "Rest period",
    category: "Training",
    src: "/assets/photos/between-sets.jpg",
    poster: "/assets/photos/between-sets.jpg",
    alt: "Standing against the bench between working sets.",
  },
  {
    type: "photo",
    title: "Mid block check",
    category: "Training",
    src: "/assets/photos/progress-mirror.jpg",
    poster: "/assets/photos/progress-mirror.jpg",
    alt: "Progress check in the gym mirror partway through a block.",
  },
  {
    type: "photo",
    title: "Waist line",
    category: "Training",
    src: "/assets/photos/abs-wide.jpg",
    poster: "/assets/photos/abs-wide.jpg",
    alt: "Midsection check in the gym mirror.",
  },
  {
    type: "video",
    title: "Progress check",
    category: "Training",
    src: "/assets/progress-check.mp4",
    poster: "/assets/posters/progress-check.jpg",
    alt: "Mid-block progress check in training kit.",
  },
  {
    type: "video",
    title: "Hill work",
    category: "Conditioning",
    src: "/assets/hill-conditioning.mp4",
    poster: "/assets/posters/hill-conditioning.jpg",
    alt: "Outdoor hill conditioning session on a trail.",
  },
  {
    type: "photo",
    title: "The coach",
    category: "Community",
    src: "/assets/photos/coach-portrait.jpg",
    poster: "/assets/photos/coach-portrait.jpg",
    alt: "Aditya Janghel, head coach at APX Training, in the gym.",
  },
  {
    type: "photo",
    title: "Training partners",
    category: "Community",
    src: "/assets/photos/training-partners-photo.jpg",
    poster: "/assets/photos/training-partners-photo.jpg",
    alt: "Two APX members posing together after a session.",
  },
  {
    type: "video",
    title: "Same session",
    category: "Community",
    src: "/assets/training-partners.mp4",
    poster: "/assets/posters/training-partners.jpg",
    alt: "Two APX members training together in the gym.",
  },
] as const;

export const ethos = [
  "Discipline",
  "Progressive overload",
  "Recovery",
  "Consistency",
  "Technique",
] as const;

export const faqs = [
  {
    q: "What is APX Training?",
    a: "APX Training is an online physique coaching membership run by Aditya Janghel, an international kickboxing and wushu athlete with 40+ gold medals. Members get a four week training block, weekly video form review, nutrition targets built for Indian home food, and live coaching every Tuesday, Thursday and Saturday.",
  },
  {
    q: "Do I need a gym membership?",
    a: "For the Coached and One to one plans, yes. A basic gym with barbells, dumbbells and a rack is enough. The Community plan includes a home variant of the block if you are training without equipment.",
  },
  {
    q: "I have never trained before. Is this for me?",
    a: "Yes. Most members start here. The first block is built around learning the six main lifts properly, and every one of them has a demo video plus a form review before load goes up.",
  },
  {
    q: "Do I have to train in kickboxing or wushu?",
    a: "No. The combat sport background shapes how we build conditioning and work capacity. You never have to throw a punch to use the programme.",
  },
  {
    q: "How is the training delivered?",
    a: "Through a members app and a group chat, plus live sessions every Tuesday, Thursday and Saturday. Your block, demo videos, check-in form and coach replies all live in one place, so nothing is buried in a PDF.",
  },
  {
    q: "Can I follow this as a vegetarian?",
    a: "Yes. Targets are set around dal, paneer, curd, soya and whey rather than a chicken-and-rice template. Tell us what you eat and the plan is built on that.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Membership is billed monthly and you can stop before the next cycle. Your current block stays with you.",
  },
] as const;
