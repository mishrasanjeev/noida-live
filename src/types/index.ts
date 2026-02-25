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
  precipitation_sum: number[];
  wind_speed_10m_max: number[];
}

export interface WeatherApiResponse {
  current: WeatherCurrent;
  daily: WeatherDaily;
}

export type WeatherState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: WeatherApiResponse };

// AQI types
export interface AqiCurrent {
  us_aqi: number;
  pm2_5: number;
  pm10: number;
  european_aqi: number;
}

export interface AqiApiResponse {
  current: AqiCurrent;
}

export type AqiState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'success'; data: AqiApiResponse };

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

// Hospital types
export interface Hospital {
  id: string;
  name: string;
  type: 'Government' | 'Private' | 'Specialty' | 'Clinic';
  location: string;
  sector: string;
  beds: number;
  specialties: string[];
  emergencyAvailable: boolean;
  rating: number;
  phone: string;
  description: string;
}

// School types
export interface School {
  id: string;
  name: string;
  type: 'School' | 'College' | 'University';
  board: string;
  location: string;
  sector: string;
  grades: string;
  rating: number;
  highlights: string[];
  fees: string;
  description: string;
  established: number;
}

// Connectivity types
export interface ConnectivityRoute {
  id: string;
  name: string;
  type: 'Metro' | 'Expressway' | 'Highway' | 'Bus' | 'Rail';
  description: string;
  keyStops: string[];
  travelTime: string;
  operationalStatus: 'Operational' | 'Under Construction' | 'Planned';
  highlights: string[];
}

// IT Park types
export interface ITpark {
  id: string;
  name: string;
  location: string;
  sector: string;
  totalArea: string;
  majorCompanies: string[];
  type: 'SEZ' | 'IT Park' | 'Tech Hub';
  rating: number;
  description: string;
  highlights: string[];
}

// Events & Festivals types
export interface NoidaEvent {
  id: string;
  name: string;
  type: 'Cultural' | 'Sports' | 'Religious' | 'Commercial' | 'Music' | 'Food';
  month: string;
  dateRange: string;
  location: string;
  sector: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  isFeatured?: boolean;
}

// Emergency contacts
export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  altNumber?: string;
  type: 'Police' | 'Medical' | 'Fire' | 'Utility' | 'Women' | 'Child' | 'Control Room' | 'Cyber';
  available: '24x7' | 'Office Hours';
  icon: string;
  description: string;
}

// Government services
export interface GovernmentOffice {
  id: string;
  name: string;
  department: string;
  location: string;
  sector: string;
  services: string[];
  phone: string;
  timings: string;
  website?: string;
  description: string;
}

// Entertainment venues
export interface EntertainmentVenue {
  id: string;
  name: string;
  type: 'Cinema' | 'Amusement Park' | 'Gaming' | 'Bowling' | 'Club' | 'Comedy';
  location: string;
  sector: string;
  highlights: string[];
  timings: string;
  priceRange: string;
  rating: number;
  phone?: string;
  description: string;
}

// Local markets & bazaars
export interface LocalMarket {
  id: string;
  name: string;
  type: 'Weekly Bazaar' | 'Daily Market' | 'Shopping Complex' | 'Specialty';
  location: string;
  sector: string;
  timings: string;
  highlights: string[];
  popularFor: string[];
  day?: string;
  description: string;
}

// Sports & recreation
export interface SportsFacility {
  id: string;
  name: string;
  type: 'Stadium' | 'Sports Complex' | 'Golf' | 'Swimming' | 'Gym' | 'Club';
  location: string;
  sector: string;
  sports: string[];
  timings: string;
  membershipFee?: string;
  highlights: string[];
  phone?: string;
  description: string;
}

// Religious places
export interface ReligiousPlace {
  id: string;
  name: string;
  religion: 'Hindu' | 'Muslim' | 'Christian' | 'Sikh' | 'Jain';
  deity?: string;
  location: string;
  sector: string;
  timings: string;
  festivals: string[];
  highlights: string[];
  established?: string;
  description: string;
}

// Hostel & PG accommodation
export interface HostelPG {
  id: string;
  name: string;
  type: 'PG' | 'Hostel' | 'Co-living';
  gender: 'Male' | 'Female' | 'Co-ed';
  location: string;
  sector: string;
  priceRange: string;
  amenities: string[];
  foodIncluded: boolean;
  phone?: string;
  rating: number;
  description: string;
}

// Near Me places
export interface NearMePlace {
  id: string;
  name: string;
  address: string;
  sector: string;
  lat: number;
  lng: number;
  phone?: string;
  hours?: string;
}

// Day trips
export interface DayTrip {
  id: string;
  destination: string;
  state: string;
  distance: string;
  driveTime: string;
  trainAvailable: boolean;
  description: string;
  highlights: string[];
  bestFor: string[];
  bestSeason: string;
  imageUrl: string;
  category: 'Heritage' | 'Nature' | 'Pilgrimage' | 'Hill Station' | 'City';
}
