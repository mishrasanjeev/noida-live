import type { Office } from '../types';

export const offices: Office[] = [
  {
    id: 'wework-noida',
    name: 'WeWork',
    type: 'Coworking',
    location: 'Candor Tech Space, Sector 135',
    sector: 'Sector 135',
    pricePerDesk: '₹8,000 – ₹15,000 / month',
    rating: 4.4,
    amenities: ['24/7 Access', 'High-Speed Wi-Fi', 'Meeting Rooms', 'Café', 'Gym', 'Parking'],
    description:
      'Premium coworking space in a Grade A building with world-class amenities and a vibrant community of professionals.',
    website: 'https://www.wework.com/en-IN/buildings/candor-techspace--noida',
  },
  {
    id: 'awfis-noida',
    name: 'Awfis',
    type: 'Coworking',
    location: 'SAS Tower, Sector 38A',
    sector: 'Sector 38A',
    pricePerDesk: '₹4,500 – ₹10,000 / month',
    rating: 4.2,
    amenities: ['Flexible Plans', 'High-Speed Wi-Fi', 'Conference Rooms', 'Printing', 'Lounge', 'AC'],
    description:
      'Flexible coworking spaces with daily, weekly, and monthly plans. Ideal for freelancers, startups, and SMEs.',
    website: 'https://www.awfis.com/noida',
  },
  {
    id: '91springboard-noida',
    name: '91Springboard',
    type: 'Coworking',
    location: 'Plot 100, Sector 5',
    sector: 'Sector 5',
    pricePerDesk: '₹5,000 – ₹12,000 / month',
    rating: 4.3,
    amenities: ['Open Desks', 'Private Cabins', 'Event Space', 'Mentorship', 'Café', 'High-Speed Internet'],
    description:
      'India\'s largest coworking network offering startup-friendly plans with a strong community and regular events.',
    website: 'https://www.91springboard.com/noida',
  },
  {
    id: 'indiqube-noida',
    name: 'IndiQube',
    type: 'Managed Office',
    location: 'iThum, Sector 62',
    sector: 'Sector 62',
    pricePerDesk: '₹7,000 – ₹14,000 / month',
    rating: 4.5,
    amenities: ['Customisable Layout', 'Dedicated Support', 'Cafeteria', 'Security', 'Parking', 'Power Backup'],
    description:
      'Fully managed office solutions tailored for mid-size and enterprise clients. Transparent pricing with zero hidden costs.',
    website: 'https://www.indiqube.com/noida',
  },
  {
    id: 'smartworks-noida',
    name: 'Smartworks',
    type: 'Managed Office',
    location: 'Logix Infotech Park, Sector 59',
    sector: 'Sector 59',
    pricePerDesk: '₹6,500 – ₹13,000 / month',
    rating: 4.1,
    amenities: ['Plug & Play', 'Biometric Access', 'CCTV', 'Cafeteria', 'Gym', 'Concierge'],
    description:
      'Enterprise-grade flexible workspaces with plug-and-play infrastructure and premium end-to-end services.',
    website: 'https://smartworks.com/noida',
  },
  {
    id: 'cowrks-noida',
    name: 'CoWrks',
    type: 'Coworking',
    location: 'Express Trade Tower, Sector 132',
    sector: 'Sector 132',
    pricePerDesk: '₹7,500 – ₹16,000 / month',
    rating: 4.4,
    amenities: ['Rooftop Lounge', 'Innovation Labs', 'Podcast Studio', 'Wellness Room', 'Virtual Office', 'On-Site IT'],
    description:
      'Design-forward coworking with thoughtfully curated spaces, cutting-edge tech, and a focus on work-life integration.',
    website: 'https://cowrks.com/noida',
  },
];
