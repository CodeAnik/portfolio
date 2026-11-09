import type { ImageMetadata } from 'astro';

import medientry from '@/assets/projects/anik-khan-medientry.webp';
import medientryFull from '@/assets/projects/anik-khan-medientry-full.webp';
import erm from '@/assets/projects/anik-khan-escape-room-marketer.webp';
import ftDesign from '@/assets/projects/anik-khan-ft-design-and-construction.webp';
import ftDesignFull from '@/assets/projects/anik-khan-ft-design-and-construction-full.webp';
import hygeena from '@/assets/projects/anik-khan-hygeena.webp';
import hygeenaFull from '@/assets/projects/anik-khan-hygeena-full.webp';
import bdPetMart from '@/assets/projects/anik-khan-bd-pet-mart.webp';
import bdPetMartFull from '@/assets/projects/anik-khan-bd-pet-mart-full.webp';
import dollarCarpet from '@/assets/projects/anik-khan-3-dollar-carpet.webp';
import dollarCarpetFull from '@/assets/projects/anik-khan-3-dollar-carpet-full.webp';
import tampaRoom from '@/assets/projects/anik-khan-tampa-room-for-rent.webp';
import tampaRoomFull from '@/assets/projects/anik-khan-tampa-room-for-rent-full.webp';
import decaturRoom from '@/assets/projects/anik-khan-decatur-room-for-rent.webp';
import decaturRoomFull from '@/assets/projects/anik-khan-decatur-room-for-rent-full.webp';
import tesiBon from '@/assets/projects/anik-khan-tesi-bon.webp';
import tesiBonFull from '@/assets/projects/anik-khan-tesi-bon-full.webp';
import greatEscape from '@/assets/projects/anik-khan-great-escape-rooms.webp';
import greatEscapeFull from '@/assets/projects/anik-khan-great-escape-rooms-full.webp';
import detoxamin from '@/assets/projects/anik-khan-detoxamin.webp';
import detoxaminFull from '@/assets/projects/anik-khan-detoxamin-full.webp';
import wireframe from '@/assets/projects/anik-khan-wireframe-design-studio.webp';
import wireframeFull from '@/assets/projects/anik-khan-wireframe-design-studio-full.webp';
import muntasir from '@/assets/projects/anik-khan-muntasir-living.webp';
import muntasirFull from '@/assets/projects/anik-khan-muntasir-living-full.webp';
import exclusive from '@/assets/projects/anik-khan-exclusive-communications.webp';
import exclusiveFull from '@/assets/projects/anik-khan-exclusive-communications-full.webp';
import sdMetal from '@/assets/projects/anik-khan-sd-metal.webp';
import sdMetalFull from '@/assets/projects/anik-khan-sd-metal-full.webp';
import radiant from '@/assets/projects/anik-khan-radiant-smile-dental.webp';
import radiantFull from '@/assets/projects/anik-khan-radiant-smile-dental-full.webp';
import mahmudurIt from '@/assets/projects/anik-khan-mahmudur-it.webp';
import mahmudurItFull from '@/assets/projects/anik-khan-mahmudur-it-full.webp';
import gameShow from '@/assets/projects/anik-khan-game-show-room-west-nyack.webp';
import gameShowFull from '@/assets/projects/anik-khan-game-show-room-west-nyack-full.webp';
import innovativeBites from '@/assets/projects/anik-khan-innovative-bites.webp';
import innovativeBitesFull from '@/assets/projects/anik-khan-innovative-bites-full.webp';
import pickleball from '@/assets/projects/anik-khan-pickleball-scoreboard.webp';
import pickleballFull from '@/assets/projects/anik-khan-pickleball-scoreboard-full.webp';
import mayfair from '@/assets/projects/anik-khan-mayfair-wellness-clinic.webp';
import mayfairFull from '@/assets/projects/anik-khan-mayfair-wellness-clinic-full.webp';
import lagoona from '@/assets/projects/anik-khan-lagoona-villa.webp';
import finexcel from '@/assets/projects/anik-khan-finexcel.webp';
import finexcelFull from '@/assets/projects/anik-khan-finexcel-full.webp';
import sanzida from '@/assets/projects/anik-khan-sanzida-tonni.webp';
import sanzidaFull from '@/assets/projects/anik-khan-sanzida-tonni-full.webp';
import resilienz from '@/assets/projects/anik-khan-resilienzkompass.webp';
import resilienzFull from '@/assets/projects/anik-khan-resilienzkompass-full.webp';
import trunkShow from '@/assets/projects/anik-khan-pickleball-trunk-show.webp';
import trunkShowFull from '@/assets/projects/anik-khan-pickleball-trunk-show-full.webp';
import certified from '@/assets/projects/anik-khan-pickleball-certified-authentic.webp';
import certifiedFull from '@/assets/projects/anik-khan-pickleball-certified-authentic-full.webp';
import chashirPonno from '@/assets/projects/anik-khan-chashir-ponno.webp';
import chashirPonnoFull from '@/assets/projects/anik-khan-chashir-ponno-full.webp';
import decideOn from '@/assets/projects/anik-khan-decide-on-bd.webp';
import decideOnFull from '@/assets/projects/anik-khan-decide-on-bd-full.webp';

export type ProjectCategory = 'fullstack' | 'wordpress' | 'web' | 'ecommerce';

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'web', label: 'Web Development' },
  { id: 'ecommerce', label: 'E-commerce' },
];

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** Full-page captures are shown in a scrollable frame. */
  fullPage?: boolean;
  /** The image already includes its own browser frame, so pages shouldn't add another. */
  framed?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary for cards and meta descriptions. */
  summary: string;
  /** Case-study paragraphs for the project page. */
  description: string[];
  categories: ProjectCategory[];
  kind: 'Client platform' | 'Client website' | 'Web application' | 'Plugin suite' | 'Personal project';
  industry: string;
  stack: string[];
  year?: string;
  client?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Further source links, e.g. one repository per plugin. */
  links?: { label: string; href: string }[];
  /** Whether the source code is public. Private client code is described, never linked. */
  code?: 'public' | 'private';
  /** What I engineered on the project. */
  contribution?: string[];
  /** Key functionality, shown as a short list. */
  features?: string[];
  featured?: boolean;
  /** Projects without a real screenshot get a typographic cover instead of a fake one. */
  cover?: ProjectImage;
  gallery: ProjectImage[];
}

