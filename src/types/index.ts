// Weather types
export interface WeatherCurrent {
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  weather_code: number;
  wind_speed_10m: number;
  precipitation: number;
}

export interface WeatherDaily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface WeatherApiResponse {
  current: WeatherCurrent;
  daily: WeatherDaily;
}

export type WeatherState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: WeatherApiResponse };

// Office types
export interface Office {
  id: string;
  name: string;
  type: 'Coworking' | 'Managed Office' | 'Virtual Office';
  location: string;
  sector: string;
  pricePerDesk: string;
  rating: number;
  amenities: string[];
  description: string;
  website: string;
}

// Mall types
export interface Mall {
  id: string;
  name: string;
  location: string;
  sector: string;
  floors: number;
  stores: number;
  highlights: string[];
  timings: string;
  rating: number;
  isPremium: boolean;
  description: string;
}

// Restaurant types
export interface Restaurant {
  id: string;
  name: string;
  category: 'North Indian' | 'Continental' | 'Street Food' | 'Fast Food' | 'Multi-Cuisine' | 'South Indian';
  location: string;
  sector: string;
  priceForTwo: string;
  rating: number;
  tags: string[];
  description: string;
  timings: string;
}

// Place types
export interface Place {
  id: string;
  name: string;
  category: 'Nature' | 'Theme Park' | 'Religious' | 'Heritage' | 'Entertainment';
  location: string;
  sector: string;
  entryFee: string;
  rating: number;
  tags: string[];
  description: string;
  timings: string;
}

// News types
export interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
}

// Apartment types
export interface Apartment {
  id: string;
  name: string;
  developer: string;
  status: 'New Launch' | 'Under Construction' | 'Ready to Move';
  location: string;
  sector: string;
  priceRange: string;
  configurations: string[];
  towers: number;
  maxFloors: number;
  possession: string;
  rating: number;
  amenities: string[];
  highlights: string[];
  description: string;
  imageUrl: string;
}
