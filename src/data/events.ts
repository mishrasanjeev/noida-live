import type { NoidaEvent } from '../types';

export const events: NoidaEvent[] = [
  {
    id: 'basant-mela',
    name: 'Basant Mela — Kite Festival',
    type: 'Cultural',
    month: 'February',
    dateRange: 'Feb 14–16 (Annual)',
    location: 'Noida Stadium & Exhibition Grounds',
    sector: 'Sector 21',
    description:
      'Noida\'s most beloved spring festival celebrating Basant Panchami with thousands of kites filling the sky. The event features competitive kite-flying, folk music, local food stalls, and traditional crafts. Families from across NCR flock to this vibrant celebration marking the arrival of spring.',
    imageUrl:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Competitive kite-flying contests',
      'Folk music & cultural performances',
      'Traditional food stalls',
      'Handicraft exhibitions',
      'Free entry for children under 12',
    ],
    isFeatured: true,
  },
  {
    id: 'holi-milan',
    name: 'Holi Milan Samaroh',
    type: 'Cultural',
    month: 'March',
    dateRange: 'Day of Holi (Full day)',
    location: 'Sector 12 Community Grounds',
    sector: 'Sector 12',
    description:
      'Noida\'s grand Holi celebration brings the city together in a riot of colours. Organised by the Noida Authority, the event features organic colour play, live Bollywood music, DJs, and a massive cultural programme. GNIDA organises special events across sectors.',
    imageUrl:
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Organic & eco-friendly colours',
      'Live Bollywood & folk music',
      'DJ nights post-celebration',
      'Special children\'s play zones',
      'Arranged across 50+ sectors',
    ],
    isFeatured: false,
  },
  {
    id: 'diwali-mela',
    name: 'Diwali Mela & Fireworks',
    type: 'Cultural',
    month: 'October',
    dateRange: 'Oct–Nov (5 days around Diwali)',
    location: 'DPS Ground & Sector 38 Grounds',
    sector: 'Sector 30',
    description:
      'The Diwali Mela transforms Noida into a city of lights with spectacular fireworks, cultural programmes, and a grand mela featuring artisans from across UP. Markets are decked with diyas and LEDs, and the event culminates in a breathtaking fireworks display over the expressway.',
    imageUrl:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Grand fireworks over the expressway',
      'Artisan mela with UP handicrafts',
      'Ram Lila performances',
      'Sweet & mithai stalls',
      'Sector-wise decoration contests',
    ],
    isFeatured: false,
  },
  {
    id: 'navratri-garba',
    name: 'Navratri Garba Mahotsav',
    type: 'Religious',
    month: 'October',
    dateRange: 'Nine nights of Navratri',
    location: 'Brahmaputra Market Grounds, Multiple Venues',
    sector: 'Sector 29',
    description:
      'Nine nights of devotional dance, music, and worship celebrating the nine forms of Goddess Durga. Noida hosts one of NCR\'s largest Garba events with professional Garba troupes from Gujarat, dandiya dancing, and spectacular goddess idol displays.',
    imageUrl:
      'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Professional Garba from Gujarat',
      'Dandiya nights with DJ',
      'Durga Mata idol processions',
      '9-night cultural programme',
      'Traditional food & prasad',
    ],
    isFeatured: false,
  },
  {
    id: 'noida-mahotsav',
    name: 'Noida Mahotsav',
    type: 'Cultural',
    month: 'November',
    dateRange: 'Nov 17–25 (Annual, 8 days)',
    location: 'Noida Stadium Complex',
    sector: 'Sector 21',
    description:
      'The flagship cultural festival of Noida organised by the Noida Authority celebrates the city\'s founding anniversary with classical music, dance, theatre, art exhibitions, and a grand industrial trade fair. Top Bollywood artists and classical maestros perform every year.',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Classical music & dance recitals',
      'Bollywood celebrity performances',
      'Trade & industrial exhibition',
      'Art gallery & photography show',
      'Food festival with 200+ stalls',
    ],
    isFeatured: true,
  },
  {
    id: 'noida-marathon',
    name: 'Noida International Marathon',
    type: 'Sports',
    month: 'December',
    dateRange: 'First Sunday of December',
    location: 'Noida-Greater Noida Expressway',
    sector: 'Sector 18 Start Point',
    description:
      'One of NCR\'s premier running events with categories ranging from 5K to full 42.2K marathon along the scenic Noida-Greater Noida Expressway. The event attracts elite runners from across India and thousands of amateur participants from the city.',
    imageUrl:
      'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=800&auto=format&fit=crop&q=80',
    highlights: [
      '5K, 10K, 21K & 42K categories',
      'Elite & amateur divisions',
      'Scenic expressway route',
      'Finisher medals & certificates',
      '15,000+ registered runners',
    ],
    isFeatured: false,
  },
  {
    id: 'auto-expo',
    name: 'Auto Expo — Motor Show',
    type: 'Commercial',
    month: 'February',
    dateRange: 'Feb (Biennial, even years)',
    location: 'India Expo Centre & Mart',
    sector: 'Greater Noida (30 min from Noida)',
    description:
      'Asia\'s largest motor show held at the India Expo Centre, Greater Noida draws millions of visitors. All major global and Indian auto brands unveil new models, concept cars, EVs, and two-wheelers. The expo is easily accessible from Noida via the expressway.',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Asia\'s largest motor show',
      'EV & future mobility zone',
      'World premieres & concept cars',
      '30 min from central Noida',
      '5 million visitors per edition',
    ],
    isFeatured: false,
  },
  {
    id: 'food-festival',
    name: 'Noida Food Festival',
    type: 'Food',
    month: 'January',
    dateRange: 'Jan 10–15 (Annual)',
    location: 'Sector 38A Grounds',
    sector: 'Sector 38A',
    description:
      'A curated food festival celebrating the culinary diversity of Noida and greater India. Over 150 food stalls from street food to gourmet, live cooking shows by celebrity chefs, and a dedicated craft beer & cocktails zone make this a must-visit for food lovers.',
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
    highlights: [
      '150+ food stalls across cuisines',
      'Celebrity chef cook-off',
      'UP street food zone',
      'Craft beer & cocktail lounge',
      'Live music evenings',
    ],
    isFeatured: false,
  },
];
