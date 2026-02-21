import type { Mall } from '../types';

export const malls: Mall[] = [
  {
    id: 'dlf-mall-of-india',
    name: 'DLF Mall of India',
    location: 'Sector 18, Noida',
    sector: 'Sector 18',
    floors: 5,
    stores: 330,
    highlights: ['India\'s Largest Mall', 'IMAX Theatre', 'Ski India', 'Food Court', 'International Brands'],
    timings: '10:00 AM – 10:00 PM',
    rating: 4.6,
    isPremium: true,
    description:
      'India\'s largest mall spread over 2 million sq. ft. with over 330 stores, India\'s first indoor snow park, an IMAX screen, and a massive entertainment zone.',
  },
  {
    id: 'great-india-place',
    name: 'Great India Place',
    location: 'Sector 38A, Noida',
    sector: 'Sector 38A',
    floors: 4,
    stores: 280,
    highlights: ['Worlds of Wonder adjacent', 'Multiplex', 'Gaming Zone', 'Food Court', 'Fashion Brands'],
    timings: '10:00 AM – 10:00 PM',
    rating: 4.3,
    isPremium: false,
    description:
      'One of the oldest and most popular malls in Noida, adjacent to Worlds of Wonder theme park, featuring a multiplex and wide retail selection.',
  },
  {
    id: 'logix-city-centre',
    name: 'Logix City Centre',
    location: 'Sector 32, Noida',
    sector: 'Sector 32',
    floors: 4,
    stores: 200,
    highlights: ['PVR Multiplex', 'Lifestyle Store', 'Fitness Zone', 'Fine Dining', 'Kids Zone'],
    timings: '10:00 AM – 10:00 PM',
    rating: 4.2,
    isPremium: false,
    description:
      'A vibrant retail destination in Noida\'s commercial heart with a PVR multiplex, popular fashion labels, and diverse dining options.',
  },
  {
    id: 'grand-venice',
    name: 'The Grand Venice',
    location: 'Site IV, Greater Noida',
    sector: 'Greater Noida',
    floors: 3,
    stores: 150,
    highlights: ['Venice-themed Architecture', 'Canal Walk', 'Fine Dining', 'Art Galleries', 'Luxury Hotels'],
    timings: '11:00 AM – 9:00 PM',
    rating: 4.4,
    isPremium: true,
    description:
      'An architectural marvel inspired by Venice, Italy. Features indoor canals, gondola rides, luxury boutiques, art galleries, and fine-dining restaurants.',
  },
  {
    id: 'spice-world',
    name: 'Spice World Mall',
    location: 'Sector 25A, Noida',
    sector: 'Sector 25A',
    floors: 4,
    stores: 160,
    highlights: ['Cinepolis Multiplex', 'Kids Play Area', 'Food Court', 'Hypermarket', 'Electronics'],
    timings: '10:00 AM – 10:00 PM',
    rating: 4.0,
    isPremium: false,
    description:
      'A family-friendly shopping destination with a Cinepolis multiplex, a large hypermarket, extensive food court, and an indoor play area for children.',
  },
];
