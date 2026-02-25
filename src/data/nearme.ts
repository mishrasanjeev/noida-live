import type { NearMePlace } from '../types';

export function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export const parkingPlaces: NearMePlace[] = [
  { id: 'p1',  name: 'Sector 18 Metro Multilevel Parking',  address: 'Near Metro Station, Sector 18',            sector: 'Sector 18',   lat: 28.5693, lng: 77.3213, hours: '5 AM – 11 PM' },
  { id: 'p2',  name: 'Great India Place Parking',            address: 'GIP Mall, Sector 38A',                    sector: 'Sector 38A',  lat: 28.5591, lng: 77.3421, hours: '10 AM – 11 PM' },
  { id: 'p3',  name: 'Gardens Galleria Parking',             address: 'Logix City Centre, Sector 32',            sector: 'Sector 32',   lat: 28.5582, lng: 77.3405, hours: '10 AM – 10 PM' },
  { id: 'p4',  name: 'DLF Mall of India Parking',            address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.5649, lng: 77.3156, hours: '10 AM – 11 PM' },
  { id: 'p5',  name: 'Atta Market Parking',                  address: 'Atta Market, Sector 27',                  sector: 'Sector 27',   lat: 28.5609, lng: 77.3275, hours: '6 AM – 10 PM' },
  { id: 'p6',  name: 'Brahmaputra Market Parking',           address: 'Brahmaputra Market, Sector 29',           sector: 'Sector 29',   lat: 28.5573, lng: 77.3315, hours: '6 AM – 10 PM' },
  { id: 'p7',  name: 'Sector 62 IT Hub Parking',             address: 'Near Unitech Infospace, Sector 62',       sector: 'Sector 62',   lat: 28.614,  lng: 77.3641, hours: '8 AM – 10 PM' },
  { id: 'p8',  name: 'Spice World Mall Parking',             address: 'Spice World Mall, Sector 25A',            sector: 'Sector 25A',  lat: 28.5677, lng: 77.3245, hours: '10 AM – 11 PM' },
  { id: 'p9',  name: 'Sector 50 Market Parking',             address: 'Main Market, Sector 50',                  sector: 'Sector 50',   lat: 28.5663, lng: 77.3848, hours: '8 AM – 10 PM' },
  { id: 'p10', name: 'Sector 15 Community Parking',          address: 'A-Block, Sector 15',                      sector: 'Sector 15',   lat: 28.5875, lng: 77.3205, hours: '6 AM – 10 PM' },
  { id: 'p11', name: 'Sector 76 Shopping Complex Parking',   address: 'Near Mahagun Moderne, Sector 76',         sector: 'Sector 76',   lat: 28.5944, lng: 77.3803, hours: '8 AM – 10 PM' },
  { id: 'p12', name: 'Gaur City Mall Parking',               address: 'Gaur City Mall, Sector 137',              sector: 'Sector 137',  lat: 28.5091, lng: 77.4096, hours: '10 AM – 10 PM' },
];

export const gymPlaces: NearMePlace[] = [
  { id: 'g1',  name: 'Cult.fit Sector 18',                   address: 'Block E, Sector 18',                      sector: 'Sector 18',   lat: 28.57,   lng: 77.321,  phone: '1800-123-2858', hours: '6 AM – 10 PM' },
  { id: 'g2',  name: "Gold's Gym Noida",                     address: 'Sector 18 Market',                        sector: 'Sector 18',   lat: 28.5695, lng: 77.3205, phone: '0120-4567890',  hours: '5:30 AM – 11 PM' },
  { id: 'g3',  name: 'Anytime Fitness Sector 62',            address: 'H-134, Sector 63',                        sector: 'Sector 63',   lat: 28.6138, lng: 77.3643, phone: '0120-4234567',  hours: '24 Hours' },
  { id: 'g4',  name: 'Fitness First Sector 50',              address: 'Wave Silver Tower, Sector 18',            sector: 'Sector 50',   lat: 28.5658, lng: 77.3854, phone: '0120-4123456',  hours: '6 AM – 11 PM' },
  { id: 'g5',  name: 'Noida Sports Stadium Gym',             address: 'Noida Sports Complex, Sector 21',         sector: 'Sector 21',   lat: 28.5773, lng: 77.3389, phone: '0120-2422237',  hours: '6 AM – 9 PM' },
  { id: 'g6',  name: 'Talwalkars Fitness Sector 44',         address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5644, lng: 77.3597, phone: '0120-4567123',  hours: '6 AM – 10 PM' },
  { id: 'g7',  name: 'Body Power Gym Sector 15',             address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.5868, lng: 77.32,   hours: '5 AM – 10 PM' },
  { id: 'g8',  name: 'SynFlex Fitness Sector 137',           address: 'Logix Blossom County, Sector 137',        sector: 'Sector 137',  lat: 28.509,  lng: 77.41,   hours: '6 AM – 10 PM' },
  { id: 'g9',  name: 'Cult.fit Sector 50',                   address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5659, lng: 77.3853, phone: '1800-123-2858', hours: '6 AM – 10 PM' },
  { id: 'g10', name: 'Snap Fitness Sector 76',               address: 'Mahagun Mart, Sector 76',                 sector: 'Sector 76',   lat: 28.5942, lng: 77.3811, hours: '24 Hours' },
  { id: 'g11', name: 'Fit & Flex Sector 12',                 address: 'B-Block Market, Sector 12',               sector: 'Sector 12',   lat: 28.5784, lng: 77.3188, hours: '5 AM – 11 PM' },
  { id: 'g12', name: 'PowerFit Gym Sector 44',               address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5641, lng: 77.3601, hours: '6 AM – 10 PM' },
];

