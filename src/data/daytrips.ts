import type { DayTrip } from '../types';

export const dayTrips: DayTrip[] = [
  {
    id: 'agra',
    destination: 'Agra',
    state: 'Uttar Pradesh',
    distance: '200 km',
    driveTime: '3.5 hrs via Yamuna Expressway',
    trainAvailable: true,
    description:
      'Home to the iconic Taj Mahal, one of the Seven Wonders of the World. Agra also has the magnificent Agra Fort and Fatehpur Sikri. The Yamuna Expressway makes this an easy and scenic drive from Noida.',
    highlights: ['Taj Mahal (UNESCO)', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Petha sweets'],
    bestFor: ['History buffs', 'Photography', 'Couples', 'Families'],
    bestSeason: 'Oct – Mar',
    imageUrl:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
    category: 'Heritage',
  },
  {
    id: 'mathura-vrindavan',
    destination: 'Mathura & Vrindavan',
    state: 'Uttar Pradesh',
    distance: '165 km',
    driveTime: '3 hrs via Yamuna Expressway',
    trainAvailable: true,
    description:
      'The birthplace of Lord Krishna, Mathura and Vrindavan are among India\'s holiest pilgrimage sites. Vrindavan\'s Banke Bihari temple, Prem Mandir, and the ghats along the Yamuna make for a spiritually enriching day trip.',
    highlights: ['Banke Bihari Mandir', 'Prem Mandir', 'Krishna Janmabhoomi', 'Yamuna Ghats', 'Holi at Vrindavan'],
    bestFor: ['Pilgrimage', 'Culture', 'Photography', 'Holi Festival (March)'],
    bestSeason: 'Oct – Mar (Holi in March is world-famous)',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
    category: 'Pilgrimage',
  },
  {
    id: 'haridwar',
    destination: 'Haridwar',
    state: 'Uttarakhand',
    distance: '230 km',
    driveTime: '4.5 hrs via NH 334',
    trainAvailable: true,
    description:
      'One of the seven holiest cities in Hinduism, Haridwar sits at the foothills of the Himalayas where the Ganges enters the plains. The evening Ganga Aarti at Har ki Pauri is a deeply moving experience. Haridwar is also a gateway to Rishikesh.',
    highlights: ['Har ki Pauri Ganga Aarti', 'Mansa Devi Temple (cable car)', 'Chandi Devi Temple', 'Rajaji National Park', 'Herbal & Ayurveda shopping'],
    bestFor: ['Pilgrimage', 'Spiritual seekers', 'Photography', 'Nature lovers'],
    bestSeason: 'Sep – Apr (avoid monsoon)',
    imageUrl:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop&q=80',
    category: 'Pilgrimage',
  },
  {
    id: 'rishikesh',
    destination: 'Rishikesh',
    state: 'Uttarakhand',
    distance: '260 km',
    driveTime: '5 hrs via NH 334',
    trainAvailable: true,
    description:
      'The Yoga Capital of the World sits at the confluence of the Ganges and its tributaries, surrounded by Himalayan foothills. Famous for white-water rafting, yoga ashrams, Beatles Ashram, and the iconic Laxman Jhula bridge.',
    highlights: ['White-water rafting (Grade 3–4)', 'Beatles Ashram', 'Laxman Jhula & Ram Jhula', 'Yoga & meditation retreats', 'Bungee jumping & zip-lining'],
    bestFor: ['Adventure seekers', 'Yoga practitioners', 'Backpackers', 'Photography'],
    bestSeason: 'Sep – Jun (rafting: Feb–May)',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
    category: 'Nature',
  },
  {
    id: 'jim-corbett',
    destination: 'Jim Corbett National Park',
    state: 'Uttarakhand',
    distance: '280 km',
    driveTime: '5.5 hrs via Moradabad',
    trainAvailable: true,
    description:
      'India\'s oldest national park and a Project Tiger reserve, Jim Corbett is home to Bengal tigers, Asian elephants, leopards, and diverse birdlife. Jeep and elephant safaris through dense Sal forests offer thrilling wildlife encounters.',
    highlights: ['Bengal Tiger safaris', 'Elephant rides (restricted zones)', 'Dhikala zone (best for tiger sighting)', '600+ bird species', 'Ramganga river rafting'],
    bestFor: ['Wildlife enthusiasts', 'Bird watchers', 'Nature photographers', 'Families with kids'],
    bestSeason: 'Nov – Jun (park closed Jul–Oct monsoon)',
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80',
    category: 'Nature',
  },
  {
    id: 'mussoorie',
    destination: 'Mussoorie',
    state: 'Uttarakhand',
    distance: '310 km',
    driveTime: '6 hrs via Haridwar',
    trainAvailable: false,
    description:
      'The Queen of Hill Stations sits at 2,000m above sea level with panoramic views of the Himalayan peaks and the Doon Valley. Mall Road, Kempty Falls, Camel\'s Back Road, and the gun hill cable car make it a perfect summer escape from Delhi-NCR heat.',
    highlights: ['Mall Road & Camel\'s Back', 'Kempty Falls', 'Gun Hill cable car', 'Landour Cantonment', 'Himalayan panoramas'],
    bestFor: ['Summer escape from heat', 'Couples', 'Families', 'Weekend getaways'],
    bestSeason: 'Mar – Jun & Sep – Nov',
    imageUrl:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
    category: 'Hill Station',
  },
  {
    id: 'jaipur',
    destination: 'Jaipur',
    state: 'Rajasthan',
    distance: '280 km',
    driveTime: '5 hrs via NH 48',
    trainAvailable: true,
    description:
      'The Pink City — Rajasthan\'s capital — is a UNESCO World Heritage city known for its majestic forts, palaces, and vibrant bazaars. The Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar are unmissable. End the day shopping for Rajasthani textiles and gems.',
    highlights: ['Amber Fort & Palace', 'Hawa Mahal (Palace of Winds)', 'City Palace & Museum', 'Jantar Mantar Observatory', 'Johari Bazar for gems & jewellery'],
    bestFor: ['History & architecture', 'Shopping', 'Photography', 'Culture'],
    bestSeason: 'Oct – Mar',
    imageUrl:
      'https://images.unsplash.com/photo-1524229648276-e66561fe45a9?w=800&auto=format&fit=crop&q=80',
    category: 'Heritage',
  },
  {
    id: 'agra-fort',
    destination: 'Lucknow',
    state: 'Uttar Pradesh',
    distance: '550 km',
    driveTime: '7 hrs via Agra–Lucknow Expressway',
    trainAvailable: true,
    description:
      'The City of Nawabs is renowned for its gracious Nawabi culture, stunning Mughal and British architecture, and the finest Awadhi cuisine including the legendary Lucknowi biryani and kebabs. The Lucknow–Agra Expressway makes the drive fast and pleasant.',
    highlights: ['Bara Imambara & Bhool Bhulaiya', 'Rumi Darwaza', 'Hazratganj for shopping', 'Lucknowi biryani & Tunday Kababi', 'Nawabi monuments & culture'],
    bestFor: ['Food lovers', 'History enthusiasts', 'Culture seekers', 'Train journey (Shatabdi)'],
    bestSeason: 'Oct – Mar',
    imageUrl:
      'https://images.unsplash.com/photo-1688287580970-70fe8e0f4bef?w=800&auto=format&fit=crop&q=80',
    category: 'City',
  },
];
