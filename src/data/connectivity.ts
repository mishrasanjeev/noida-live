import type { ConnectivityRoute } from '../types';

export const connectivityRoutes: ConnectivityRoute[] = [
  {
    id: 'conn-1',
    name: 'Aqua Line Metro (Line 1)',
    type: 'Metro',
    description:
      'Noida Metro\'s own rapid transit line running through the heart of Noida, connecting residential sectors to commercial hubs and the Greater Noida border.',
    keyStops: ['Noida Sector 51', 'Sector 76', 'Sector 101', 'Sector 137', 'Sector 142', 'Depot'],
    travelTime: '~35 min end-to-end',
    operationalStatus: 'Operational',
    highlights: ['Air-conditioned coaches', 'Real-time tracking', 'Connects to DMRC Blue Line', 'Token & smart card fare'],
  },
  {
    id: 'conn-2',
    name: 'Blue Line Metro (DMRC Line 3)',
    type: 'Metro',
    description:
      'Delhi Metro\'s Blue Line connects Noida City Centre and Electronic City to Dwarka Sector 21 via central Delhi, providing seamless connectivity to the capital.',
    keyStops: ['Noida City Centre', 'Noida Sector 15', 'Noida Electronic City', 'Botanical Garden', 'Akshardham', 'Rajiv Chowk'],
    travelTime: '~50 min to Rajiv Chowk',
    operationalStatus: 'Operational',
    highlights: ['High frequency (3-min peak)', 'Airport Express interchange at Dwarka Sec-21', 'Feeder buses available', 'AC coaches'],
  },
  {
    id: 'conn-3',
    name: 'Yamuna Expressway',
    type: 'Expressway',
    description:
      '165 km six-lane access-controlled expressway connecting Greater Noida to Agra. One of India\'s longest expressways, passing through Mathura.',
    keyStops: ['Greater Noida', 'Mathura', 'Vrindavan', 'Agra'],
    travelTime: '~2.5 hrs to Agra',
    operationalStatus: 'Operational',
    highlights: ['165 km length', 'Max speed 100 km/h', 'Toll plazas', 'Jewar Airport en route'],
  },
  {
    id: 'conn-4',
    name: 'DND Flyway (Delhi-Noida Direct)',
    type: 'Expressway',
    description:
      '9.2 km toll bridge over the Yamuna river connecting Noida\'s Sector 15A to Delhi\'s Nizamuddin area, significantly reducing travel time to South Delhi.',
    keyStops: ['Noida Sector 15A', 'Lala Lajpat Rai Marg', 'Nizamuddin', 'Ring Road Delhi'],
    travelTime: '~15 min to South Delhi',
    operationalStatus: 'Operational',
    highlights: ['Now toll-free', 'Reduces Delhi travel by 30 min', 'Access to South & Central Delhi', 'High-speed 8-lane corridor'],
  },
  {
    id: 'conn-5',
    name: 'NH-9 Delhi–Meerut Expressway',
    type: 'Highway',
    description:
      '96 km elevated and ground-level expressway corridor connecting Delhi to Meerut via Ghaziabad, with dedicated bus rapid transit and metro lanes.',
    keyStops: ['Noida–Greater Noida link', 'Ghaziabad', 'Dasna', 'Hapur', 'Meerut'],
    travelTime: '~45 min to Meerut',
    operationalStatus: 'Operational',
    highlights: ['Integrated metro-highway', 'Reduced Meerut travel from 3 hrs to 45 min', 'RRTS corridor adjacent', 'Emergency SOS points'],
  },
  {
    id: 'conn-6',
    name: 'Noida–Greater Noida Expressway',
    type: 'Expressway',
    description:
      '25 km signal-free expressway forming Noida\'s backbone, connecting Sector 18 in the north to Knowledge Park V in Greater Noida.',
    keyStops: ['Sector 18', 'Sector 62', 'Sector 100', 'Sector 137', 'Alpha 1 Greater Noida'],
    travelTime: '~30 min end-to-end',
    operationalStatus: 'Operational',
    highlights: ['25 km signal-free', 'Parallel metro (Aqua Line)', 'Major IT hubs along corridor', 'Expressway Police patrolled'],
  },
];

export const distancesFromNoida: { destination: string; distance: string; byRoad: string; byTrain?: string }[] = [
  { destination: 'New Delhi', distance: '~25 km', byRoad: '45 min via DND', byTrain: '~50 min (Blue Line Metro)' },
  { destination: 'Agra', distance: '~165 km', byRoad: '~2.5 hrs via Yamuna Expressway', byTrain: '~1.5 hrs (Intercity)' },
  { destination: 'Lucknow', distance: '~510 km', byRoad: '~6 hrs via Agra–Lucknow Expressway', byTrain: '~3.5 hrs (Shatabdi)' },
  { destination: 'Jaipur', distance: '~270 km', byRoad: '~4 hrs via NH-48', byTrain: '~5 hrs (various trains)' },
  { destination: 'Dehradun', distance: '~310 km', byRoad: '~6 hrs via NH-334', byTrain: '~5.5 hrs (Mussoorie Express)' },
  { destination: 'Jewar Airport', distance: '~40 km', byRoad: '~45 min via Yamuna Expressway' },
];