export const petrolPlaces: NearMePlace[] = [
  { id: 'f1',  name: 'HPCL Petrol Pump Sector 18',           address: 'Atta Market Road, Sector 18',             sector: 'Sector 18',   lat: 28.5699, lng: 77.322,  hours: '24 Hours' },
  { id: 'f2',  name: 'Indian Oil Sector 44',                  address: 'Main Road, Sector 44',                    sector: 'Sector 44',   lat: 28.5644, lng: 77.3594, hours: '24 Hours' },
  { id: 'f3',  name: 'Bharat Petroleum Sector 62',            address: 'IT Hub Road, Sector 62',                  sector: 'Sector 62',   lat: 28.6143, lng: 77.3636, hours: '24 Hours' },
  { id: 'f4',  name: 'HP Petrol Pump Sector 12',              address: 'Block B, Sector 12',                      sector: 'Sector 12',   lat: 28.5785, lng: 77.3192, hours: '6 AM – 11 PM' },
  { id: 'f5',  name: 'Indian Oil Sector 15',                  address: 'Shopping Complex, Sector 15',             sector: 'Sector 15',   lat: 28.5868, lng: 77.3195, hours: '24 Hours' },
  { id: 'f6',  name: 'Shell Petrol Station Sector 50',        address: 'Crossing Republik Road, Sector 50',       sector: 'Sector 50',   lat: 28.5658, lng: 77.3851, hours: '6 AM – 11 PM' },
  { id: 'f7',  name: 'HPCL Sector 137',                       address: 'Noida-Greater Noida Expressway, Sector 137', sector: 'Sector 137', lat: 28.5091, lng: 77.4102, hours: '24 Hours' },
  { id: 'f8',  name: 'Bharat Petroleum Sector 76',            address: 'Main Road, Sector 76',                    sector: 'Sector 76',   lat: 28.5941, lng: 77.3811, hours: '24 Hours' },
  { id: 'f9',  name: 'Indian Oil Sector 50',                  address: 'Main Road, Sector 50',                    sector: 'Sector 50',   lat: 28.5655, lng: 77.3849, hours: '24 Hours' },
  { id: 'f10', name: 'HPCL Sector 27',                        address: 'Atta Market Road, Sector 27',             sector: 'Sector 27',   lat: 28.5609, lng: 77.3273, hours: '24 Hours' },
  { id: 'f11', name: 'Bharat Petroleum Sector 29',            address: 'Brahmaputra Market Road, Sector 29',      sector: 'Sector 29',   lat: 28.5574, lng: 77.3318, hours: '24 Hours' },
  { id: 'f12', name: 'Indian Oil Expressway Sector 135',      address: 'Noida–Greater Noida Expressway, Sector 135', sector: 'Sector 135', lat: 28.5089, lng: 77.3963, hours: '24 Hours' },
];

