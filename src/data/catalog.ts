import { Plane, Train, Bus, type LucideIcon } from "lucide-react";

export interface Mission {
  title: string;
  reward: number;
  tasks: string[];
}

export interface Place {
  id: string;
  name: string;
  country: string;
  region: string;
  type: string[];
  flightBase: number;
  hotelNight: number;
  transportDaily: number;
  foodDaily: number;
  weather: "sunny" | "rainy";
  highlights: string[];
  historical: string[];
  museums: string[];
  bestMonths: string[];
  stayOptions: string[];
  missions: Mission[];
  imageUrls: string[];
  rating: number;
  reviewCount: number;
  description: string;
  currency: string;
  timezone: string;
  language: string;
  visaRequired: boolean;
  safetyRating: number;
}

export interface CatalogCountry {
  name: string;
  places: Place[];
}

export interface CatalogRegion {
  id: string;
  name: string;
  countries: CatalogCountry[];
}

export interface FlatPlace extends Place {
  continentId: string;
  continentName: string;
  countryGroup: string;
}

export const catalog: CatalogRegion[] = [
  {
    id: "europe",
    name: "Europe",
    countries: [
      {
        name: "Italy",
        places: [
          {
            id: "rome",
            name: "Rome",
            country: "Italy",
            region: "Europe",
            type: ["historical", "museum", "city", "food"],
            flightBase: 170,
            hotelNight: 120,
            transportDaily: 8,
            foodDaily: 35,
            weather: "sunny",
            rating: 4.7,
            reviewCount: 128500,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "Italian",
            visaRequired: false,
            safetyRating: 4.2,
            description: "The Eternal City where ancient history meets vibrant modern life. Home to the Colosseum, Vatican, and incredible cuisine.",
            imageUrls: [
              "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
              "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80",
              "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
              "https://images.unsplash.com/photo-1555993539-1732b2200343?w=800&q=80",
              "https://images.unsplash.com/photo-1529260830199-42c42dda5f3e?w=800&q=80",
            ],
            highlights: ["Colosseum", "Trevi Fountain", "Vatican Museums", "Spanish Steps"],
            historical: ["Roman Forum", "Pantheon", "Castel Sant'Angelo"],
            museums: ["Vatican Museums", "Capitoline Museums", "Borghese Gallery"],
            bestMonths: ["April", "May", "October"],
            stayOptions: ["Budget B&B €60-100", "3-star hotel €100-180", "Historic boutique €180-300", "Luxury €300+"],
            missions: [
              { title: "Ancient Rome Run", reward: 120, tasks: ["Visit the Colosseum", "Walk the Roman Forum", "Eat cacio e pepe near the center"] },
              { title: "Vatican Art Mission", reward: 100, tasks: ["Enter Vatican Museums", "See St. Peter's Square", "Take a sunset photo over the Tiber"] },
              { title: "Roman Evening Quest", reward: 80, tasks: ["Throw a coin in Trevi Fountain", "Walk to the Pantheon", "Try gelato after 8 PM"] },
            ],
          },
          {
            id: "florence",
            name: "Florence",
            country: "Italy",
            region: "Europe",
            type: ["art", "museum", "historical", "food"],
            flightBase: 180,
            hotelNight: 140,
            transportDaily: 6,
            foodDaily: 40,
            weather: "sunny",
            rating: 4.8,
            reviewCount: 95200,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "Italian",
            visaRequired: false,
            safetyRating: 4.5,
            description: "Birthplace of the Renaissance with unparalleled art, architecture, and Tuscan cuisine.",
            imageUrls: [
              "https://images.unsplash.com/photo-1548625361-98770d29d0e3?w=800&q=80",
              "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80",
              "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
              "https://images.unsplash.com/photo-1515542706656-8e6ef1760a07?w=800&q=80",
              "https://images.unsplash.com/photo-1529260830199-42c42dda5f3e?w=800&q=80",
            ],
            highlights: ["Duomo", "Uffizi Gallery", "Ponte Vecchio", "Piazzale Michelangelo"],
            historical: ["Palazzo Vecchio", "Basilica of San Lorenzo", "Medici Chapels"],
            museums: ["Uffizi", "Accademia", "Palazzo Pitti"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget hostel €40-70", "3-star hotel €90-150", "Historic palazzo €150-280", "Luxury €280+"],
            missions: [
              { title: "Renaissance Art Quest", reward: 130, tasks: ["See David at Accademia", "Visit Uffizi Gallery", "Sketch the Duomo"] },
              { title: "Tuscan Food Mission", reward: 90, tasks: ["Try bistecca alla fiorentina", "Taste Chianti wine", "Eat gelato at Piazza della Signoria"] },
              { title: "Sunset Photography", reward: 70, tasks: ["Climb Duomo dome", "Photograph from Piazzale Michelangelo", "Capture Ponte Vecchio at dusk"] },
            ],
          },
          {
            id: "venice",
            name: "Venice",
            country: "Italy",
            region: "Europe",
            type: ["romantic", "historical", "canal", "art"],
            flightBase: 190,
            hotelNight: 180,
            transportDaily: 25,
            foodDaily: 50,
            weather: "rainy",
            rating: 4.6,
            reviewCount: 112000,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "Italian",
            visaRequired: false,
            safetyRating: 4.3,
            description: "Floating city of canals, gondolas, and Byzantine splendor. A unique romantic destination.",
            imageUrls: [
              "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80",
              "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
              "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80",
              "https://images.unsplash.com/photo-1515542706656-8e6ef1760a07?w=800&q=80",
              "https://images.unsplash.com/photo-1529260830199-42c42dda5f3e?w=800&q=80",
            ],
            highlights: ["St. Mark's Square", "Doge's Palace", "Rialto Bridge", "Grand Canal"],
            historical: ["St. Mark's Basilica", "Bridge of Sighs", "Peggy Guggenheim Collection"],
            museums: ["Doge's Palace", "Ca' Rezzonico", "Gallerie dell'Accademia"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget guesthouse €80-120", "3-star hotel €150-250", "Canal-view boutique €250-400", "Luxury €400+"],
            missions: [
              { title: "Grand Canal Adventure", reward: 140, tasks: ["Ride vaporetto Line 1", "Visit Rialto Market", "Gondola ride through small canals"] },
              { title: "St. Mark's Discovery", reward: 110, tasks: ["Enter St. Mark's Basilica", "Climb Campanile tower", "Feed pigeons in the square"] },
              { title: "Hidden Venice Quest", reward: 85, tasks: ["Find secret courtyard", "Visit Burano island", "Try cicchetti at bacaro"] },
            ],
          },
        ],
      },
      {
        name: "France",
        places: [
          {
            id: "paris",
            name: "Paris",
            country: "France",
            region: "Europe",
            type: ["museum", "historical", "city", "romantic", "food"],
            flightBase: 180,
            hotelNight: 160,
            transportDaily: 10,
            foodDaily: 45,
            weather: "rainy",
            rating: 4.6,
            reviewCount: 245000,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "French",
            visaRequired: false,
            safetyRating: 4.0,
            description: "The City of Light offers world-class art, iconic monuments, haute cuisine, and timeless romance.",
            imageUrls: [
              "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
              "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80",
              "https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?w=800&q=80",
              "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
            ],
            highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
            historical: ["Arc de Triomphe", "Versailles Palace", "Sainte-Chapelle"],
            museums: ["Louvre", "Musée d'Orsay", "Centre Pompidou"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget hotel €80-130", "3-star hotel €130-220", "Boutique Marais €220-350", "Luxury palace €350+"],
            missions: [
              { title: "Classic Paris Mission", reward: 110, tasks: ["See Eiffel Tower", "Visit the Louvre", "Eat a fresh croissant"] },
              { title: "Rainy Day Culture Swap", reward: 90, tasks: ["Spend 2 hours in Musée d'Orsay", "Coffee stop in Saint-Germain", "Evening river cruise"] },
              { title: "Montmartre Photo Quest", reward: 70, tasks: ["Climb to Sacré-Cœur", "Take 3 street photos", "Try a local dessert"] },
            ],
          },
          {
            id: "nice",
            name: "Nice",
            country: "France",
            region: "Europe",
            type: ["beach", "coastal", "art", "food"],
            flightBase: 200,
            hotelNight: 130,
            transportDaily: 8,
            foodDaily: 40,
            weather: "sunny",
            rating: 4.5,
            reviewCount: 67000,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "French",
            visaRequired: false,
            safetyRating: 4.3,
            description: "Glamorous French Riviera city with pebble beaches, Belle Époque architecture, and Mediterranean charm.",
            imageUrls: [
              "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
              "https://images.unsplash.com/photo-1563720223185-110038563c5a?w=800&q=80",
              "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
              "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
            ],
            highlights: ["Promenade des Anglais", "Old Town", "Castle Hill", "Marc Chagall Museum"],
            historical: ["Cimiez Monastery", "Russian Orthodox Cathedral"],
            museums: ["Marc Chagall Museum", "Matisse Museum", "MAMAC"],
            bestMonths: ["May", "June", "September"],
            stayOptions: ["Budget guesthouse €60-100", "3-star hotel €100-170", "Promenade view €170-280", "Luxury €280+"],
            missions: [
              { title: "Riviera Beach Day", reward: 80, tasks: ["Walk Promenade des Anglais", "Swim in Mediterranean", "Eat socca in Old Town"] },
              { title: "Art Lover's Quest", reward: 95, tasks: ["Visit Chagall Museum", "See Matisse collection", "Photograph Castle Hill views"] },
              { title: "Monaco Day Trip", reward: 120, tasks: ["Take train to Monaco", "Visit Casino de Monte-Carlo", "See Prince's Palace"] },
            ],
          },
        ],
      },
      {
        name: "Spain",
        places: [
          {
            id: "barcelona",
            name: "Barcelona",
            country: "Spain",
            region: "Europe",
            type: ["beach", "architecture", "city", "art", "food"],
            flightBase: 190,
            hotelNight: 110,
            transportDaily: 8,
            foodDaily: 35,
            weather: "sunny",
            rating: 4.6,
            reviewCount: 189000,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "Spanish, Catalan",
            visaRequired: false,
            safetyRating: 4.1,
            description: "Gaudí's playground with stunning architecture, Mediterranean beaches, and vibrant culture.",
            imageUrls: [
              "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
              "https://images.unsplash.com/photo-1561577555-1a9c245e7c73?w=800&q=80",
              "https://images.unsplash.com/photo-1549643276-fbc2bd8747d4?w=800&q=80",
              "https://images.unsplash.com/photo-1565023169768-785a1388a538?w=800&q=80",
              "https://images.unsplash.com/photo-1572581197021-5a18a595323e?w=800&q=80",
            ],
            highlights: ["Sagrada Família", "Park Güell", "La Rambla", "Barceloneta Beach"],
            historical: ["Gothic Quarter", "Montjuïc Castle", "Palau de la Música"],
            museums: ["Picasso Museum", "MNAC", "Fundació Miró"],
            bestMonths: ["May", "June", "September", "October"],
            stayOptions: ["Budget hostel €35-60", "3-star hotel €80-140", "Design hotel €140-240", "Luxury €240+"],
            missions: [
              { title: "Gaudí Route", reward: 100, tasks: ["Visit Sagrada Família", "Walk Park Güell", "Take a mosaic photo"] },
              { title: "Old City Mission", reward: 80, tasks: ["Explore Gothic Quarter", "Try tapas", "Watch sunset near the port"] },
              { title: "Beach + City Combo", reward: 70, tasks: ["Morning at Barceloneta", "Lunch in El Born", "Night walk on La Rambla"] },
            ],
          },
          {
            id: "madrid",
            name: "Madrid",
            country: "Spain",
            region: "Europe",
            type: ["art", "museum", "city", "food", "nightlife"],
            flightBase: 185,
            hotelNight: 100,
            transportDaily: 7,
            foodDaily: 32,
            weather: "sunny",
            rating: 4.5,
            reviewCount: 142000,
            currency: "EUR (€)",
            timezone: "CET (UTC+1)",
            language: "Spanish",
            visaRequired: false,
            safetyRating: 4.4,
            description: "Spain's vibrant capital with world-class museums, royal palaces, and legendary nightlife.",
            imageUrls: [
              "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
              "https://images.unsplash.com/photo-1554048612-387768052bf7?w=800&q=80",
              "https://images.unsplash.com/photo-1597211883500-e4d6244980a2?w=800&q=80",
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
              "https://images.unsplash.com/photo-1550505091-2872602c32b0?w=800&q=80",
            ],
            highlights: ["Prado Museum", "Royal Palace", "Retiro Park", "Puerta del Sol"],
            historical: ["Plaza Mayor", "Gran Vía", "Templo de Debod"],
            museums: ["Prado", "Reina Sofía", "Thyssen-Bornemisza"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget hostel €30-55", "3-star hotel €70-120", "Boutique €120-200", "Luxury €200+"],
            missions: [
              { title: "Art Triangle Quest", reward: 120, tasks: ["Visit Prado Museum", "See Guernica at Reina Sofía", "Explore Thyssen collection"] },
              { title: "Tapas Crawl", reward: 85, tasks: ["Try jamón ibérico", "Eat patatas bravas", "Have churros con chocolate"] },
              { title: "Royal Madrid", reward: 75, tasks: ["Tour Royal Palace", "Walk Retiro Park", "Watch sunset at Debod temple"] },
            ],
          },
        ],
      },
      {
        name: "Greece",
        places: [
          {
            id: "athens",
            name: "Athens",
            country: "Greece",
            region: "Europe",
            type: ["historical", "museum", "city", "food"],
            flightBase: 210,
            hotelNight: 85,
            transportDaily: 7,
            foodDaily: 28,
            weather: "sunny",
            rating: 4.4,
            reviewCount: 98000,
            currency: "EUR (€)",
            timezone: "EET (UTC+2)",
            language: "Greek",
            visaRequired: false,
            safetyRating: 4.2,
            description: "Cradle of Western civilization with ancient monuments, excellent museums, and Mediterranean lifestyle.",
            imageUrls: [
              "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
              "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed92?w=800&q=80",
              "https://images.unsplash.com/photo-1555993539-1732b2200343?w=800&q=80",
              "https://images.unsplash.com/photo-1563720223185-110038563c5a?w=800&q=80",
              "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
            ],
            highlights: ["Acropolis", "Plaka", "Ancient Agora", "National Archaeological Museum"],
            historical: ["Parthenon", "Temple of Olympian Zeus", "Hadrian's Arch"],
            museums: ["Acropolis Museum", "National Archaeological Museum", "Benaki Museum"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget hotel €40-70", "3-star hotel €70-120", "Boutique Plaka €120-200", "Luxury €200+"],
            missions: [
              { title: "Ancient Athens Quest", reward: 115, tasks: ["Visit Acropolis", "Walk the Agora", "Try souvlaki in Plaka"] },
              { title: "Museum Day", reward: 75, tasks: ["Acropolis Museum visit", "Coffee break nearby", "Sunset from Lycabettus"] },
              { title: "Historic Streets Run", reward: 65, tasks: ["Explore Monastiraki", "Buy a local souvenir", "Capture a city panorama"] },
            ],
          },
          {
            id: "santorini",
            name: "Santorini",
            country: "Greece",
            region: "Europe",
            type: ["beach", "romantic", "volcanic", "luxury"],
            flightBase: 250,
            hotelNight: 200,
            transportDaily: 35,
            foodDaily: 55,
            weather: "sunny",
            rating: 4.8,
            reviewCount: 156000,
            currency: "EUR (€)",
            timezone: "EET (UTC+2)",
            language: "Greek",
            visaRequired: false,
            safetyRating: 4.7,
            description: "Iconic Cycladic island with white-washed villages, caldera views, and spectacular sunsets.",
            imageUrls: [
              "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
              "https://images.unsplash.com/photo-1613395877344-13d4c79e4df1?w=800&q=80",
              "https://images.unsplash.com/photo-1516483638261-41b805036457?w=800&q=80",
              "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
              "https://images.unsplash.com/photo-1563720223185-110038563c5a?w=800&q=80",
            ],
            highlights: ["Oia Sunset", "Fira Town", "Red Beach", "Akrotiri Ruins"],
            historical: ["Ancient Akrotiri", "Ancient Thera"],
            museums: ["Museum of Prehistoric Thera", "Maritime Museum"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget rooms €80-130", "3-star hotel €130-220", "Caldera-view boutique €220-450", "Luxury cave hotel €450+"],
            missions: [
              { title: "Sunset Quest", reward: 150, tasks: ["Watch Oia sunset", "Photograph blue domes", "Wine tasting at vineyard"] },
              { title: "Volcanic Adventure", reward: 120, tasks: ["Boat trip to volcano", "Swim in hot springs", "Visit Red Beach"] },
              { title: "Village Explorer", reward: 90, tasks: ["Walk Fira to Oia path", "Visit Pyrgos village", "Try fava and fresh fish"] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "asia",
    name: "Asia",
    countries: [
      {
        name: "Japan",
        places: [
          {
            id: "tokyo",
            name: "Tokyo",
            country: "Japan",
            region: "Asia",
            type: ["city", "food", "museum", "technology", "culture"],
            flightBase: 650,
            hotelNight: 140,
            transportDaily: 12,
            foodDaily: 45,
            weather: "rainy",
            rating: 4.7,
            reviewCount: 287000,
            currency: "JPY (¥)",
            timezone: "JST (UTC+9)",
            language: "Japanese",
            visaRequired: false,
            safetyRating: 4.9,
            description: "Mind-bending metropolis blending ultramodern technology with ancient traditions and incredible food.",
            imageUrls: [
              "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
              "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
              "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
              "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
              "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
            ],
            highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Meiji Shrine"],
            historical: ["Asakusa", "Imperial Palace", "Edo-Tokyo Museum"],
            museums: ["Tokyo National Museum", "teamLab Planets", "Miraikan"],
            bestMonths: ["March", "April", "October", "November"],
            stayOptions: ["Capsule hotel ¥3000-6000", "Business hotel ¥8000-15000", "Boutique ¥15000-25000", "Luxury ¥25000+"],
            missions: [
              { title: "Neon Tokyo Mission", reward: 130, tasks: ["Cross Shibuya", "Eat sushi", "Explore Akihabara at night"] },
              { title: "Rain-Proof Tokyo", reward: 95, tasks: ["Visit teamLab", "Coffee stop indoors", "Evening ramen mission"] },
              { title: "Old + New Tokyo", reward: 85, tasks: ["Visit Asakusa", "Go to Tokyo Tower", "Try a convenience store snack run"] },
            ],
          },
          {
            id: "kyoto",
            name: "Kyoto",
            country: "Japan",
            region: "Asia",
            type: ["historical", "temple", "nature", "culture", "traditional"],
            flightBase: 620,
            hotelNight: 130,
            transportDaily: 10,
            foodDaily: 40,
            weather: "sunny",
            rating: 4.8,
            reviewCount: 198000,
            currency: "JPY (¥)",
            timezone: "JST (UTC+9)",
            language: "Japanese",
            visaRequired: false,
            safetyRating: 4.9,
            description: "Ancient capital with thousands of temples, traditional geisha culture, and stunning gardens.",
            imageUrls: [
              "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
              "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
              "https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=800&q=80",
              "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80",
              "https://images.unsplash.com/photo-1480310940555-882b794810e1?w=800&q=80",
            ],
            highlights: ["Fushimi Inari", "Arashiyama Bamboo", "Kinkaku-ji", "Gion District"],
            historical: ["Kiyomizu-dera", "Nijō Castle", "Philosopher's Path"],
            museums: ["Kyoto National Museum", "Tea Ceremony Museum"],
            bestMonths: ["March", "April", "November"],
            stayOptions: ["Guesthouse ¥4000-8000", "Ryokan ¥10000-20000", "Boutique machiya ¥20000-35000", "Luxury ryokan ¥35000+"],
            missions: [
              { title: "Temple Trail", reward: 120, tasks: ["Walk Fushimi Inari", "Visit Kiyomizu-dera", "Drink matcha in Gion"] },
              { title: "Quiet Kyoto Day", reward: 85, tasks: ["Arashiyama bamboo visit", "Garden stop", "Traditional dinner"] },
              { title: "Cultural Kyoto", reward: 75, tasks: ["Visit Kyoto National Museum", "Try wagashi", "Sunset in Higashiyama"] },
            ],
          },
          {
            id: "osaka",
            name: "Osaka",
            country: "Japan",
            region: "Asia",
            type: ["food", "city", "entertainment", "culture"],
            flightBase: 630,
            hotelNight: 110,
            transportDaily: 10,
            foodDaily: 42,
            weather: "rainy",
            rating: 4.5,
            reviewCount: 145000,
            currency: "JPY (¥)",
            timezone: "JST (UTC+9)",
            language: "Japanese",
            visaRequired: false,
            safetyRating: 4.8,
            description: "Japan's kitchen with incredible street food, modern attractions, and friendly locals.",
            imageUrls: [
              "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
              "https://images.unsplash.com/photo-1555993539-1732b2200343?w=800&q=80",
              "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
              "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
              "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
            ],
            highlights: ["Dotonbori", "Osaka Castle", "Universal Studios Japan", "Kuromon Market"],
            historical: ["Osaka Castle", "Shitennoji Temple", "Sumiyoshi Taisha"],
            museums: ["Osaka Aquarium", "Cup Noodles Museum", "National Museum of Art"],
            bestMonths: ["March", "April", "October", "November"],
            stayOptions: ["Budget hotel ¥5000-9000", "3-star hotel ¥9000-16000", "Upscale ¥16000-28000", "Luxury ¥28000+"],
            missions: [
              { title: "Foodie Paradise", reward: 140, tasks: ["Eat takoyaki in Dotonbori", "Try okonomiyaki", "Visit Kuromon Market"] },
              { title: "Thrill Seeker", reward: 110, tasks: ["Ride at Universal Studios", "See Osaka from Umeda Sky", "Try kushikatsu"] },
              { title: "Castle & Culture", reward: 80, tasks: ["Tour Osaka Castle", "Visit Shitennoji", "Relax in Namba Parks"] },
            ],
          },
        ],
      },
      {
        name: "Thailand",
        places: [
          {
            id: "bangkok",
            name: "Bangkok",
            country: "Thailand",
            region: "Asia",
            type: ["city", "food", "historical", "shopping", "nightlife"],
            flightBase: 480,
            hotelNight: 55,
            transportDaily: 8,
            foodDaily: 18,
            weather: "sunny",
            rating: 4.4,
            reviewCount: 234000,
            currency: "THB (฿)",
            timezone: "ICT (UTC+7)",
            language: "Thai",
            visaRequired: false,
            safetyRating: 4.0,
            description: "Vibrant capital with ornate temples, bustling markets, world-class street food, and legendary nightlife.",
            imageUrls: [
              "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
              "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
              "https://images.unsplash.com/photo-1598967677968-4c18e6d34a97?w=800&q=80",
              "https://images.unsplash.com/photo-1506665531195-356602d85a0f?w=800&q=80",
              "https://images.unsplash.com/photo-1551818121-8c89606a5e8f?w=800&q=80",
            ],
            highlights: ["Grand Palace", "Wat Pho", "Chatuchak Market", "Chao Phraya River"],
            historical: ["Wat Arun", "Wat Pho", "Democracy Monument"],
            museums: ["National Museum", "Jim Thompson House", "Erawan Museum"],
            bestMonths: ["November", "December", "January", "February"],
            stayOptions: ["Budget guesthouse ฿800-1500", "3-star hotel ฿1500-3000", "Riverside luxury ฿3000-6000", "5-star ฿6000+"],
            missions: [
              { title: "Bangkok Street Mission", reward: 100, tasks: ["Visit Wat Arun", "Eat street pad thai", "Night market stop"] },
              { title: "River + Temple Run", reward: 80, tasks: ["Take river boat", "Visit Grand Palace", "Sunset on the river"] },
              { title: "Food Quest", reward: 70, tasks: ["Try mango sticky rice", "Taste Thai iced tea", "Find a local café"] },
            ],
          },
          {
            id: "chiang-mai",
            name: "Chiang Mai",
            country: "Thailand",
            region: "Asia",
            type: ["culture", "nature", "temple", "adventure", "food"],
            flightBase: 450,
            hotelNight: 40,
            transportDaily: 10,
            foodDaily: 15,
            weather: "sunny",
            rating: 4.6,
            reviewCount: 112000,
            currency: "THB (฿)",
            timezone: "ICT (UTC+7)",
            language: "Thai",
            visaRequired: false,
            safetyRating: 4.5,
            description: "Cultural hub of Northern Thailand with ancient temples, mountain scenery, and elephant sanctuaries.",
            imageUrls: [
              "https://images.unsplash.com/photo-1598967677968-4c18e6d34a97?w=800&q=80",
              "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
              "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
              "https://images.unsplash.com/photo-1506665531195-356602d85a0f?w=800&q=80",
              "https://images.unsplash.com/photo-1551818121-8c89606a5e8f?w=800&q=80",
            ],
            highlights: ["Doi Suthep", "Old City Temples", "Night Bazaar", "Elephant Sanctuary"],
            historical: ["Wat Chedi Luang", "Wat Phra Singh", "City Wall"],
            museums: ["Lanna Folklife Museum", "Art in Paradise", "Hill Tribe Museum"],
            bestMonths: ["November", "December", "January", "February"],
            stayOptions: ["Budget guesthouse ฿400-800", "Boutique hotel ฿800-1800", "Resort ฿1800-3500", "Luxury ฿3500+"],
            missions: [
              { title: "Temple Explorer", reward: 110, tasks: ["Visit Doi Suthep", "Explore Old City temples", "Make merit with monks"] },
              { title: "Nature Adventure", reward: 130, tasks: ["Elephant sanctuary visit", "Zip-lining experience", "Waterfall hike"] },
              { title: "Cultural Immersion", reward: 90, tasks: ["Thai cooking class", "Night bazaar shopping", "Traditional massage"] },
            ],
          },
          {
            id: "phuket",
            name: "Phuket",
            country: "Thailand",
            region: "Asia",
            type: ["beach", "island", "diving", "nightlife", "luxury"],
            flightBase: 490,
            hotelNight: 70,
            transportDaily: 15,
            foodDaily: 22,
            weather: "sunny",
            rating: 4.3,
            reviewCount: 178000,
            currency: "THB (฿)",
            timezone: "ICT (UTC+7)",
            language: "Thai",
            visaRequired: false,
            safetyRating: 4.1,
            description: "Thailand's largest island with stunning beaches, limestone cliffs, and vibrant Patong nightlife.",
            imageUrls: [
              "https://images.unsplash.com/photo-1589394815804-98e258e20f61?w=800&q=80",
              "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
              "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
              "https://images.unsplash.com/photo-1506665531195-356602d85a0f?w=800&q=80",
              "https://images.unsplash.com/photo-1551818121-8c89606a5e8f?w=800&q=80",
            ],
            highlights: ["Patong Beach", "Phi Phi Islands", "Big Buddha", "Phang Nga Bay"],
            historical: ["Old Phuket Town", "Wat Chalong"],
            museums: ["Thai Hua Museum", "Phuket Trickeye Museum"],
            bestMonths: ["November", "December", "January", "February", "March"],
            stayOptions: ["Budget guesthouse ฿600-1200", "Beach hotel ฿1200-2500", "Resort ฿2500-5000", "Luxury villa ฿5000+"],
            missions: [
              { title: "Island Hopping", reward: 140, tasks: ["Phi Phi day trip", "Snorkel at Maya Bay", "Sunset cruise"] },
              { title: "Beach Day", reward: 80, tasks: ["Relax at Patong", "Try water sports", "Beach club experience"] },
              { title: "Culture & Views", reward: 75, tasks: ["Visit Big Buddha", "Explore Old Town", "Watch Simon Cabaret"] },
            ],
          },
        ],
      },
      {
        name: "Singapore",
        places: [
          {
            id: "singapore",
            name: "Singapore",
            country: "Singapore",
            region: "Asia",
            type: ["city", "food", "modern", "gardens", "shopping"],
            flightBase: 550,
            hotelNight: 180,
            transportDaily: 10,
            foodDaily: 35,
            weather: "rainy",
            rating: 4.7,
            reviewCount: 167000,
            currency: "SGD (S$)",
            timezone: "SGT (UTC+8)",
            language: "English, Malay, Mandarin, Tamil",
            visaRequired: false,
            safetyRating: 4.9,
            description: "Ultra-modern city-state with futuristic architecture, world-class food, and lush gardens.",
            imageUrls: [
              "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
              "https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?w=800&q=80",
              "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
              "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
              "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
            ],
            highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Chinatown"],
            historical: ["Raffles Hotel", "Buddha Tooth Relic Temple", "National Museum"],
            museums: ["ArtScience Museum", "National Gallery", "Asian Civilisations Museum"],
            bestMonths: ["February", "March", "April"],
            stayOptions: ["Budget hotel S$80-140", "3-star hotel S$140-250", "Marina Bay S$250-450", "Luxury S$450+"],
            missions: [
              { title: "Future City Quest", reward: 130, tasks: ["Visit Gardens by the Bay", "Marina Bay Sands SkyPark", "Jewel Changi visit"] },
              { title: "Food Paradise", reward: 110, tasks: ["Eat at hawker center", "Try chili crab", "Taste laksa"] },
              { title: "Cultural Mosaic", reward: 90, tasks: ["Explore Chinatown", "Visit Little India", "Walk through Kampong Glam"] },
            ],
          },
          {
            id: "dubai",
            name: "Dubai",
            country: "UAE",
            region: "Asia",
            type: ["luxury", "shopping", "desert", "modern"],
            flightBase: 420,
            hotelNight: 150,
            transportDaily: 20,
            foodDaily: 50,
            weather: "sunny",
            rating: 4.6,
            reviewCount: 198000,
            currency: "AED",
            timezone: "GST (UTC+4)",
            language: "Arabic, English",
            visaRequired: false,
            safetyRating: 4.8,
            description: "Futuristic city with ultramodern architecture, luxury shopping, and desert adventures.",
            imageUrls: [
              "https://images.unsplash.com/photo-1512453979798-5ea936a7d40c?w=800&q=80",
              "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
              "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
              "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80",
              "https://images.unsplash.com/photo-1526491109672-7473021e62a5?w=800&q=80",
            ],
            highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"],
            historical: ["Al Fahidi Fort", "Dubai Museum", "Jumeirah Mosque"],
            museums: ["Dubai Museum", "Etihad Museum", "Coffee Museum"],
            bestMonths: ["November", "December", "January", "February", "March"],
            stayOptions: ["Budget hotel AED 200-400", "3-star AED 400-800", "Luxury AED 800-2000", "Ultra-luxury AED 2000+"],
            missions: [
              { title: "Burj Khalifa Experience", reward: 150, tasks: ["Visit At The Top (148th floor)", "Dubai Fountain show", "Dubai Mall aquarium"] },
              { title: "Desert Adventure", reward: 130, tasks: ["Desert safari", "Camel ride", "Bedouin camp dinner"] },
              { title: "Luxury Dubai", reward: 110, tasks: ["Palm Jumeirah monorail", "Burj Al Arab photo", "Marina yacht cruise"] },
            ],
          },
          {
            id: "istanbul",
            name: "Istanbul",
            country: "Turkey",
            region: "Asia",
            type: ["historical", "culture", "food", "shopping"],
            flightBase: 180,
            hotelNight: 80,
            transportDaily: 6,
            foodDaily: 25,
            weather: "sunny",
            rating: 4.5,
            reviewCount: 167000,
            currency: "TRY",
            timezone: "TRT (UTC+3)",
            language: "Turkish",
            visaRequired: false,
            safetyRating: 4.0,
            description: "Where East meets West - ancient Byzantine and Ottoman heritage in a vibrant modern city.",
            imageUrls: [
              "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
              "https://images.unsplash.com/photo-1541432904779-dd96f786f6ea?w=800&q=80",
              "https://images.unsplash.com/photo-1565023169768-785a1388a538?w=800&q=80",
              "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80",
              "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&q=80",
            ],
            highlights: ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Grand Bazaar"],
            historical: ["Hagia Sophia", "Topkapi Palace", "Basilica Cistern", "Walls of Constantinople"],
            museums: ["Topkapi Palace Museum", "Istanbul Archaeology Museums", "Turkish and Islamic Arts Museum"],
            bestMonths: ["April", "May", "September", "October"],
            stayOptions: ["Budget hotel ₺800-1500", "3-star ₺1500-3000", "Boutique Sultanahmet ₺3000-5000", "Luxury ₺5000+"],
            missions: [
              { title: "Ottoman Legacy", reward: 130, tasks: ["Visit Topkapi Palace", "See Blue Mosque", "Explore Grand Bazaar"] },
              { title: "Byzantine History", reward: 110, tasks: ["Hagia Sophia visit", "Basilica Cistern", "Chora Church"] },
              { title: "Bosphorus Experience", reward: 90, tasks: ["Bosphorus cruise", "Asian side visit", "Turkish bath"] },
            ],
          },
          {
            id: "seoul",
            name: "Seoul",
            country: "South Korea",
            region: "Asia",
            type: ["city", "culture", "food", "shopping", "technology"],
            flightBase: 580,
            hotelNight: 100,
            transportDaily: 8,
            foodDaily: 30,
            weather: "rainy",
            rating: 4.6,
            reviewCount: 178000,
            currency: "KRW",
            timezone: "KST (UTC+9)",
            language: "Korean",
            visaRequired: false,
            safetyRating: 4.7,
            description: "Dynamic capital blending ancient palaces, K-pop culture, cutting-edge technology, and amazing food.",
            imageUrls: [
              "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
              "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
              "https://images.unsplash.com/photo-1548115184-bc6544d03675?w=800&q=80",
              "https://images.unsplash.com/photo-1517154596051-c6b5c62e3276?w=800&q=80",
              "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
            ],
            highlights: ["Gyeongbokgung Palace", "Myeongdong", "Hongdae", "N Seoul Tower"],
            historical: ["Gyeongbokgung", "Changdeokgung", "Bukchon Hanok Village", "Jongmyo Shrine"],
            museums: ["National Museum of Korea", "War Memorial", "Palace Museums"],
            bestMonths: ["March", "April", "May", "September", "October"],
            stayOptions: ["Budget guesthouse ₩40000-80000", "3-star hotel ₩80000-150000", "Boutique ₩150000-280000", "Luxury ₩280000+"],
            missions: [
              { title: "Palace Explorer", reward: 120, tasks: ["Gyeongbokgung Palace", "Changdeokgung Secret Garden", "Bukchon Hanok Village"] },
              { title: "K-Pop Culture", reward: 110, tasks: ["Hongdae street performance", "K-pop merchandise shopping", "Korean BBQ dinner"] },
              { title: "Modern Seoul", reward: 95, tasks: ["N Seoul Tower", "Gangnam shopping", "Han River picnic"] },
            ],
          },
          {
            id: "bali",
            name: "Bali",
            country: "Indonesia",
            region: "Asia",
            type: ["beach", "culture", "nature", "spiritual", "luxury"],
            flightBase: 450,
            hotelNight: 70,
            transportDaily: 12,
            foodDaily: 20,
            weather: "sunny",
            rating: 4.6,
            reviewCount: 245000,
            currency: "IDR",
            timezone: "WITA (UTC+8)",
            language: "Indonesian, Balinese",
            visaRequired: false,
            safetyRating: 4.2,
            description: "Island of the Gods with stunning temples, rice terraces, beaches, and vibrant culture.",
            imageUrls: [
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
              "https://images.unsplash.com/photo-1555993539-1732b2200343?w=800&q=80",
              "https://images.unsplash.com/photo-1518548419970-5858c3701c64?w=800&q=80",
              "https://images.unsplash.com/photo-1572252009996-26e258007651?w=800&q=80",
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            ],
            highlights: ["Uluwatu Temple", "Tegalalang Rice Terrace", "Tanah Lot", "Seminyak Beach"],
            historical: ["Uluwatu Temple", "Tanah Lot", "Besakih Temple", "Goa Gajah"],
            museums: ["Bali Museum", "Agung Rai Museum", "Blanco Renaissance Museum"],
            bestMonths: ["April", "May", "June", "September", "October"],
            stayOptions: ["Budget guesthouse Rp 200K-500K", "3-star Rp 500K-1.2M", "Villa Rp 1.2M-3M", "Luxury Rp 3M+"],
            missions: [
              { title: "Temple Quest", reward: 130, tasks: ["Uluwatu sunset", "Tanah Lot visit", "Water blessing at Tirta Empul"] },
              { title: "Nature Bali", reward: 120, tasks: ["Tegalalang Rice Terrace", "Mount Batur sunrise", "Sekumpul Waterfall"] },
              { title: "Beach & Wellness", reward: 100, tasks: ["Seminyak Beach", "Yoga class", "Traditional massage"] },
            ],
          },
        ],
      },
    ],
  },
];

export const travelStyles: Record<string, { label: string; hotel: number; food: number; activities: number }> = {
  budget: { label: "Budget", hotel: 0.7, food: 0.7, activities: 15 },
  standard: { label: "Standard", hotel: 1.0, food: 1.0, activities: 35 },
  comfort: { label: "Comfort", hotel: 1.4, food: 1.3, activities: 60 },
  luxury: { label: "Luxury", hotel: 2.2, food: 1.8, activities: 120 },
};

export const transportModes: Record<string, { label: string; multiplier: number; icon: LucideIcon }> = {
  flight: { label: "Flight", multiplier: 1.0, icon: Plane },
  train: { label: "Train", multiplier: 0.65, icon: Train },
  bus: { label: "Bus", multiplier: 0.45, icon: Bus },
};

export function flattenPlaces(data: CatalogRegion[]): FlatPlace[] {
  return data.flatMap((continent) =>
    continent.countries.flatMap((country) =>
      country.places.map((place) => ({
        ...place,
        continentId: continent.id,
        continentName: continent.name,
        countryGroup: country.name,
      }))
    )
  );
}

export const allPlaces = flattenPlaces(catalog);

export function formatMoney(value: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function buildItinerary(place: Place, days: number) {
  const missionCount = place.missions.length;
  const safeDays = Math.max(1, days);
  const entries = [];
  for (let i = 0; i < safeDays; i += 1) {
    const mission = place.missions[i % missionCount];
    entries.push({
      day: i + 1,
      title: mission.title,
      tasks: mission.tasks,
      reward: mission.reward,
    });
  }
  return entries;
}

export function buildWeatherSwitch(place: Place) {
  if (place.weather === "rainy") {
    return {
      title: "Rain detected: indoor mission swap",
      items: [
        `Prioritize ${place.museums[0] || "an indoor museum"}`,
        "Add a café stop and covered market break",
        "Move outdoor photo mission to sunset if weather improves",
      ],
    };
  }
  return {
    title: "Clear weather: outdoor mission boost",
    items: [
      `Start with ${place.highlights[0]}`,
      "Use walking route between main landmarks",
      "Schedule photos near golden hour",
    ],
  };
}

export function calculateTrip(
  place: Place,
  days: number,
  travelers: number,
  styleKey: string,
  transportKey: string
) {
  const safeDays = Math.max(2, Number(days) || 2);
  const safeTravelers = Math.max(1, Number(travelers) || 1);
  const style = travelStyles[styleKey] || travelStyles.standard;
  const transport = transportModes[transportKey] || transportModes.flight;
  
  // Realistic calculation based on actual travel costs
  const mainTransport = place.flightBase * transport.multiplier * safeTravelers;
  const roomsNeeded = Math.ceil(safeTravelers / 2);
  const accommodation = place.hotelNight * style.hotel * safeDays * roomsNeeded;
  const localTransport = place.transportDaily * safeDays * safeTravelers;
  const food = place.foodDaily * style.food * safeDays * safeTravelers;
  const activities = style.activities * safeDays * safeTravelers;
  
  // Add taxes and fees (realistic booking.com style)
  const taxes = (accommodation * 0.12); // ~12% hotel taxes
  const bookingFees = (mainTransport + accommodation) * 0.05; // 5% booking fees
  
  const subtotal = mainTransport + accommodation + localTransport + food + activities;
  const total = subtotal + taxes + bookingFees;
  
  return {
    mainTransport,
    accommodation,
    localTransport,
    food,
    activities,
    taxes,
    bookingFees,
    subtotal,
    total,
    perPerson: total / safeTravelers,
    breakdown: {
      flights: mainTransport,
      hotels: accommodation + taxes,
      food: food,
      transport: localTransport,
      activities: activities,
      fees: bookingFees,
    }
  };
}
