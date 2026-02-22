import type { ITpark } from '../types';

export const itparks: ITpark[] = [
  {
    id: 'itp-1',
    name: 'Sector 62 IT Hub',
    type: 'IT Park',
    location: 'Sector 62, Noida',
    sector: 'Sector 62',
    totalArea: '~150 acres',
    majorCompanies: ['HCL Technologies', 'Adobe', 'Samsung R&D', 'Sapient', 'Mphasis'],
    rating: 4.3,
    description:
      'Noida\'s oldest and most established IT cluster, home to global tech giants and MNCs. Excellent metro connectivity via the Blue Line and dense support ecosystem.',
    highlights: ['Blue Line Metro station nearby', 'Mature ecosystem', 'Multiple tech parks', 'High talent density'],
  },
  {
    id: 'itp-2',
    name: 'Sector 63 Tech Corridor',
    type: 'IT Park',
    location: 'Sector 63, Noida',
    sector: 'Sector 63',
    totalArea: '~80 acres',
    majorCompanies: ['Infosys BPO', 'EXL Service', 'WNS Global', 'Concentrix', 'Genpact'],
    rating: 4.1,
    description:
      'Adjacent to Sector 62, this corridor is dominated by IT-enabled services and BPO companies. Large workforce with abundant food, transport, and housing options nearby.',
    highlights: ['BPO & ITES hub', 'Round-the-clock operations', 'Large campus options', 'On Noida-GN Expressway'],
  },
  {
    id: 'itp-3',
    name: 'NSEZ (Noida Special Economic Zone)',
    type: 'SEZ',
    location: 'Sector 81, Noida',
    sector: 'Sector 81',
    totalArea: '~310 acres',
    majorCompanies: ['Moser Baer', 'LG Electronics', 'Sony India', 'Flextronics', 'Samtel'],
    rating: 4.0,
    description:
      'One of India\'s premier export-oriented SEZs, NSEZ hosts IT, electronics, and engineering units with single-window clearances and duty exemptions.',
    highlights: ['Export-oriented units', 'Duty exemptions', 'World-class infrastructure', 'Customs bonded area'],
  },
  {
    id: 'itp-4',
    name: 'Sector 125 Tech Zone',
    type: 'Tech Hub',
    location: 'Sector 125, Noida',
    sector: 'Sector 125',
    totalArea: '~50 acres',
    majorCompanies: ['Publicis Sapient', 'Nagarro', 'GlobalLogic', 'Barclays Tech', 'Nielsen'],
    rating: 4.2,
    description:
      'A modern tech zone alongside the Noida Expressway, dominated by product engineering, analytics, and financial services firms. Proximity to Amity University fuels talent pipeline.',
    highlights: ['Expressway frontage', 'Product engineering focus', 'Amity University talent pool', 'Modern Grade A offices'],
  },
  {
    id: 'itp-5',
    name: 'Sector 132 IT Park',
    type: 'IT Park',
    location: 'Sector 132, Noida',
    sector: 'Sector 132',
    totalArea: '~40 acres',
    majorCompanies: ['Newgen Software', 'NIIT Technologies', 'Impetus Technologies', 'To The New'],
    rating: 4.0,
    description:
      'Growing IT cluster along the Noida Expressway with a mix of mid-size product and services companies. Well-connected via Aqua Line metro at Sector 137.',
    highlights: ['Aqua Line metro nearby', 'Growing ecosystem', 'Mid-size company focus', 'Affordable Grade A space'],
  },
  {
    id: 'itp-6',
    name: 'Advant Navis Business Park',
    type: 'Tech Hub',
    location: 'Sector 142, Noida',
    sector: 'Sector 142',
    totalArea: '~30 acres',
    majorCompanies: ['Ericsson', 'Lenskart', 'Paytm', 'Cars24', 'Naukri (Info Edge)'],
    rating: 4.4,
    description:
      'Premium Grade A campus at the southern end of the Noida Expressway, popular with new-age tech companies and startups. Direct Aqua Line metro access.',
    highlights: ['Grade A campus', 'Startup & unicorn hub', 'Aqua Line metro station', 'LEED-certified buildings'],
  },
];