export const medicalPlaces: NearMePlace[] = [
  { id: 'm1',  name: 'Apollo Pharmacy Sector 18',            address: 'E-Block Market, Sector 18',               sector: 'Sector 18',   lat: 28.5692, lng: 77.3211, phone: '1860-500-1066', hours: '8 AM – 10 PM' },
  { id: 'm2',  name: 'MedPlus Pharmacy Sector 44',           address: 'Niti Khand Shopping Complex, Sector 44',  sector: 'Sector 44',   lat: 28.5642, lng: 77.3599, phone: '040-67006700',  hours: '8 AM – 10 PM' },
  { id: 'm3',  name: 'Tata 1mg Store Sector 62',             address: 'H-Block, Sector 62',                      sector: 'Sector 62',   lat: 28.6137, lng: 77.3645, phone: '1800-891-1933', hours: '9 AM – 9 PM' },
  { id: 'm4',  name: 'Apollo Pharmacy Sector 50',            address: 'Amrapali Silicon City, Sector 76',        sector: 'Sector 50',   lat: 28.5661, lng: 77.3852, phone: '1860-500-1066', hours: '8 AM – 10 PM' },
  { id: 'm5',  name: 'Apollo Pharmacy Sector 15',            address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.5863, lng: 77.3203, phone: '1860-500-1066', hours: '8 AM – 10 PM' },
  { id: 'm6',  name: 'Wellness Forever Sector 137',          address: 'Gaur City Mall, Sector 137',              sector: 'Sector 137',  lat: 28.5089, lng: 77.4099, hours: '9 AM – 9 PM' },
  { id: 'm7',  name: 'Jan Aushadhi Kendra Sector 27',        address: 'Community Centre, Sector 27',             sector: 'Sector 27',   lat: 28.561,  lng: 77.3272, hours: '9 AM – 6 PM' },
  { id: 'm8',  name: 'MedPlus Pharmacy Sector 76',           address: 'Amrapali Leisure Valley, Sector 76',      sector: 'Sector 76',   lat: 28.5938, lng: 77.3814, phone: '040-67006700',  hours: '8 AM – 10 PM' },
  { id: 'm9',  name: 'PharmEasy Store Sector 62',            address: 'H-Block, Sector 62',                      sector: 'Sector 62',   lat: 28.614,  lng: 77.3641, phone: '080-46863333',  hours: '9 AM – 9 PM' },
  { id: 'm10', name: 'Netmeds Store Sector 50',              address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5662, lng: 77.3851, hours: '9 AM – 9 PM' },
  { id: 'm11', name: 'MedPlus Sector 12',                    address: 'B-Block Market, Sector 12',               sector: 'Sector 12',   lat: 28.5786, lng: 77.3189, phone: '040-67006700',  hours: '8 AM – 10 PM' },
  { id: 'm12', name: 'Jan Aushadhi Kendra Sector 62',        address: 'H-Block Community Centre, Sector 62',     sector: 'Sector 62',   lat: 28.6138, lng: 77.3638, hours: '9 AM – 6 PM' },
];

export const atmPlaces: NearMePlace[] = [
  { id: 'a1',  name: 'SBI ATM Sector 18',                    address: 'E-Block, Sector 18 Market',               sector: 'Sector 18',   lat: 28.5696, lng: 77.3208, hours: '24 Hours' },
  { id: 'a2',  name: 'HDFC Bank ATM Sector 44',              address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5641, lng: 77.3601, hours: '24 Hours' },
  { id: 'a3',  name: 'ICICI Bank ATM Sector 62',             address: 'IT Park Road, Sector 62',                 sector: 'Sector 62',   lat: 28.6142, lng: 77.364,  hours: '24 Hours' },
  { id: 'a4',  name: 'Axis Bank ATM Sector 50',              address: 'Wave Silver Tower, Sector 18',            sector: 'Sector 50',   lat: 28.5662, lng: 77.3849, hours: '24 Hours' },
  { id: 'a5',  name: 'PNB ATM Sector 15',                    address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.5866, lng: 77.3197, hours: '24 Hours' },
  { id: 'a6',  name: 'Kotak Mahindra ATM Sector 27',         address: 'Atta Market, Sector 27',                  sector: 'Sector 27',   lat: 28.5607, lng: 77.3279, hours: '24 Hours' },
  { id: 'a7',  name: 'Bank of Baroda ATM Sector 76',         address: 'Main Road, Sector 76',                    sector: 'Sector 76',   lat: 28.594,  lng: 77.3808, hours: '24 Hours' },
  { id: 'a8',  name: 'Yes Bank ATM Sector 137',              address: 'Expressway, Sector 137',                  sector: 'Sector 137',  lat: 28.5093, lng: 77.4097, hours: '24 Hours' },
  { id: 'a9',  name: 'HDFC Bank ATM Sector 76',              address: 'Main Road, Sector 76',                    sector: 'Sector 76',   lat: 28.5939, lng: 77.381,  hours: '24 Hours' },
  { id: 'a10', name: 'SBI ATM Sector 62',                    address: 'IT Park Road, Sector 62',                 sector: 'Sector 62',   lat: 28.6141, lng: 77.3642, hours: '24 Hours' },
  { id: 'a11', name: 'Canara Bank ATM Sector 12',            address: 'B-Block, Sector 12',                      sector: 'Sector 12',   lat: 28.5785, lng: 77.3187, hours: '24 Hours' },
  { id: 'a12', name: 'Union Bank ATM Sector 29',             address: 'Brahmaputra Market, Sector 29',           sector: 'Sector 29',   lat: 28.5574, lng: 77.3314, hours: '24 Hours' },
];

