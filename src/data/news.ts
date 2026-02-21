import type { NewsSource } from '../types';

export const newsSources: NewsSource[] = [
  {
    id: 'toi-noida',
    name: 'Times of India – Noida',
    description: 'Latest breaking news, civic issues, real estate, and city development updates from Noida\'s most-read English daily.',
    url: 'https://timesofindia.indiatimes.com/city/noida',
    category: 'English Daily',
    language: 'English',
  },
  {
    id: 'ht-noida',
    name: 'Hindustan Times – Noida',
    description: 'In-depth reporting on Noida\'s infrastructure, crime, sports, and local politics from one of India\'s leading newspapers.',
    url: 'https://www.hindustantimes.com/cities/noida-news',
    category: 'English Daily',
    language: 'English',
  },
  {
    id: 'nbt-noida',
    name: 'Navbharat Times – Noida',
    description: 'Hindi-language daily covering hyperlocal stories, civic grievances, and community news across Noida and Greater Noida.',
    url: 'https://navbharattimes.indiatimes.com/state/uttar-pradesh/noida',
    category: 'Hindi Daily',
    language: 'Hindi',
  },
  {
    id: 'noida-news-live',
    name: 'Noida News Live',
    description: 'Dedicated hyperlocal news portal for Noida covering sector-wise updates, traffic, construction, and resident welfare issues 24/7.',
    url: 'https://noidanewslive.com',
    category: 'Hyperlocal',
    language: 'Hindi/English',
  },
  {
    id: 'india-today-noida',
    name: 'India Today – Noida',
    description: 'National news magazine\'s dedicated Noida coverage with feature stories, interviews, and investigative reports on urban development.',
    url: 'https://www.indiatoday.in/india/uttar-pradesh',
    category: 'News Magazine',
    language: 'English',
  },
  {
    id: 'the-print-noida',
    name: 'The Print – UP/NCR',
    description: 'Independent journalism covering policy, governance, and accountability in Uttar Pradesh with significant Noida and NCR coverage.',
    url: 'https://theprint.in/tag/noida',
    category: 'Independent',
    language: 'English',
  },
];
