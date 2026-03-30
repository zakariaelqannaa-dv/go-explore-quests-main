export interface Destination {
  name: string;
  country: string;
  region: string;
  emoji: string;
}

export interface Country {
  name: string;
  places: string[];
}

export interface Region {
  name: string;
  emoji: string;
  description: string;
  image: string;
  countries: Country[];
}

export const regions: Region[] = [
  {
    name: "Europe",
    emoji: "🏰",
    description: "Ancient ruins, Renaissance art, and vibrant café culture across timeless cities.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    countries: [
      { name: "Italy", places: ["Rome", "Naples", "Milan", "Rimini", "Turin"] },
      { name: "France", places: ["Paris", "Lyon", "Nice", "Bordeaux", "Strasbourg"] },
      { name: "Spain", places: ["Madrid", "Barcelona", "Seville", "Valencia", "Bilbao"] },
      { name: "Greece", places: ["Athens", "Santorini", "Mykonos", "Crete", "Thessaloniki"] },
      { name: "United Kingdom", places: ["London", "Edinburgh", "Manchester", "Bath", "Belfast"] },
      { name: "Germany", places: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"] },
    ],
  },
  {
    name: "Asia",
    emoji: "⛩️",
    description: "From neon-lit megacities to serene temples and tropical paradises.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    countries: [
      { name: "Japan", places: ["Tokyo", "Kyoto", "Osaka", "Hokkaido", "Okinawa"] },
      { name: "Thailand", places: ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya", "Krabi"] },
      { name: "Vietnam", places: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An", "Ha Long"] },
      { name: "India", places: ["New Delhi", "Mumbai", "Jaipur", "Goa", "Varanasi"] },
      { name: "South Korea", places: ["Seoul", "Busan", "Jeju City", "Gyeongju", "Incheon"] },
      { name: "Indonesia", places: ["Bali (Ubud)", "Jakarta", "Yogyakarta", "Bandung", "Lombok"] },
    ],
  },
  {
    name: "Africa",
    emoji: "🌍",
    description: "Wild safaris, ancient wonders, and colorful markets under endless skies.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    countries: [
      { name: "Morocco", places: ["Marrakech", "Fez", "Casablanca", "Chefchaouen", "Essaouira"] },
      { name: "South Africa", places: ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Stellenbosch"] },
      { name: "Egypt", places: ["Cairo", "Luxor", "Aswan", "Alexandria", "Sharm El-Sheikh"] },
      { name: "Kenya", places: ["Nairobi", "Mombasa", "Nakuru", "Lamu", "Kisumu"] },
      { name: "Tanzania", places: ["Dar es Salaam", "Zanzibar City", "Arusha", "Dodoma", "Moshi"] },
      { name: "Senegal", places: ["Dakar", "Saint-Louis", "Touba", "Thiès", "Ziguinchor"] },
    ],
  },
  {
    name: "The Americas",
    emoji: "🗽",
    description: "Skyscrapers to rainforests, from frozen tundra to sun-drenched beaches.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800&q=80",
    countries: [
      { name: "USA", places: ["New York City", "Los Angeles", "Chicago", "Miami"] },
      { name: "Canada", places: ["Toronto", "Vancouver", "Montreal", "Quebec City"] },
      { name: "Mexico", places: ["Mexico City", "Cancun", "Oaxaca", "Guadalajara"] },
      { name: "Brazil", places: ["Rio de Janeiro", "São Paulo", "Salvador", "Manaus"] },
      { name: "Argentina", places: ["Buenos Aires", "Mendoza", "Bariloche"] },
      { name: "Peru", places: ["Lima", "Cusco", "Arequipa"] },
      { name: "Colombia", places: ["Bogota", "Medellin", "Cartagena"] },
    ],
  },
  {
    name: "Russia",
    emoji: "🏛️",
    description: "Vast landscapes from imperial palaces to the frozen beauty of Siberia.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    countries: [
      { name: "Central", places: ["Moscow", "Voronezh", "Yaroslavl", "Tver", "Ryazan"] },
      { name: "Northwest", places: ["St. Petersburg", "Kaliningrad", "Murmansk", "Arkhangelsk"] },
      { name: "Siberia", places: ["Novosibirsk", "Irkutsk", "Omsk", "Krasnoyarsk", "Tomsk"] },
      { name: "Urals", places: ["Yekaterinburg", "Chelyabinsk", "Tyumen", "Nizhny Tagil"] },
      { name: "Far East", places: ["Vladivostok", "Khabarovsk", "Yakutsk", "Yuzhno-Sakhalinsk"] },
      { name: "South/Volga", places: ["Kazan", "Sochi", "Nizhny Novgorod", "Samara"] },
    ],
  },
  {
    name: "Australia",
    emoji: "🦘",
    description: "Surf beaches, outback adventures, and cosmopolitan cities down under.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    countries: [
      { name: "New South Wales", places: ["Sydney", "Newcastle", "Wollongong", "Byron Bay"] },
      { name: "Victoria", places: ["Melbourne", "Geelong", "Ballarat", "Bendigo"] },
      { name: "Queensland", places: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Noosa"] },
      { name: "Western Australia", places: ["Perth", "Fremantle", "Broome", "Bunbury", "Margaret River"] },
      { name: "South Australia", places: ["Adelaide", "Mount Gambier", "Port Lincoln", "Victor Harbor"] },
      { name: "Tasmania", places: ["Hobart", "Launceston", "Devonport"] },
    ],
  },
];

export function getAllDestinations(): Destination[] {
  const destinations: Destination[] = [];
  for (const region of regions) {
    for (const country of region.countries) {
      for (const place of country.places) {
        destinations.push({
          name: place,
          country: country.name,
          region: region.name,
          emoji: region.emoji,
        });
      }
    }
  }
  return destinations;
}

export function searchDestinations(query: string): Destination[] {
  const q = query.toLowerCase();
  return getAllDestinations().filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q)
  );
}