export const groceryPlaces: NearMePlace[] = [
  { id: 'gr1',  name: 'Reliance Fresh Sector 18',            address: 'D-Block, Sector 18',                      sector: 'Sector 18',   lat: 28.5694, lng: 77.3215, phone: '1800-890-1090', hours: '8 AM – 10 PM' },
  { id: 'gr2',  name: "Spencer's Supermarket Sector 50",     address: 'Logix City Centre, Sector 32',            sector: 'Sector 50',   lat: 28.5657, lng: 77.385,  hours: '9 AM – 10 PM' },
  { id: 'gr3',  name: 'Big Bazaar Sector 62',                address: 'Sector 62 Shopping Complex',              sector: 'Sector 62',   lat: 28.6136, lng: 77.3648, hours: '10 AM – 10 PM' },
  { id: 'gr4',  name: 'More Supermarket Sector 44',          address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5639, lng: 77.3603, hours: '8 AM – 10 PM' },
  { id: 'gr5',  name: 'DMart Sector 12',                     address: 'B-Block, Sector 12',                      sector: 'Sector 12',   lat: 28.5787, lng: 77.319,  hours: '8 AM – 10 PM' },
  { id: 'gr6',  name: 'Reliance Smart Sector 137',           address: 'Gaur City Mall, Sector 137',              sector: 'Sector 137',  lat: 28.509,  lng: 77.4096, hours: '9 AM – 10 PM' },
  { id: 'gr7',  name: 'Star Bazaar Sector 76',               address: 'Amrapali Silicon City, Sector 76',        sector: 'Sector 76',   lat: 28.5936, lng: 77.3816, hours: '9 AM – 10 PM' },
  { id: 'gr8',  name: 'Lulu Hypermarket Sector 18',          address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.565,  lng: 77.3158, hours: '10 AM – 10 PM' },
  { id: 'gr9',  name: 'Reliance Fresh Sector 44',            address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5641, lng: 77.3599, phone: '1800-890-1090', hours: '8 AM – 10 PM' },
  { id: 'gr10', name: 'DMart Sector 76',                     address: 'Amrapali Leisure Valley, Sector 76',      sector: 'Sector 76',   lat: 28.5938, lng: 77.3809, hours: '8 AM – 10 PM' },
  { id: 'gr11', name: 'Spar Supermarket Sector 15',          address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.5866, lng: 77.3199, hours: '9 AM – 10 PM' },
  { id: 'gr12', name: 'More Supermarket Sector 29',          address: 'Brahmaputra Market, Sector 29',           sector: 'Sector 29',   lat: 28.5575, lng: 77.3312, hours: '8 AM – 10 PM' },
];

export const restaurantPlaces: NearMePlace[] = [
  { id: 'r1',  name: 'Barbeque Nation Sector 18',            address: 'Atta Market, Sector 18',                  sector: 'Sector 18',   lat: 28.5698, lng: 77.3211, phone: '080-45451111',  hours: '12 PM – 11 PM' },
  { id: 'r2',  name: 'Café Coffee Day Sector 62',            address: 'IT Park Road, Sector 62',                 sector: 'Sector 62',   lat: 28.6139, lng: 77.3644, hours: '8 AM – 10 PM' },
  { id: 'r3',  name: "Haldiram's Sector 18",                 address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.565,  lng: 77.316,  phone: '0120-4567000',  hours: '9 AM – 11 PM' },
  { id: 'r4',  name: 'The Beer Café Sector 18',              address: 'Gardens Galleria, Sector 38A',            sector: 'Sector 38A',  lat: 28.5584, lng: 77.3408, hours: '12 PM – 12 AM' },
  { id: 'r5',  name: 'Imperfecto Sector 50',                 address: 'Near Sector 50, Noida',                   sector: 'Sector 50',   lat: 28.566,  lng: 77.3852, phone: '0120-4234500',  hours: '12 PM – 11 PM' },
  { id: 'r6',  name: 'Starbucks GIP Mall',                   address: 'Great India Place, Sector 38A',           sector: 'Sector 38A',  lat: 28.5593, lng: 77.3422, hours: '9 AM – 11 PM' },
  { id: 'r7',  name: "Domino's Pizza Sector 44",             address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5643, lng: 77.3598, phone: '1800-208-1234', hours: '10 AM – 12 AM' },
  { id: 'r8',  name: 'Social Sector 18',                     address: 'Sector 18 Market',                        sector: 'Sector 18',   lat: 28.5702, lng: 77.3206, hours: '11 AM – 1 AM' },
  { id: 'r9',  name: 'Punjabi By Nature Sector 18',          address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.5693, lng: 77.321,  phone: '0120-4567111',  hours: '12 PM – 11 PM' },
  { id: 'r10', name: 'Chaayos Sector 62',                    address: 'H-Block, Sector 62',                      sector: 'Sector 62',   lat: 28.614,  lng: 77.3641, hours: '8 AM – 10 PM' },
  { id: 'r11', name: 'Subway Sector 44',                     address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5644, lng: 77.3597, phone: '1800-208-9191', hours: '10 AM – 11 PM' },
  { id: 'r12', name: 'Farzi Café Gardens Galleria',          address: 'Gardens Galleria, Sector 38A',            sector: 'Sector 38A',  lat: 28.5585, lng: 77.341,  phone: '0120-4901234',  hours: '12 PM – 12 AM' },
];