/** Homepage capture. Pages taller than the capture limit are labelled as the top sections only. */
const homepage = (src: ImageMetadata, name: string, complete = true): ProjectImage => ({
  src,
  alt: `Full-page capture of the ${name} homepage`,
  caption: complete ? 'Full homepage' : 'Homepage (top sections)',
  fullPage: true,
});

/**
 * Live client work first, in the order Anik listed it (screenshots captured from each live site),
 * then GitHub work from public repositories.
 */
export const projects: Project[] = [
  {
    slug: 'medientry',
    title: 'Medientry Bangladesh',
    summary: 'MBBS admissions platform for Indian students: a Next.js website backed by a custom CMS, API and admin dashboard.',
    description: [
      'Medientry is an MBBS admissions consultancy that has guided Indian students into NMC-recognised medical colleges in Bangladesh since 2018. The website explains fees, colleges and the admission process, and turns visitors into free consultation bookings.',
      'Behind the public Next.js site is a full content platform: a REST API and an admin dashboard where the team manages colleges, fee structures, admission steps, FAQs, notices and media without touching code.',
    ],
    contribution: [
      'Designed and built the Express and TypeScript API with Prisma and PostgreSQL, including migrations and seed data.',
      'Implemented JWT authentication with bcrypt-hashed passwords, Helmet and CORS hardening, and request validation with Zod.',
      'Built the React admin dashboard: structured content editors, rich text with Tiptap, file uploads and a media library browser.',
      'Connected the Next.js front end to the CMS API, set up SMTP email for consultation enquiries and deployed on DigitalOcean.',
    ],
    features: ['Fee structures and college listings managed from the CMS', 'Student video testimonials', 'Knowledge hub, notices and downloads', 'Free consultation enquiries by email'],
    categories: ['fullstack', 'web'],
    kind: 'Client platform',
    industry: 'Education & healthcare',
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
    year: '2026',
    client: 'Medientry Bangladesh',
    liveUrl: 'https://medientrybd.com/',
    code: 'private',
    featured: true,
    cover: { src: medientry, alt: 'Medientry homepage hero: Study MBBS in Bangladesh for Indian Students, with consultation and fee structure buttons' },
    gallery: [homepage(medientryFull, 'Medientry', false)],
  },
  {
    slug: 'escape-room-marketer',
    title: 'Escape Room Marketer',
    summary: 'Next.js website for a marketing agency that serves escape room businesses worldwide.',
    description: [
      'Escape Room Marketer is a marketing agency dedicated to escape room businesses, with 30+ clients from North America to Australia. The website sells its Google Ads, SEO, Meta and LinkedIn advertising, conversion optimisation and web development services.',
      'The long-form homepage leads with a free marketing plan offer and backs it up with service breakdowns, published case studies, pricing options and client results. The site runs on Next.js behind Cloudflare.',
    ],
    features: ['Free marketing plan lead capture', 'Service, pricing and results pages', 'Published case studies and blog', 'Client login'],
    categories: ['web'],
    kind: 'Client website',
    industry: 'Marketing agency',
    stack: ['Next.js', 'React', 'Cloudflare', 'Cloudinary', 'Tailwind CSS'],
    client: 'Escape Room Marketer',
    liveUrl: 'https://escaperoommarketer.com/',
    repoUrl: 'https://github.com/dgency/ERM-Client',
    code: 'public',
    featured: true,
    cover: { src: erm, alt: 'Escape Room Marketer homepage: Escape Room Marketing Agency That Unlocks Your Revenue Mystery' },
    gallery: [],
  },
  {
    slug: 'ft-design-and-construction',
    title: 'FT Design and Construction',
    summary: 'Website for an architecture, interior design and construction firm in Dhaka.',
    description: [
      'FT Design and Construction is an architecture and construction company in Dhanmondi, Dhaka, with 20 years of design and build work. The website presents its services, from architectural design and planning to interiors and construction.',
      'A dark, image-led layout puts the firm’s completed projects front and centre, including multi-storey residential and administrative buildings, and closes the homepage with a direct call to start a project.',
    ],
    features: ['Service overview', 'Project portfolio', 'Client testimonials', 'Project enquiry form'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Architecture & construction',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'FT Design and Construction',
    liveUrl: 'https://ftdesignandconstruction.com/',
    cover: { src: ftDesign, alt: 'FT Design and Construction homepage: Build Your Dream Space With Our Expert Design, over a night-time house photograph' },
    gallery: [homepage(ftDesignFull, 'FT Design and Construction')],
  },
  {
    slug: 'hygeena',
    title: 'Hygeena',
    summary: 'WooCommerce store for a hormone-free women’s wellness product.',
    description: [
      'Hygeena makes all-natural, hormone-free suppositories for vaginal dryness. The website is both the brand’s home and its online shop, selling directly to customers.',
      'The homepage pairs a clear “Order now” call to action with education on menopause and vaginal atrophy, doctor endorsements, reviews and a 30-day money-back guarantee, then leads into the WooCommerce shop and cart.',
    ],
    features: ['WooCommerce shop and cart', 'Product education and FAQs', 'Customer reviews', 'Blog'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Health & wellness',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'Hygeena',
    liveUrl: 'https://hygeena.com/',
    cover: { src: hygeena, alt: 'Hygeena homepage hero: Suppositories For Vaginal Dryness, with an Order Hygeena Now button' },
    gallery: [homepage(hygeenaFull, 'Hygeena')],
  },
  {
    slug: 'bd-pet-mart',
    title: 'BD Pet Mart',
    summary: 'Online pet food and supplies store in Bangladesh, built on WooCommerce.',
    description: [
      'BD Pet Mart is an online pet shop in Mirpur, Dhaka, selling food, treats, litter, accessories and health care for cats, dogs, birds and rabbits.',
      'The store is organised around the way pet owners shop: a mega menu by animal and product type, a brand directory, sale pricing in taka and quick add-to-cart from the homepage. Customers can also track their orders.',
    ],
    features: ['Shop by animal, category or brand', 'Sale pricing and offers', 'Customer accounts and order tracking', 'Quick add to cart'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Pet supplies',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'BD Pet Mart',
    liveUrl: 'https://bdpetmart.com/',
    cover: { src: bdPetMart, alt: 'BD Pet Mart homepage: Delicious & Healthy Food Your Pets Will Love, with a search bar and pet category menu' },
    gallery: [homepage(bdPetMartFull, 'BD Pet Mart', false)],
  },
  {
    slug: '3-dollar-carpet',
    title: '3 Dollar Carpet & Floors',
    summary: 'Lead-generation website for a carpet and vinyl plank outlet in Draper, Utah.',
    description: [
      '3 Dollar Carpet & Floors sells mill overruns and discontinued rolls of carpet and waterproof vinyl plank at outlet prices, installed by its own crews across the Salt Lake Valley.',
      'The website is built to generate estimate requests: a free-estimate form sits in the hero, and the page walks visitors through products, residential and commercial work, completed floors, how the process works and the areas served.',
    ],
    features: ['Free estimate form in the hero', 'Carpet and vinyl plank catalogues', 'Project portfolio', 'Service-area pages'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Flooring',
    stack: ['WordPress', 'Elementor', 'Lead forms', 'Local SEO'],
    client: '3 Dollar Carpet & Floors',
    liveUrl: 'https://3dollarcarpet.com/',
    featured: true,
    cover: { src: dollarCarpet, alt: '3 Dollar Carpet homepage: Cheap Price. Not Cheap Carpet., with a free estimate form' },
    gallery: [homepage(dollarCarpetFull, '3 Dollar Carpet', false)],
  },
  {
    slug: 'tampa-room-for-rent',
    title: 'Tampa Room for Rent',
    summary: 'Room rental website for students and young professionals in Tampa, Florida.',
    description: [
      'Tampa Room for Rent offers furnished rooms in shared houses close to Tampa’s universities, aimed at students and young professionals.',
      'Each property gets its own page with its units, bedrooms and bathrooms, and every listing links to an enquiry form and room availability. Renter reviews, FAQs and a blog answer common questions before people get in touch.',
    ],
    features: ['Property pages with unit details', 'Room availability and enquiry form', 'Renter reviews', 'FAQs and blog'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Real estate & rentals',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Tampa Room for Rent',
    liveUrl: 'https://tamparoomforrent.com/',
    cover: { src: tampaRoom, alt: 'Tampa Room for Rent homepage: Perfect for Students and Young Professionals!' },
    gallery: [homepage(tampaRoomFull, 'Tampa Room for Rent')],
  },
  {
    slug: 'decatur-room-for-rent',
    title: 'Decatur Room for Rent',
    summary: 'Room rental website for students and young professionals in Decatur, Georgia.',
    description: [
      'Decatur Room for Rent offers affordable furnished rooms near campus and downtown Decatur, with flexible lease terms.',
      'It shares a structure with Tampa Room for Rent: property pages for each house, availability and enquiry forms, renter reviews and an FAQ covering utilities, house rules, fees and the application process.',
    ],
    features: ['Property pages with unit details', 'Room availability and enquiry form', 'Renter reviews', 'FAQs and blog'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Real estate & rentals',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Decatur Room for Rent',
    liveUrl: 'https://decaturroomforrent.com/',
    cover: { src: decaturRoom, alt: 'Decatur Room for Rent homepage: Perfect for Students and Young Professionals!' },
    gallery: [homepage(decaturRoomFull, 'Decatur Room for Rent')],
  },
  {
    slug: 'tesi-bon',
    title: 'Tesi Bon',
    summary: 'Bilingual brand website for an oven-baked snack range sold across Europe.',
    description: [
      'Tesi Bon makes oven-baked snacks — Hot Spiced Curlz, Cheese Honey Puffs and Crunchy Cheese Curlz — sold through distributors in the Netherlands, Belgium, Poland and Austria.',
      'The website matches the packaging’s bold, playful style, introduces each flavour and lists distributors, with the full site available in English and Dutch.',
    ],
    features: ['Product range by flavour', 'Distributor listings', 'English and Dutch versions', 'Contact form'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Food & snacks',
    stack: ['WordPress', 'Elementor', 'Multilingual'],
    client: 'Tesi Bon',
    liveUrl: 'https://tesi-bon.com/',
    cover: { src: tesiBon, alt: 'Tesi Bon homepage: Bite Into Fun, Bite Into Tesibon!, with snack packs bursting from the frame' },
    gallery: [homepage(tesiBonFull, 'Tesi Bon')],
  },
  {
    slug: 'great-escape-rooms',
    title: 'Great Escape Rooms Galway',
    summary: 'Booking-focused website for eight escape rooms across two venues in Galway, Ireland.',
    description: [
      'Great Escape Rooms runs eight escape rooms in two Galway city-centre venues and has been rated the #1 escape room in Galway on Tripadvisor nine years in a row.',
      'The site is built to sell bookings: every room has its own page, prices and reviews sit right under the hero, and group pages cover corporate team building, Christmas parties, hen and stag parties, birthdays and school groups. Gift vouchers and local guides round it out.',
    ],
    features: ['A page for each of the eight rooms', 'Online booking and gift vouchers', 'Group and party event pages', 'Venue and local guide pages'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Entertainment',
    stack: ['WordPress', 'Elementor', 'Online booking', 'SEO'],
    client: 'Great Escape Rooms',
    liveUrl: 'https://greatescaperooms.ie/',
    featured: true,
    cover: { src: greatEscape, alt: 'Great Escape Rooms homepage: The Ultimate Escape Rooms in Galway City, with Book Your Game and Plan Your Event buttons' },
    gallery: [homepage(greatEscapeFull, 'Great Escape Rooms', false)],
  },
  {
    slug: 'detoxamin',
    title: 'Detoxamin',
    summary: 'WooCommerce store for EDTA chelation and glutathione supplements.',
    description: [
      'Detoxamin sells EDTA chelation and glutathione suppositories that support heavy-metal detoxification and healthy ageing.',
      'The WooCommerce store offers each formula in several pack sizes, with customer accounts, a science section with references, an e-book and an email newsletter for customers who want to learn more before buying.',
    ],
    features: ['Products with pack-size options', 'Customer accounts', 'Science and reference pages', 'Newsletter sign-up'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Health & wellness',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'Detoxamin',
    liveUrl: 'https://detoxamin.com/',
    cover: { src: detoxamin, alt: 'Detoxamin homepage: For Intelligent Health Intervention, with Create account and Shop products buttons' },
    gallery: [homepage(detoxaminFull, 'Detoxamin')],
  },
  {
    slug: 'wireframe-design-studio',
    title: 'Wireframe Design Studio',
    summary: 'Portfolio website for an architecture, interior and construction consultancy in Dhaka.',
    description: [
      'Wireframe Design Studio is a Dhaka design and consultancy firm founded by three partners with architecture and civil engineering backgrounds. It handles building design, interiors, construction and project management.',
      'The website opens on a full-screen slider of interior renders and showcases featured work for clients such as Apollo Tyres and SMEC, followed by the services and a client list.',
    ],
    features: ['Full-screen project slider', 'Featured works', 'Services overview', 'Client logos'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Architecture & interiors',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Wireframe Design Studio',
    liveUrl: 'https://wireframebd.com/',
    cover: { src: wireframe, alt: 'Wireframe Design Studio homepage with a full-screen bedroom interior render' },
    gallery: [homepage(wireframeFull, 'Wireframe Design Studio')],
  },
  {
    slug: 'muntasir-living',
    title: 'Muntasir Living Ltd.',
    summary: 'Real estate developer website showcasing projects in Dhaka and Chattogram.',
    description: [
      'Muntasir Living Ltd. is a real estate company and REHAB member that has completed 25+ residential and commercial projects in Dhaka and Chattogram since 2010.',
      'The website presents its featured towers with location, floor count and parking details, separates projects by city, and publishes guides on buying and investing in Bangladeshi property.',
    ],
    features: ['Featured project details', 'Projects by city', 'Real estate blog', 'Contact and WhatsApp'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Real estate',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Muntasir Living Ltd.',
    liveUrl: 'https://muntasirbd.com/',
    cover: { src: muntasir, alt: 'Muntasir Living homepage: Transforming Skylines…, over a rooftop terrace photograph' },
    gallery: [homepage(muntasirFull, 'Muntasir Living')],
  },
  {
    slug: 'exclusive-communications',
    title: 'Exclusive Communications',
    summary: 'Website for an event management and catering company in Dhaka.',
    description: [
      'Exclusive Communications is an event management and catering company in Dhaka, run by a retired Bangladesh Army major with more than 15 years in the industry.',
      'The website covers its services — event management, catering, wedding planning, videography and venue booking — with catering menus, its enlistment with clubs and institutions, letters of appreciation, a gallery and reviews.',
    ],
    features: ['Services and catering menus', 'Enlistment and client lists', 'Photo gallery and reviews', 'Contact and phone call to action'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Events & catering',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Exclusive Communications',
    liveUrl: 'https://exclusiveimrul.com/',
    cover: { src: exclusive, alt: 'Exclusive Communications homepage: Best Event and Catering Services in Dhaka' },
    gallery: [homepage(exclusiveFull, 'Exclusive Communications', false)],
  },
  {
    slug: 'sd-metal',
    title: 'SD Metal',
    summary: 'Multilingual website for a metal fabrication company in Cyprus.',
    description: [
      'SD Metal designs, fabricates and installs metal structures in Cyprus — pergolas, stairs, railings, gates, fences, garages and prefabricated houses — with more than two decades of experience.',
      'The website presents each construction type with photos and a project gallery, and is available in English, Greek and Russian.',
    ],
    features: ['Construction types with photos', 'Project gallery', 'English, Greek and Russian', 'Quote request form'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Metal fabrication',
    stack: ['WordPress', 'Elementor', 'Multilingual'],
    client: 'SD Metal',
    liveUrl: 'https://sdmetal.com.cy/',
    cover: { src: sdMetal, alt: 'SD Metal homepage with a photograph of a metal pergola frame' },
    gallery: [homepage(sdMetalFull, 'SD Metal')],
  },
  {
    slug: 'radiant-smile-dental',
    title: 'Radiant Smile Dental Clinic',
    summary: 'Website for a dental clinic in Mohakhali DOHS, Dhaka, built around appointments.',
    description: [
      'Radiant Smile Dental Clinic is a dental practice in Mohakhali DOHS, Dhaka, led by Dr. Laila Noor-E-Najnin, with more than 20 years of experience.',
      'The homepage puts an appointment call to action and the clinic’s phone number above the fold, followed by services from general to cosmetic and orthodontic dentistry, before-and-after photos, patient videos and reviews.',
    ],
    features: ['Appointment call to action', 'Service pages by specialty', 'Before-and-after gallery and videos', 'Patient reviews'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Healthcare',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Radiant Smile Dental Clinic',
    liveUrl: 'https://radiantsmiledentalbd.com/',
    cover: { src: radiant, alt: 'Radiant Smile Dental Clinic homepage hero with a dentist and a Get an Appointment button' },
    gallery: [homepage(radiantFull, 'Radiant Smile Dental Clinic')],
  },
  {
    slug: 'mahmudur-it',
    title: 'MahmudurIT',
    summary: 'React website for a performance marketing agency led by Mahmudur Rahman.',
    description: [
      'MahmudurIT is a growth agency led by Mahmudur Rahman, a Meta Business Partner with six years of experience in Meta Ads, Google Ads, LinkedIn marketing and lead generation.',
      'The single-page React site explains each service, the agency’s approach and how it works, and ends with a project enquiry form that includes an optional monthly ad budget.',
    ],
    features: ['Service breakdowns', 'How-it-works process', 'Project enquiry form', 'WhatsApp contact'],
    categories: ['web'],
    kind: 'Client website',
    industry: 'Digital marketing',
    stack: ['React', 'Vite', 'Responsive design'],
    client: 'Mahmudur Rahman',
    liveUrl: 'https://mahmudurit.com/',
    cover: { src: mahmudurIt, alt: 'MahmudurIT homepage: We Scale Brands with Meta & Performance Marketing' },
    gallery: [homepage(mahmudurItFull, 'MahmudurIT')],
  },
  {
    slug: 'game-show-room-west-nyack',
    title: 'Game Show Room West Nyack',
    summary: 'Booking website for a live game show experience at Palisades Center, New York.',
    description: [
      'Game Show Room puts groups of friends, families and co-workers on a live, hosted game show set at Palisades Center in West Nyack, NY, with a second location in Rockaway, NJ.',
      'Online booking runs through FareHarbor for small groups, with a separate path for large group events. Pages for birthday parties, school trips and corporate team building, plus FAQs and reviews, support each type of booking.',
    ],
    features: ['FareHarbor online booking', 'Group and party event pages', 'Second-location pages', 'FAQs and reviews'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Entertainment',
    stack: ['WordPress', 'Elementor', 'FareHarbor'],
    client: 'Game Show Room',
    liveUrl: 'https://gameshowroomwestnyack.com/',
    cover: { src: gameShow, alt: 'Game Show Room homepage: Live Game Show Experience in West Nyack — Just Like on TV!' },
    gallery: [homepage(gameShowFull, 'Game Show Room', false)],
  },
  {
    slug: 'innovative-bites',
    title: 'Innovative Bites',
    summary: 'B2B wholesale store for American snacks, candy and drinks in the Netherlands.',
    description: [
      'Innovative Bites imports 300+ American snacks, candy and drinks and supplies retailers, wholesalers and specialty stores in the Netherlands and Europe, delivering Monday to Friday with its own fleet.',
      'The WooCommerce store is for business customers only: shops apply for a business account to see wholesale pricing and order by the case. The catalogue is organised by category and brand and is available in English and Dutch.',
    ],
    features: ['Business account applications', 'Wholesale catalogue by category and brand', 'English and Dutch versions', 'Chat and WhatsApp support'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Food wholesale',
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'Multilingual'],
    client: 'Innovative Bites',
    liveUrl: 'https://innovativebites.nl/',
    featured: true,
    cover: { src: innovativeBites, alt: 'Innovative Bites homepage: America’s best-sellers for your shelves, with snack product cards' },
    gallery: [homepage(innovativeBitesFull, 'Innovative Bites')],
  },
  {
    slug: 'pickleball-scoreboard',
    title: 'The Pickleball Scoreboard',
    summary: 'WooCommerce store for a dedicated pickleball scoreboard product.',
    description: [
      'The Pickleball Scoreboard sells a purpose-built scoreboard for pickleball courts and tournaments and ships worldwide from Florida.',
      'The homepage opens on a full-width action shot with a “Shop now” call to action, then explains how the scoreboard works, shows it in use at facilities and tournaments, and offers bulk pricing through an enquiry form.',
    ],
    features: ['WooCommerce shop and cart', 'Bulk purchase enquiry form', 'Photo and social media galleries', 'Customer testimonials'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Sports equipment',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'The Pickleball Scoreboard',
    liveUrl: 'https://thepickleballscoreboard.com/',
    cover: { src: pickleball, alt: 'The Pickleball Scoreboard homepage: Experience The Only Functional Pickleball Scoreboard, with a Shop Now button' },
    gallery: [homepage(pickleballFull, 'The Pickleball Scoreboard')],
  },
  {
    slug: 'mayfair-wellness-clinic',
    title: 'Mayfair Wellness Clinic',
    summary: 'Website for a physiotherapy and wellness clinic in Gulshan, Dhaka.',
    description: [
      'Mayfair Wellness Clinic is a physiotherapy centre on Gulshan Avenue, Dhaka, trusted by more than 3,500 families for pain relief, rehabilitation and whole-body wellness.',
      'The website organises treatments by condition — neck, back, shoulder, joint and arthritis pain, urological physiotherapy and women’s health — introduces the specialists and keeps an “Appointment now” button in the header on every page.',
    ],
    features: ['Treatments by condition', 'Specialist profiles', 'Appointment booking', 'Success stories and FAQs'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Healthcare',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Mayfair Wellness Clinic',
    liveUrl: 'https://mayfair.com.bd/',
    cover: { src: mayfair, alt: 'Mayfair Wellness Clinic homepage hero with a physiotherapist and an Appointment Now button' },
    gallery: [homepage(mayfairFull, 'Mayfair Wellness Clinic', false)],
  },
  {
    slug: 'lagoona-villa',
    title: 'Lagoona Villa',
    summary: 'Holiday villa website in Tobago with a booking form on the first screen.',
    description: [
      'Lagoona Villa is a five-bedroom holiday villa for up to 12 guests, set on an acre of tropical gardens in Tobago.',
      'The homepage puts a booking form with dates, guests and paid extras — airport pickup, car rental, catering and cleaning — beside the headline. Further down, guests tour the bedrooms, kitchen and terrace and can find the villa on Tripadvisor, Booking.com and Airbnb.',
    ],
    features: ['Booking calendar with paid extras', 'Room-by-room villa tour', 'Guest accounts', 'Links to Tripadvisor, Booking.com and Airbnb'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Hospitality',
    stack: ['WordPress', 'Elementor', 'WP Simple Booking Calendar'],
    client: 'Lagoona Villa',
    liveUrl: 'https://lagoonavillaofficial.com/',
    cover: { src: lagoona, alt: 'Lagoona Villa homepage: Experience life’s serendipity, with a booking form beside the headline' },
    gallery: [],
  },
  {
    slug: 'finexcel',
    title: 'FinExcel',
    summary: 'Corporate website for a financial consultancy in Banani, Dhaka.',
    description: [
      'Financial Excellence Limited (FinExcel) is a Dhaka financial consultancy offering advisory services, capacity building in banking, trade and capital markets, and advocacy through seminars and dialogues.',
      'The website introduces its services and board of directors, shares client success stories, a gallery and news, and invites businesses to start a consultation.',
    ],
    features: ['Services overview', 'Board of directors', 'News and gallery', 'Client success stories'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Financial services',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Financial Excellence Limited',
    liveUrl: 'https://finexcelbd.com/',
    cover: { src: finexcel, alt: 'FinExcel homepage: Your Most Trusted Financial Advisor' },
    gallery: [homepage(finexcelFull, 'FinExcel')],
  },
  {
    slug: 'sanzida-tonni',
    title: 'Advocate Sanzida Tonni',
    summary: 'Personal brand website for an advocate, television presenter and HR leader.',
    description: [
      'Sanzida Tonni is an advocate and member of the Supreme Court Bar Association, Bangladesh Bar Council and Dhaka Bar Association, as well as a television presenter and HR leader.',
      'The website sets out her practice areas — company, criminal and civil law — alongside her media work and leadership, and lets visitors schedule a consultation directly.',
    ],
    features: ['Practice area pages', 'Credentials and memberships', 'Media appearances', 'Consultation booking'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Legal',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Sanzida Tonni',
    liveUrl: 'https://sanzidatonni.com/',
    cover: { src: sanzida, alt: 'Sanzida Tonni homepage: I’m Advocate Sanzida Tonni, with a portrait and Schedule a Consultation button' },
    gallery: [homepage(sanzidaFull, 'Sanzida Tonni')],
  },
  {
    slug: 'resilienzkompass',
    title: 'Resilienzkompass',
    summary: 'German-language website for a resilience coaching studio in Zug, Switzerland.',
    description: [
      'Resilienzkompass helps people discover, develop and train personal resilience through workshops, tailored seminars and one-to-one coaching at its studio in Zug, Switzerland.',
      'The German-language website explains what resilience is, describes each offer, introduces the team and answers common questions, ending with an invitation to get in touch.',
    ],
    features: ['Workshops, seminars and coaching', 'About resilience', 'FAQs', 'Contact form'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Coaching',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Resilienzkompass',
    liveUrl: 'https://resilienzkompass.ch/',
    cover: { src: resilienz, alt: 'Resilienzkompass homepage with a Max Frisch quote over an aerial forest photograph' },
    gallery: [homepage(resilienzFull, 'Resilienzkompass')],
  },
  {
    slug: 'pickleball-trunk-show',
    title: 'Pickleball Trunk Show',
    summary: 'Website for a travelling pickleball pop-up shop that visits clubs and facilities.',
    description: [
      'Pickleball Trunk Show brings pickleball brands to clubs and facilities as a pop-up event, so players can try clothing, paddles, eyewear and accessories in person at a discount.',
      'The website showcases each featured brand with a short introduction and links, and invites facilities to book a trunk show through an enquiry form.',
    ],
    features: ['Featured brand showcase', 'Book a trunk show form', 'Event listings', 'FAQs'],
    categories: ['wordpress'],
    kind: 'Client website',
    industry: 'Sports retail',
    stack: ['WordPress', 'Elementor', 'Responsive design'],
    client: 'Pickleball Trunk Show',
    liveUrl: 'https://pickleballtrunkshow.com/',
    cover: { src: trunkShow, alt: 'Pickleball Trunk Show homepage: Get the Best Quality Pickleball Products at 20% Off' },
    gallery: [homepage(trunkShowFull, 'Pickleball Trunk Show', false)],
  },
  {
    slug: 'pickleball-certified-authentic',
    title: 'Pickleball Certified Authentic',
    summary: 'Next.js verification app for authenticated pickleball memorabilia.',
    description: [
      'Pickleball Certified Authentic authenticates pickleball memorabilia, working directly with athletes and fixing a tamper-evident hologram with a seven-digit serial number to every certified item.',
      'Collectors enter that serial number on the website to confirm their item is genuine and download a certificate of authenticity. The system began as a WordPress plugin and was rebuilt as a Next.js application with its own API routes.',
    ],
    contribution: [
      'Built the WordPress plugin: a custom database table, an admin screen for creating and editing certificates, and a REST API (cac/v1/certificates) with permission checks, sanitised input and prepared queries.',
      'Rebuilt the experience in Next.js with API routes for certificate lookup and PDF certificate generation using React PDF.',
      'Added a reCAPTCHA-protected contact flow that sends email through Nodemailer.',
    ],
    features: ['Serial-number verification', 'PDF certificate download', 'Admin management of certificates'],
    categories: ['fullstack', 'web'],
    kind: 'Client platform',
    industry: 'Sports memorabilia',
    stack: ['Next.js', 'React', 'WordPress', 'PHP', 'MySQL', 'REST API', 'React PDF', 'Nodemailer'],
    year: '2025',
    client: 'Pickleball Certified Authentic',
    liveUrl: 'https://pickleballcertifiedauthentic.com/',
    repoUrl: 'https://github.com/dgency/Pickleball-Certificate-Authenticator',
    links: [{ label: 'WordPress plugin source', href: 'https://github.com/CodeAnik/certificate-plugin' }],
    code: 'public',
    featured: true,
    cover: { src: certified, alt: 'Pickleball Certified Authentic homepage with a serial number search box' },
    gallery: [homepage(certifiedFull, 'Pickleball Certified Authentic')],
  },
  {
    slug: 'chashir-ponno',
    title: 'Chashir Ponno',
    summary: 'Bangla-language WooCommerce store for farm-fresh food in Bangladesh.',
    description: [
      'Chashir Ponno (চাষীর পণ্য) sells pure, farm-sourced food — mangoes, honey, ghee and oil, spices, nuts and dates — delivered to families across Bangladesh.',
      'The store is written in Bangla, with product variations by weight, quick view and “Buy now” buttons for fast checkout, and phone and WhatsApp ordering for customers who prefer to order by call.',
    ],
    features: ['Bangla-language storefront', 'Weight-based product variations', 'Quick view and Buy now', 'Phone and WhatsApp ordering'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Food & grocery',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'Chashir Ponno',
    liveUrl: 'https://chashirponno.com/',
    cover: { src: chashirPonno, alt: 'Chashir Ponno homepage with a Bangla headline and a photograph of mangoes' },
    gallery: [homepage(chashirPonnoFull, 'Chashir Ponno')],
  },
  {
    slug: 'decide-on-bd',
    title: 'DecideOn BD',
    summary: 'Online fashion store for western women’s clothing and bags in Bangladesh.',
    description: [
      'DecideOn BD is an online fashion store in Bangladesh selling western dresses, gowns, co-ord sets, skirts and bags for women.',
      'The WooCommerce store leads with a banner slider and new arrivals, and organises the range into clothing and bag collections with a quick path from browsing to cart.',
    ],
    features: ['New arrivals and collections', 'Clothing and bag categories', 'Cart and customer accounts', 'Banner slider'],
    categories: ['ecommerce', 'wordpress'],
    kind: 'Client website',
    industry: 'Fashion',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
    client: 'DecideOn BD',
    liveUrl: 'https://decideonbd.com/',
    cover: { src: decideOn, alt: 'DecideOn BD homepage: Style That Speaks You, with a clothing rail and Shop Collection button' },
    gallery: [homepage(decideOnFull, 'DecideOn BD')],
  },

  // GitHub work: public repositories, shown with typographic code covers.
  {
    slug: 'supgent-website',
    title: 'SupGent Website',
    summary: 'Next.js 16 marketing site for an AI customer-support platform, with a hardened lead-form API.',
    description: [
      'SupGent is an AI-native customer support operations platform. This repository is its public marketing website; the product dashboard lives in a separate application.',
      'The site explains the product with animated diagrams, a scripted demo chat and an integrations map, and routes every sales, demo and contact request through one secure lead endpoint that delivers email over Zoho Mail SMTP.',
    ],
    contribution: [
      'Built the site on the Next.js 16 App Router with React, TypeScript, Tailwind CSS 4 and Motion, including light, dark and system themes applied before first paint.',
      'Wrote one shared lead form, validator and POST /api/leads route for the home page form, the sales dialog and the contact page.',
      'Hardened the endpoint: server-side validation, cross-site post rejection, body size limits, a honeypot and minimum fill time, per-client rate limiting and escaped email bodies.',
      'Routed demo and plan requests to sales and everything else to support, with the visitor as Reply-To and a clear fallback message when mail is not configured.',
    ],
    features: ['Animated product diagrams and system map', 'Scripted demo chat', 'Sales dialog and contact forms', 'Spam-resistant lead API'],
    categories: ['fullstack', 'web'],
    kind: 'Web application',
    industry: 'SaaS · Customer support',
    stack: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS 4', 'Motion', 'Nodemailer', 'Zoho SMTP'],
    year: '2026',
    liveUrl: 'https://supgent.com/',
    repoUrl: 'https://github.com/CodeAnik/SupGent-Client',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'escape-room-marketer-2',
    title: 'Escape Room Marketer 2.0',
    summary: 'Next.js App Router front end with a Strapi and PostgreSQL headless CMS behind it.',
    description: [
      'Version 2.0 of the Escape Room Marketer platform splits the agency website into a Next.js front end and a Strapi headless CMS, so the team can publish services, case studies, blog posts, careers and location pages without a developer.',
      'The CMS also models the escape-room side of the business — a games directory by country and city, BookingMax content and a news feed — alongside lead forms for free marketing plans, demo calls and client calls.',
    ],
    contribution: [
      'Built the Next.js App Router front end with dynamic routes for services, case studies, blog posts, locations and escape rooms, using Redux Toolkit for shared state.',
      'Set up the Strapi CMS on PostgreSQL with content types for services, case studies, blog, careers, FAQs, countries, cities, games and the news feed.',
      'Added SEO and rich-text editing to the CMS through the Strapi SEO and CKEditor plugins.',
      'Built animated sections with GSAP, Framer Motion and Lenis smooth scrolling, and lead forms with phone-number validation that send email through Nodemailer.',
    ],
    features: ['Content managed in Strapi', 'Escape room directory by location', 'Case studies, blog and careers', 'Marketing plan and demo call forms'],
    categories: ['fullstack', 'web'],
    kind: 'Client platform',
    industry: 'Marketing agency',
    stack: ['Next.js', 'React', 'Strapi', 'PostgreSQL', 'Redux Toolkit', 'GSAP', 'Tailwind CSS', 'Nodemailer'],
    year: '2025',
    client: 'Escape Room Marketer',
    repoUrl: 'https://github.com/dgency/ERM2.0-Client',
    links: [{ label: 'Strapi CMS source', href: 'https://github.com/dgency/ERM2.0-Backend' }],
    code: 'public',
    gallery: [],
  },
  {
    slug: 'headless-woocommerce-storefront',
    title: 'Headless WooCommerce Storefront',
    summary: 'React and TypeScript storefront that uses WordPress and WooCommerce as a headless backend.',
    description: [
      'A reusable e-commerce front end that keeps WordPress and WooCommerce as the back office — products, orders, shipping and menus — while customers use a fast React single-page app.',
    ],
    contribution: [
      'Built typed React hooks over the WooCommerce REST API for products, categories, orders, customer addresses, shipping zones and methods, currency and wishlists.',
      'Wrote a custom WordPress REST endpoint in PHP to expose navigation menus to the front end.',
      'Implemented WordPress-backed customer sign-in through a Supabase Edge Function.',
      'Used TanStack Query for caching and request state, with shadcn/ui and Tailwind CSS for the interface.',
    ],
    features: ['Cart and wishlist', 'Customer accounts and order history', 'Shipping zones and currency from WooCommerce', 'Menus managed in WordPress'],
    categories: ['fullstack', 'ecommerce', 'wordpress'],
    kind: 'Web application',
    industry: 'E-commerce',
    stack: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'WooCommerce REST API', 'Supabase Edge Functions', 'Tailwind CSS'],
    year: '2025',
    repoUrl: 'https://github.com/dgency/E-Commerce-Template-Wordpress-to-ReactJS-',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'woocommerce-plugins',
    title: 'Custom WooCommerce & WordPress Plugins',
    summary: 'Client plugins for tiered pricing, registration approval, checkout automation, shipping rules, availability calendars and AJAX filtering.',
    description: [
      'A set of plugins written for client stores and sites at Dgency, each one handling a business rule that off-the-shelf plugins didn’t cover.',
    ],
    contribution: [
      'Advanced Quantity Pricing: per-unit and fixed-total price tiers per product, recalculated in the cart through woocommerce_before_calculate_totals, with a pricing table on the product page.',
      'User Approval: a WooCommerce registration approval workflow that syncs existing users on activation and adds an admin dashboard for approving accounts.',
      'Custom Login, Register & Approval: front-end login and registration with address fields, held for admin approval before the account can sign in.',
      'Custom registration with checkout auto-fill: registration fields that pre-fill the WooCommerce checkout.',
      'Free-shipping rules: free shipping once an order reaches two or more jars, based on shipping zone, removing conflicting shipping methods.',
      'Service Availability Calendar: an admin screen for availability entries by month and year, shown on any page with a shortcode — including a variant for a Tampa room-rental site.',
      'ACF Property Filter: a shortcode-driven AJAX filter over ACF fields and taxonomies, secured with nonces and sanitised input.',
    ],
    categories: ['wordpress', 'ecommerce'],
    kind: 'Plugin suite',
    industry: 'E-commerce',
    stack: ['PHP', 'WordPress', 'WooCommerce', 'ACF', 'AJAX', 'MySQL'],
    year: '2025',
    links: [
      { label: 'Quantity pricing', href: 'https://github.com/CodeAnik/Products-buying-offer-for-hygeena' },
      { label: 'User approval', href: 'https://github.com/CodeAnik/user-approval' },
      { label: 'Login, register & approval', href: 'https://github.com/CodeAnik/Custom-Login-Register-and-User-Approval' },
      { label: 'Checkout auto-fill', href: 'https://github.com/CodeAnik/Woo-Commerce-Custom-Register-and-Checkout-form-with-Auto-Fill-in-Checkout' },
      { label: 'Free-shipping rules', href: 'https://github.com/CodeAnik/dgency-free-shipping-calculator' },
      { label: 'Availability calendar', href: 'https://github.com/CodeAnik/service-availability-calendar' },
      { label: 'Availability calendar (Tampa)', href: 'https://github.com/CodeAnik/service-availability-calendar-tampa' },
      { label: 'ACF property filter', href: 'https://github.com/CodeAnik/ACF-Property-Field-Filter' },
    ],
    code: 'public',
    gallery: [],
  },
  {
    slug: 'sebedesk-healthcare-booking',
    title: 'SebeDesk Healthcare Booking',
    summary: 'Bilingual Next.js front end for finding doctors and hospitals and booking appointments.',
    description: [
      'SebeDesk is a healthcare booking front end in Bangla and English. Patients browse doctors and hospitals, book appointments and manage their account. The data layer currently uses typed mock data, ready to be swapped for an API.',
    ],
    contribution: [
      'Built the Next.js App Router structure with locale-based routing in Bangla and English using next-intl and middleware.',
      'Implemented doctor and hospital directories, a booking flow and a patient account area for appointments, payments, prescriptions and saved doctors.',
      'Built forms with React Hook Form and Zod validation, and reusable UI with shadcn/ui and Tailwind CSS.',
      'Planned the rebuild with a prompt-driven architecture analysis of the previous front end before migrating to Next.js.',
    ],
    categories: ['web'],
    kind: 'Web application',
    industry: 'Healthcare',
    stack: ['Next.js', 'TypeScript', 'next-intl', 'React Hook Form', 'Zod', 'Tailwind CSS'],
    year: '2026',
    repoUrl: 'https://github.com/CodeAnik/SebeDesk-Client',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'ecommerce-admin-dashboard',
    title: 'E-commerce Admin Dashboard',
    summary: 'React and TypeScript store with an admin dashboard for products, orders, customers, coupons and analytics.',
    description: [
      'A storefront and back-office app built with Lovable, an AI app builder. The admin side manages products, orders, customers, coupons, users and store settings, with analytics charts and data import and export.',
    ],
    contribution: [
      'Storefront, customer dashboard and admin areas with role-based routing.',
      'Admin tools: product and user forms, order and customer detail pages, coupons, analytics charts (Recharts) and CSV/Excel import and export.',
      'Store settings panels for the homepage, policies, reviews and presets, with a rich text editor (Tiptap) and media uploads.',
    ],
    categories: ['web', 'ecommerce'],
    kind: 'Web application',
    industry: 'E-commerce',
    stack: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'shadcn/ui', 'Recharts', 'Lovable'],
    year: '2026',
    repoUrl: 'https://github.com/CodeAnik/my-ecommerce-hub',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'vdesh-study-abroad',
    title: 'Vdesh Study Abroad & Visa Platform',
    summary: 'Next.js website for a study-abroad, visa and overseas work consultancy.',
    description: [
      'Vdesh helps students and workers go abroad. The website covers study destinations, visa services and overseas work, with team, testimonial and FAQ pages and step-by-step enquiry forms.',
    ],
    contribution: [
      'Built the Next.js App Router site with separate sections for study, visa and work programmes.',
      'Created multi-step enquiry forms with React Hook Form, Yup validation and international phone-number input, sending email through a Nodemailer API route.',
      'Organised data fetching in a service layer over Axios, with shared state in React context and reducers.',
      'Built the interface with Radix UI primitives, Tailwind CSS and Swiper carousels.',
    ],
    features: ['Study, visa and work programme pages', 'Multi-step enquiry forms', 'Team and testimonials', 'FAQs'],
    categories: ['web'],
    kind: 'Client website',
    industry: 'Education & immigration',
    stack: ['Next.js', 'React', 'React Hook Form', 'Yup', 'Radix UI', 'Axios', 'Tailwind CSS'],
    year: '2025',
    client: 'Vdesh',
    repoUrl: 'https://github.com/dgency/Vdesh-Client',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'hamiduzjaman-portfolio',
    title: 'H M Hamiduzjaman Portfolio',
    summary: 'Next.js personal website and blog with year and category archives and call scheduling.',
    description: [
      'A personal brand website for H M Hamiduzjaman, combining a profile, a blog with year and category archives, a news feed and a page for scheduling a call.',
    ],
    contribution: [
      'Built the Next.js App Router site with dynamic routes for blog posts, year archives and categories.',
      'Added a schedule-a-call form with validation and phone-number input that sends email through a Nodemailer API route.',
      'Used Next.js image optimisation with Cloudinary-hosted media, infinite scroll and animated number counters.',
    ],
    features: ['Blog with year and category archives', 'Schedule a call form', 'News feed', 'Profile and site map'],
    categories: ['web'],
    kind: 'Client website',
    industry: 'Personal brand',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Nodemailer', 'Cloudinary'],
    year: '2025',
    client: 'H M Hamiduzjaman',
    liveUrl: 'https://hamiduzjaman.com/',
    repoUrl: 'https://github.com/dgency/HMHamiduzjaman',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'crab-lab-website',
    title: 'CRAB Lab Website',
    summary: 'React and Firebase website for a computational AI research lab in Bangladesh.',
    description: [
      'CRAB Lab (Computational Research Alliance Bangladesh Lab) works on AI research for Bangla and other low-resource languages, curates datasets and publishes open models. Its website presents the lab’s research, services and partnerships.',
    ],
    contribution: [
      'Built the single-page React app with Vite and React Router, with content kept in separate config and content files so it can be updated without touching components.',
      'Connected Firebase for the site’s backend services and added toast notifications with React Toastify.',
      'Styled the site with Tailwind CSS.',
    ],
    features: ['Research and services pages', 'Datasets and models', 'Content separated from components', 'Firebase backend'],
    categories: ['web'],
    kind: 'Client website',
    industry: 'AI research',
    stack: ['React', 'Vite', 'React Router', 'Firebase', 'Tailwind CSS'],
    year: '2026',
    client: 'CRAB Lab',
    repoUrl: 'https://github.com/CodeAnik/CrabLabs-Client',
    code: 'public',
    gallery: [],
  },
  {
    slug: 'escape-room-website-template',
    title: 'Escape Room Website Template',
    summary: 'Reusable Next.js website template for escape room businesses, first used for Project Minotaur.',
    description: [
      'A reusable Next.js website template for escape room venues, set up here for Project Minotaur Escape Room with a special-incentive offer page and a contact page.',
    ],
    contribution: [
      'Built the template on the Next.js App Router with reusable navbar, footer, button and page-section components.',
      'Managed shared state with Redux Toolkit and built image carousels with Swiper.',
    ],
    features: ['Reusable page sections', 'Image carousels', 'Special-incentive offer page', 'Contact page'],
    categories: ['web'],
    kind: 'Web application',
    industry: 'Entertainment',
    stack: ['Next.js', 'React', 'Redux Toolkit', 'Swiper', 'Tailwind CSS'],
    year: '2025',
    repoUrl: 'https://github.com/dgency/ER-Template',
    code: 'public',
    gallery: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const clientProjects = projects.filter((p) => p.kind === 'Client website' || p.kind === 'Client platform');
export const liveClientSites = clientProjects.filter((p) => p.liveUrl);

export function categoryLabel(id: ProjectCategory): string {
  return projectCategories.find((c) => c.id === id)?.label ?? id;
}