export const metroPlaces: NearMePlace[] = [
  { id: 'mt1',  name: 'Noida Sector 18 Metro Station',       address: 'Blue Line, Sector 18',                    sector: 'Sector 18',   lat: 28.5706, lng: 77.3198, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt2',  name: 'Noida City Centre Metro Station',     address: 'Blue Line, Sector 32',                    sector: 'Sector 32',   lat: 28.5672, lng: 77.3195, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt3',  name: 'Botanical Garden Metro Station',      address: 'Blue Line, Sector 38',                    sector: 'Sector 38',   lat: 28.5527, lng: 77.3349, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt4',  name: 'Noida Sector 52 Metro Station',       address: 'Blue Line, Sector 52',                    sector: 'Sector 52',   lat: 28.6015, lng: 77.3606, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt5',  name: 'Noida Sector 62 Metro Station',       address: 'Blue Line, Sector 62',                    sector: 'Sector 62',   lat: 28.614,  lng: 77.3648, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt6',  name: 'Electronic City Metro Station',       address: 'Blue Line, Sector 63',                    sector: 'Sector 63',   lat: 28.6261, lng: 77.381,  phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt7',  name: 'Sector 51 Metro Station',             address: 'Aqua Line, Sector 51',                    sector: 'Sector 51',   lat: 28.6178, lng: 77.3737, phone: '0120-4988100', hours: '6 AM – 10 PM' },
  { id: 'mt8',  name: 'Sector 76 Metro Station',             address: 'Aqua Line, Sector 76',                    sector: 'Sector 76',   lat: 28.5966, lng: 77.3814, phone: '0120-4988100', hours: '6 AM – 10 PM' },
  { id: 'mt9',  name: 'Noida Sector 16 Metro Station',       address: 'Blue Line, Sector 16',                    sector: 'Sector 16',   lat: 28.5856, lng: 77.3232, phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt10', name: 'Noida Sector 15 Metro Station',       address: 'Blue Line, Sector 15',                    sector: 'Sector 15',   lat: 28.5898, lng: 77.322,  phone: '155370', hours: '5:30 AM – 11 PM' },
  { id: 'mt11', name: 'Sector 50 Metro Station',             address: 'Aqua Line, Sector 50',                    sector: 'Sector 50',   lat: 28.6098, lng: 77.3729, phone: '0120-4988100', hours: '6 AM – 10 PM' },
  { id: 'mt12', name: 'Sector 83 Metro Station',             address: 'Aqua Line, Sector 83',                    sector: 'Sector 83',   lat: 28.6069, lng: 77.3783, phone: '0120-4988100', hours: '6 AM – 10 PM' },
];

export const hospitalNearPlaces: NearMePlace[] = [
  { id: 'hn1',  name: 'Fortis Hospital Sector 62',           address: 'B-22, Sector 62',                         sector: 'Sector 62',   lat: 28.6126, lng: 77.3635, phone: '0120-4993333', hours: '24 Hours' },
  { id: 'hn2',  name: 'Max Super Speciality Hospital',       address: 'W-3, Sector 1',                           sector: 'Sector 1',    lat: 28.5742, lng: 77.3195, phone: '0120-4555555', hours: '24 Hours' },
  { id: 'hn3',  name: 'Kailash Hospital Sector 27',          address: 'H-33, Sector 27',                         sector: 'Sector 27',   lat: 28.5612, lng: 77.3267, phone: '0120-4545100', hours: '24 Hours' },
  { id: 'hn4',  name: 'Felix Hospital Sector 137',           address: 'NH-01, Sector 137',                       sector: 'Sector 137',  lat: 28.5085, lng: 77.4108, phone: '0120-4500000', hours: '24 Hours' },
  { id: 'hn5',  name: 'Metro Hospital Sector 12',            address: 'B-Block, Sector 12',                      sector: 'Sector 12',   lat: 28.5788, lng: 77.3185, phone: '0120-2522222', hours: '24 Hours' },
  { id: 'hn6',  name: 'Yatharth Hospital Sector 110',        address: 'Plot No. 1, Sector 110',                  sector: 'Sector 110',  lat: 28.5239, lng: 77.3924, phone: '0120-4588000', hours: '24 Hours' },
  { id: 'hn7',  name: 'Sharda Hospital Greater Noida',       address: 'Plot No. 32-34, Greater Noida',           sector: 'Greater Noida', lat: 28.5604, lng: 77.3423, phone: '0120-2323000', hours: '24 Hours' },
  { id: 'hn8',  name: 'Jaypee Hospital',                     address: 'Sector 128, Noida Expressway',            sector: 'Sector 128',  lat: 28.5133, lng: 77.3851, phone: '0120-4144000', hours: '24 Hours' },
  { id: 'hn9',  name: 'Apollo Hospital Sector 26',           address: 'E-Block, Sector 26',                      sector: 'Sector 26',   lat: 28.5697, lng: 77.3319, phone: '1860-500-1066', hours: '24 Hours' },
  { id: 'hn10', name: 'Cloudnine Hospital Sector 51',        address: 'Near Sector 51 Metro, Sector 51',         sector: 'Sector 51',   lat: 28.6178, lng: 77.373,  phone: '0120-4590200', hours: '24 Hours' },
  { id: 'hn11', name: 'Santosh Hospital Sector 12',          address: 'B-Block, Sector 12',                      sector: 'Sector 12',   lat: 28.5788, lng: 77.3186, phone: '0120-2525252', hours: '24 Hours' },
  { id: 'hn12', name: 'Sarvodaya Hospital Sector 8',         address: 'Sector 8, Noida',                         sector: 'Sector 8',    lat: 28.5907, lng: 77.3143, phone: '0120-4190000', hours: '24 Hours' },
];

export const parkPlaces: NearMePlace[] = [
  { id: 'pk1',  name: 'Sector 18 City Park',                 address: 'Near DLF Mall, Sector 18',                sector: 'Sector 18',   lat: 28.568,  lng: 77.3175, hours: '5 AM – 9 PM' },
  { id: 'pk2',  name: 'Botanical Garden',                    address: 'Sector 38, Noida',                        sector: 'Sector 38',   lat: 28.5527, lng: 77.3338, hours: '6 AM – 6 PM' },
  { id: 'pk3',  name: 'Okhla Bird Sanctuary',                address: 'Okhla Barrage, Sector 94',                sector: 'Sector 94',   lat: 28.5552, lng: 77.3015, phone: '0120-2401776', hours: '7 AM – 5 PM' },
  { id: 'pk4',  name: 'Sector 29 Garden',                    address: 'Community Park, Sector 29',               sector: 'Sector 29',   lat: 28.5573, lng: 77.3315, hours: '5 AM – 9 PM' },
  { id: 'pk5',  name: "Children's Park Sector 50",           address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5668, lng: 77.3855, hours: '6 AM – 8 PM' },
  { id: 'pk6',  name: 'City Forest Sector 91',               address: 'Amrapali Golf Homes, Sector 91',          sector: 'Sector 91',   lat: 28.5349, lng: 77.3682, hours: '5:30 AM – 8 PM' },
  { id: 'pk7',  name: 'Sector 76 Green Park',                address: 'Near Mahagun Moderne, Sector 76',         sector: 'Sector 76',   lat: 28.5941, lng: 77.3815, hours: '5 AM – 9 PM' },
  { id: 'pk8',  name: 'Sector 15A District Park',            address: 'A-Block, Sector 15',                      sector: 'Sector 15',   lat: 28.5889, lng: 77.3218, hours: '5 AM – 9 PM' },
  { id: 'pk9',  name: 'Sector 44 Block Park',                address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5643, lng: 77.3595, hours: '5 AM – 9 PM' },
  { id: 'pk10', name: 'Sector 12 Central Park',              address: 'B-Block, Sector 12',                      sector: 'Sector 12',   lat: 28.5787, lng: 77.3192, hours: '5 AM – 9 PM' },
  { id: 'pk11', name: 'Noida Golf Course',                   address: 'Sector 43, Noida',                        sector: 'Sector 43',   lat: 28.5628, lng: 77.3506, hours: '5 AM – 7 PM' },
  { id: 'pk12', name: 'Sector 93 Green Belt',                address: 'Near Express View, Sector 93',            sector: 'Sector 93',   lat: 28.5378, lng: 77.3616, hours: '5 AM – 9 PM' },
];

export const salonPlaces: NearMePlace[] = [
  { id: 'sl1',  name: 'Jawed Habib Salon Sector 18',         address: 'E-Block Market, Sector 18',               sector: 'Sector 18',   lat: 28.5699, lng: 77.3212, phone: '0120-4234000', hours: '9 AM – 9 PM' },
  { id: 'sl2',  name: 'Naturals Salon Sector 62',            address: 'H-Block, Sector 62',                      sector: 'Sector 62',   lat: 28.6138, lng: 77.3642, hours: '10 AM – 8 PM' },
  { id: 'sl3',  name: 'Lakme Salon Sector 44',               address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5645, lng: 77.3596, phone: '1800-22-5678', hours: '10 AM – 8 PM' },
  { id: 'sl4',  name: 'Green Trends Sector 50',              address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5659, lng: 77.3854, hours: '10 AM – 8 PM' },
  { id: 'sl5',  name: 'Ustraa The Barbershop Sector 15',     address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.5864, lng: 77.3201, hours: '10 AM – 9 PM' },
  { id: 'sl6',  name: 'YLG Salon Sector 76',                 address: 'Mahagun Mart, Sector 76',                 sector: 'Sector 76',   lat: 28.5939, lng: 77.3812, hours: '10 AM – 8 PM' },
  { id: 'sl7',  name: 'Strands Salon Sector 27',             address: 'Atta Market, Sector 27',                  sector: 'Sector 27',   lat: 28.5609, lng: 77.3275, hours: '9 AM – 8 PM' },
  { id: 'sl8',  name: 'VLCC Wellness Sector 137',            address: 'Gaur City Mall, Sector 137',              sector: 'Sector 137',  lat: 28.5091, lng: 77.4101, hours: '10 AM – 8 PM' },
  { id: 'sl9',  name: 'Toni & Guy DLF Mall',                 address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.5648, lng: 77.3156, phone: '0120-4345678', hours: '10 AM – 9 PM' },
  { id: 'sl10', name: 'Enrich Salon GIP Mall',               address: 'Great India Place, Sector 38A',           sector: 'Sector 38A',  lat: 28.5592, lng: 77.342,  hours: '10 AM – 9 PM' },
  { id: 'sl11', name: 'Bounce Salon Sector 50',              address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5659, lng: 77.3852, hours: '10 AM – 8 PM' },
  { id: 'sl12', name: 'Looks Salon Sector 62',               address: 'H-Block, Sector 62',                      sector: 'Sector 62',   lat: 28.6139, lng: 77.3641, hours: '10 AM – 8 PM' },
];

export const courierPlaces: NearMePlace[] = [
  { id: 'co1',  name: 'Delhivery Hub Sector 63',             address: 'B-Block, Sector 63',                      sector: 'Sector 63',   lat: 28.6255, lng: 77.3802, phone: '011-42462100',  hours: '9 AM – 7 PM' },
  { id: 'co2',  name: 'DTDC Courier Sector 18',              address: 'E-Block Market, Sector 18',               sector: 'Sector 18',   lat: 28.5698, lng: 77.3209, phone: '1860-233-1234', hours: '9 AM – 6 PM' },
  { id: 'co3',  name: 'BlueDart Express Sector 62',          address: 'IT Park Road, Sector 62',                 sector: 'Sector 62',   lat: 28.614,  lng: 77.3643, phone: '1860-233-1234', hours: '9 AM – 7 PM' },
  { id: 'co4',  name: 'Speed Post Office Sector 27',         address: 'Atta Market, Sector 27',                  sector: 'Sector 27',   lat: 28.5611, lng: 77.3272, phone: '0120-2556100',  hours: '9 AM – 5 PM' },
  { id: 'co5',  name: 'FedEx Drop Point Sector 44',          address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5643, lng: 77.3597, phone: '1800-419-4343', hours: '10 AM – 7 PM' },
  { id: 'co6',  name: 'Amazon Hub Sector 137',               address: 'Gaur City Mall, Sector 137',              sector: 'Sector 137',  lat: 28.5088, lng: 77.4098, hours: '10 AM – 8 PM' },
  { id: 'co7',  name: 'Ekart Logistics Sector 76',           address: 'Main Market, Sector 76',                  sector: 'Sector 76',   lat: 28.5941, lng: 77.3808, hours: '9 AM – 6 PM' },
  { id: 'co8',  name: 'Xpressbees Sector 15',                address: 'A-Block, Sector 15',                      sector: 'Sector 15',   lat: 28.587,  lng: 77.3196, hours: '9 AM – 6 PM' },
  { id: 'co9',  name: 'DHL Express Sector 18',               address: 'Atta Market, Sector 18',                  sector: 'Sector 18',   lat: 28.5695, lng: 77.3209, phone: '1800-111-345',  hours: '9 AM – 6 PM' },
  { id: 'co10', name: 'Shadowfax Hub Sector 62',             address: 'IT Park Road, Sector 62',                 sector: 'Sector 62',   lat: 28.614,  lng: 77.364,  hours: '9 AM – 7 PM' },
  { id: 'co11', name: 'Shiprocket Pickup Sector 76',         address: 'Main Market, Sector 76',                  sector: 'Sector 76',   lat: 28.5942, lng: 77.3807, hours: '10 AM – 7 PM' },
  { id: 'co12', name: 'Post Office Sector 15',               address: 'A-Block, Sector 15',                      sector: 'Sector 15',   lat: 28.5866, lng: 77.3198, phone: '0120-2556101',  hours: '9 AM – 5 PM' },
];

export const evChargingPlaces: NearMePlace[] = [
  { id: 'ev1',  name: 'Tata Power EV — DLF Mall',            address: 'DLF Mall of India, Sector 18',            sector: 'Sector 18',   lat: 28.5649, lng: 77.3155, hours: '10 AM – 11 PM' },
  { id: 'ev2',  name: 'Ather Grid — Sector 62',              address: 'H-134, Sector 62',                        sector: 'Sector 62',   lat: 28.6139, lng: 77.364,  hours: '24 Hours' },
  { id: 'ev3',  name: 'ChargeZone — GIP Mall',               address: 'Great India Place, Sector 38A',           sector: 'Sector 38A',  lat: 28.5592, lng: 77.3419, hours: '10 AM – 11 PM' },
  { id: 'ev4',  name: 'Statiq Charging — Sector 50',         address: 'Near Sector 50 Metro, Sector 50',         sector: 'Sector 50',   lat: 28.5658, lng: 77.3853, hours: '24 Hours' },
  { id: 'ev5',  name: 'BPCL EV Pump — Sector 15',            address: 'Petrol Station, Sector 15',               sector: 'Sector 15',   lat: 28.5868, lng: 77.3195, hours: '6 AM – 11 PM' },
  { id: 'ev6',  name: 'Jio-bp EV — Expressway',              address: 'Noida–Greater Noida Expressway, Sector 76', sector: 'Sector 76', lat: 28.5942, lng: 77.381,  hours: '24 Hours' },
  { id: 'ev7',  name: 'Tata Power EV — Sector 44',           address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5645, lng: 77.3594, hours: '9 AM – 9 PM' },
  { id: 'ev8',  name: 'Fortum Charge — Sector 137',          address: 'Expressway, Sector 137',                  sector: 'Sector 137',  lat: 28.5092, lng: 77.4099, hours: '24 Hours' },
  { id: 'ev9',  name: 'Magenta ChargeGrid Sector 76',        address: 'Mahagun Mart, Sector 76',                 sector: 'Sector 76',   lat: 28.5943, lng: 77.3813, hours: '24 Hours' },
  { id: 'ev10', name: 'Ather Grid — Sector 44',              address: 'Niti Khand, Sector 44',                   sector: 'Sector 44',   lat: 28.5643, lng: 77.3595, hours: '24 Hours' },
  { id: 'ev11', name: 'Kazam EV Charging Sector 137',        address: 'Gaur City, Sector 137',                   sector: 'Sector 137',  lat: 28.5089, lng: 77.4097, hours: '24 Hours' },
  { id: 'ev12', name: 'HPCL EV Point Sector 12',             address: 'Petrol Station, Sector 12',               sector: 'Sector 12',   lat: 28.5789, lng: 77.3185, hours: '6 AM – 11 PM' },
];

export const autoPlaces: NearMePlace[] = [
  { id: 'au1',  name: 'Sector 18 Auto Stand',                address: 'Atta Market Gate, Sector 18',             sector: 'Sector 18',   lat: 28.5701, lng: 77.3218, hours: '6 AM – 11 PM' },
  { id: 'au2',  name: 'Noida Sector 62 Metro Auto Stand',    address: 'Near Sector 62 Metro Station',            sector: 'Sector 62',   lat: 28.614,  lng: 77.3635, hours: '5 AM – 11 PM' },
  { id: 'au3',  name: 'Sector 15 Auto Stand',                address: 'A-Block Market, Sector 15',               sector: 'Sector 15',   lat: 28.587,  lng: 77.3194, hours: '6 AM – 10 PM' },
  { id: 'au4',  name: 'Sector 44 Auto & Cab Stand',          address: 'Niti Khand Bus Stop, Sector 44',          sector: 'Sector 44',   lat: 28.5646, lng: 77.3592, hours: '6 AM – 11 PM' },
  { id: 'au5',  name: 'Sector 27 Auto Stand',                address: 'Brahmaputra Market Gate, Sector 27',      sector: 'Sector 27',   lat: 28.5604, lng: 77.3281, hours: '6 AM – 10 PM' },
  { id: 'au6',  name: 'Sector 50 Metro Auto Stand',          address: 'Near Sector 50 Metro Station',            sector: 'Sector 50',   lat: 28.5655, lng: 77.3857, hours: '5:30 AM – 11 PM' },
  { id: 'au7',  name: 'Sector 76 Auto Stand',                address: 'Amrapali Leisure Valley, Sector 76',      sector: 'Sector 76',   lat: 28.5943, lng: 77.3806, hours: '6 AM – 10 PM' },
  { id: 'au8',  name: 'Sector 137 Expressway Cab Point',     address: 'Noida-Greater Noida Expressway, Sector 137', sector: 'Sector 137', lat: 28.5088, lng: 77.4104, hours: '24 Hours' },
  { id: 'au9',  name: 'Sector 12 Auto Stand',                address: 'B-Block Market, Sector 12',               sector: 'Sector 12',   lat: 28.5786, lng: 77.319,  hours: '6 AM – 10 PM' },
  { id: 'au10', name: 'Sector 62 IT Park Auto Stand',        address: 'Gate 1, Sector 62 IT Hub',                sector: 'Sector 62',   lat: 28.6139, lng: 77.3641, hours: '7 AM – 10 PM' },
  { id: 'au11', name: 'Botanical Garden Auto Stand',         address: 'Near Metro Station, Sector 38',           sector: 'Sector 38',   lat: 28.5529, lng: 77.3352, hours: '5:30 AM – 11 PM' },
  { id: 'au12', name: 'Sector 51 Metro Auto Stand',          address: 'Near Sector 51 Metro, Sector 51',         sector: 'Sector 51',   lat: 28.618,  lng: 77.3735, hours: '5:30 AM – 10 PM' },
];
