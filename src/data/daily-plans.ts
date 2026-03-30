// Comprehensive daily plans with real attractions, times, and details

export interface DailyPlan {
  day: number;
  morning: {
    activity: string;
    location: string;
    time: string;
    duration: string;
    cost: number;
    description: string;
    tips: string;
  };
  afternoon: {
    activity: string;
    location: string;
    time: string;
    duration: string;
    cost: number;
    description: string;
    tips: string;
  };
  evening: {
    activity: string;
    location: string;
    time: string;
    duration: string;
    cost: number;
    description: string;
    tips: string;
  };
  tip: string;
  totalCost: number;
}

export const dailyPlans: Record<string, DailyPlan[]> = {
  // ROME - 7 Day Detailed Itinerary
  rome: [
    {
      day: 1,
      morning: {
        activity: "Colosseum & Roman Forum",
        location: "Piazza del Colosseo, 1",
        time: "8:30 AM - 12:00 PM",
        duration: "3.5 hours",
        cost: 16,
        description: "Explore the iconic amphitheater and ancient Roman marketplace with skip-the-line access",
        tips: "Book tickets online in advance. Arrive early to avoid crowds."
      },
      afternoon: {
        activity: "Palatine Hill & Circus Maximus",
        location: "Via di San Gregorio, 30",
        time: "12:30 PM - 4:00 PM",
        duration: "3.5 hours",
        cost: 0,
        description: "Walk through the birthplace of Rome and see the ancient chariot racing stadium",
        tips: "Included with Colosseum ticket. Bring water and wear comfortable shoes."
      },
      evening: {
        activity: "Trastevere Dinner & Walk",
        location: "Trastevere District",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 45,
        description: "Enjoy authentic Roman cuisine in charming cobblestone streets",
        tips: "Try cacio e pepe at Da Enzo or carbonara at Checcaccio."
      },
      tip: "Start early to beat the crowds at the Colosseum. The combined ticket is valid for 24 hours.",
      totalCost: 61
    },
    {
      day: 2,
      morning: {
        activity: "Vatican Museums & Sistine Chapel",
        location: "Viale Vaticano",
        time: "8:00 AM - 12:30 PM",
        duration: "4.5 hours",
        cost: 20,
        description: "Marvel at Renaissance masterpieces and Michelangelo's ceiling",
        tips: "Book earliest entry time. Dress code: covered shoulders and knees."
      },
      afternoon: {
        activity: "St. Peter's Basilica & Dome",
        location: "Piazza San Pietro",
        time: "1:00 PM - 4:00 PM",
        duration: "3 hours",
        cost: 10,
        description: "Visit the world's largest church and climb the dome for panoramic views",
        tips: "Free entry to basilica. Dome climb costs €10. Security lines can be long."
      },
      evening: {
        activity: "Castel Sant'Angelo & Sunset",
        location: "Lungotevere Castello, 50",
        time: "5:00 PM - 8:00 PM",
        duration: "3 hours",
        cost: 15,
        description: "Explore the ancient mausoleum with stunning city views",
        tips: "Best views from the top terrace at sunset."
      },
      tip: "Vatican is closed on Sundays (except last Sunday of month). Book skip-the-line tickets.",
      totalCost: 45
    },
    {
      day: 3,
      morning: {
        activity: "Pantheon & Piazza Navona",
        location: "Piazza della Rotonda",
        time: "9:00 AM - 12:00 PM",
        duration: "3 hours",
        cost: 5,
        description: "Visit the best-preserved Roman building and baroque square",
        tips: "Pantheon now requires €5 entry on weekends. Free on weekdays."
      },
      afternoon: {
        activity: "Trevi Fountain & Spanish Steps",
        location: "Piazza di Trevi",
        time: "12:30 PM - 4:00 PM",
        duration: "3.5 hours",
        cost: 0,
        description: "Toss a coin in the fountain and climb the famous steps",
        tips: "Visit early morning or late evening to avoid massive crowds."
      },
      evening: {
        activity: "Campo de' Fiori & Jewish Ghetto",
        location: "Campo de' Fiori",
        time: "5:00 PM - 9:00 PM",
        duration: "4 hours",
        cost: 40,
        description: "Experience vibrant nightlife and try Jewish-Roman specialties",
        tips: "Try carciofi alla giudia (fried artichokes) at Ba'Ghetto."
      },
      tip: "Many fountains have potable water - bring a refillable bottle.",
      totalCost: 45
    },
    {
      day: 4,
      morning: {
        activity: "Borghese Gallery & Gardens",
        location: "Piazzale Scipione Borghese, 5",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 20,
        description: "See Bernini sculptures and Caravaggio paintings in stunning villa",
        tips: "Reservation required. Limited to 2 hours inside gallery."
      },
      afternoon: {
        activity: "Villa Borghese Pincio Terrace",
        location: "Villa Borghese",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 0,
        description: "Relax in Rome's largest park with panoramic city views",
        tips: "Rent a rowboat on the lake (€5/hour). Great picnic spot."
      },
      evening: {
        activity: "Via del Corso Shopping & Dinner",
        location: "Via del Corso",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 50,
        description: "Shop on Rome's main street and enjoy aperitivo",
        tips: "Happy hour 6-9 PM at many bars includes buffet."
      },
      tip: "Borghese Gallery is closed Mondays. Book weeks in advance.",
      totalCost: 70
    },
    {
      day: 5,
      morning: {
        activity: "Day Trip to Ostia Antica",
        location: "Ostia Antica",
        time: "8:30 AM - 1:00 PM",
        duration: "4.5 hours",
        cost: 14,
        description: "Explore remarkably preserved ancient Roman port city",
        tips: "Take Metro B to Piramide, then Roma-Lido train to Ostia Antica."
      },
      afternoon: {
        activity: "Ostia Beach & Lunch",
        location: "Lido di Ostia",
        time: "1:30 PM - 5:00 PM",
        duration: "3.5 hours",
        cost: 30,
        description: "Relax on Mediterranean beaches and enjoy seafood",
        tips: "Try fresh fish at one of the beachfront restaurants."
      },
      evening: {
        activity: "Return to Rome & Testaccio",
        location: "Testaccio District",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 35,
        description: "Experience authentic Roman neighborhood nightlife",
        tips: "Visit MACRO museum or enjoy live music at Monk Club."
      },
      tip: "Ostia Antica is less crowded than Pompeii and equally impressive.",
      totalCost: 79
    },
    {
      day: 6,
      morning: {
        activity: "Catacombs & Appian Way",
        location: "Via Appia Antica, 110",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 15,
        description: "Explore underground Christian burial sites and ancient road",
        tips: "Rent bikes to cycle the Appian Way. Multiple catacomb options."
      },
      afternoon: {
        activity: "Baths of Caracalla",
        location: "Viale delle Terme di Caracalla",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 10,
        description: "Visit massive ancient Roman public baths",
        tips: "Audio guide recommended. Less crowded than main sites."
      },
      evening: {
        activity: "Aventine Hill & Orange Garden",
        location: "Via di Santa Sabina",
        time: "5:30 PM - 8:30 PM",
        duration: "3 hours",
        cost: 0,
        description: "Enjoy sunset views and Knights of Malta keyhole",
        tips: "Visit Santa Maria del Priorato for the famous keyhole view."
      },
      tip: "Catacombs require guided tours. Book in advance for English tours.",
      totalCost: 25
    },
    {
      day: 7,
      morning: {
        activity: "Capitoline Museums",
        location: "Piazza del Campidoglio, 1",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 15,
        description: "World's oldest public museums with ancient Roman art",
        tips: "Free first Sunday of month. Great views from terrace."
      },
      afternoon: {
        activity: "Last Shopping & Gelato Tour",
        location: "Centro Storico",
        time: "2:00 PM - 6:00 PM",
        duration: "4 hours",
        cost: 40,
        description: "Final souvenir shopping and artisanal gelato tasting",
        tips: "Best gelato: Giolitti, Fatamorgana, or Come il Latte."
      },
      evening: {
        activity: "Farewell Dinner with View",
        location: "Aroma Restaurant or La Terrazza",
        time: "7:00 PM - 10:00 PM",
        duration: "3 hours",
        cost: 80,
        description: "Celebrate your trip with rooftop dining overlooking Colosseum",
        tips: "Reserve weeks ahead. Dress code smart casual."
      },
      tip: "Consider Roma Pass for public transport and museum discounts.",
      totalCost: 135
    }
  ],

  // PARIS - 7 Day Detailed Itinerary
  paris: [
    {
      day: 1,
      morning: {
        activity: "Eiffel Tower Summit",
        location: "Champ de Mars, 5 Avenue Anatole France",
        time: "8:30 AM - 11:30 AM",
        duration: "3 hours",
        cost: 28,
        description: "Ascend to the top of Paris's iconic iron lady",
        tips: "Book online 60 days ahead. Security opens at 8:30 AM."
      },
      afternoon: {
        activity: "Seine River Cruise & Lunch",
        location: "Port de la Bourdonnais",
        time: "12:00 PM - 3:00 PM",
        duration: "3 hours",
        cost: 35,
        description: "See Paris from the water with commentary",
        tips: "Bateaux Mouches or Vedettes de Paris. Lunch cruise available."
      },
      evening: {
        activity: "Trocadéro & Champ de Mars",
        location: "Place du Trocadéro",
        time: "5:00 PM - 9:00 PM",
        duration: "4 hours",
        cost: 0,
        description: "Best Eiffel Tower views and evening sparkle show",
        tips: "Tower sparkles 5 min every hour after sunset."
      },
      tip: "Book Eiffel Tower tickets exactly 60 days ahead for summit access.",
      totalCost: 63
    },
    {
      day: 2,
      morning: {
        activity: "Louvre Museum",
        location: "Rue de Rivoli",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 17,
        description: "World's largest art museum with Mona Lisa",
        tips: "Enter via Carrousel du Louvre. Free first Friday evening."
      },
      afternoon: {
        activity: "Tuileries & Place de la Concorde",
        location: "Jardin des Tuileries",
        time: "1:30 PM - 4:30 PM",
        duration: "3 hours",
        cost: 0,
        description: "Stroll through formal gardens to famous square",
        tips: "Grab crêpes from garden kiosks. Great photo spots."
      },
      evening: {
        activity: "Opera Garnier & Galeries Lafayette",
        location: "Place de l'Opéra",
        time: "5:00 PM - 9:00 PM",
        duration: "4 hours",
        cost: 14,
        description: "Tour stunning opera house and rooftop views",
        tips: "Free rooftop access from Galeries Lafayette."
      },
      tip: "Louvre is closed Tuesdays. Arrive at opening to avoid crowds.",
      totalCost: 31
    },
    {
      day: 3,
      morning: {
        activity: "Montmartre & Sacré-Cœur",
        location: "35 Rue du Chevalier de la Barre",
        time: "8:00 AM - 12:00 PM",
        duration: "4 hours",
        cost: 0,
        description: "Explore artistic hilltop village and basilica",
        tips: "Take funicular or climb 222 steps. Artists in Place du Tertre."
      },
      afternoon: {
        activity: "Moulin Rouge & Pigalle",
        location: "82 Boulevard de Clichy",
        time: "12:30 PM - 4:00 PM",
        duration: "3.5 hours",
        cost: 25,
        description: "See famous cabaret exterior and bohemian neighborhood",
        tips: "Show tickets €100+. Free to photograph exterior."
      },
      evening: {
        activity: "Saint-Germain-des-Prés",
        location: "Boulevard Saint-Germain",
        time: "5:00 PM - 10:00 PM",
        duration: "5 hours",
        cost: 50,
        description: "Historic literary cafés and jazz clubs",
        tips: "Café de Flore or Les Deux Magots for Hemingway vibes."
      },
      tip: "Montmartre is very hilly. Wear comfortable walking shoes.",
      totalCost: 75
    },
    {
      day: 4,
      morning: {
        activity: "Musée d'Orsay",
        location: "1 Rue de la Légion d'Honneur",
        time: "9:30 AM - 1:00 PM",
        duration: "3.5 hours",
        cost: 16,
        description: "Impressionist masterpieces in stunning Beaux-Arts station",
        tips: "Closed Mondays. Enter via side entrance for shorter lines."
      },
      afternoon: {
        activity: "Latin Quarter & Panthéon",
        location: "Place du Panthéon",
        time: "2:00 PM - 5:30 PM",
        duration: "3.5 hours",
        cost: 11,
        description: "Historic student quarter and mausoleum of great French",
        tips: "Shakespeare and Company bookstore nearby."
      },
      evening: {
        activity: "Luxembourg Gardens & Dinner",
        location: "Rue de Médicis",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 45,
        description: "Relax in elegant gardens and enjoy Left Bank dining",
        tips: "Watch puppet show or sail toy boats in fountain."
      },
      tip: "Orsay free first Sunday. Combined ticket with Orangerie available.",
      totalCost: 72
    },
    {
      day: 5,
      morning: {
        activity: "Versailles Palace Day Trip",
        location: "Place d'Armes, Versailles",
        time: "8:00 AM - 1:00 PM",
        duration: "5 hours",
        cost: 27,
        description: "Opulent palace of Louis XIV with Hall of Mirrors",
        tips: "Take RER C from Paris. Book timed entry in advance."
      },
      afternoon: {
        activity: "Gardens of Versailles & Marie-Antoinette Estate",
        location: "Versailles Gardens",
        time: "1:30 PM - 5:00 PM",
        duration: "3.5 hours",
        cost: 10,
        description: "Explore vast formal gardens and Petit Trianon",
        tips: "Rent bikes or golf cart. Fountain shows weekends."
      },
      evening: {
        activity: "Return to Paris & Evening Stroll",
        location: "Le Marais",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 40,
        description: "Medieval streets with trendy restaurants and shops",
        tips: "Try falafel at L'As du Fallafel. Closed Saturdays."
      },
      tip: "Versailles closed Mondays. Palace + Gardens passport recommended.",
      totalCost: 77
    },
    {
      day: 6,
      morning: {
        activity: "Sainte-Chapelle & Conciergerie",
        location: "8 Boulevard du Palais",
        time: "9:00 AM - 12:00 PM",
        duration: "3 hours",
        cost: 18,
        description: "Gothic masterpiece with stunning stained glass",
        tips: "Visit on sunny day for best light through windows."
      },
      afternoon: {
        activity: "Notre-Dame & Île de la Cité",
        location: "6 Parvis Notre-Dame",
        time: "12:30 PM - 4:00 PM",
        duration: "3.5 hours",
        cost: 0,
        description: "See restored cathedral exterior and historic island",
        tips: "Reopening December 2024. Exterior viewing only until then."
      },
      evening: {
        activity: "Centre Pompidou & Sunset",
        location: "Place Georges-Pompidou",
        time: "5:00 PM - 9:00 PM",
        duration: "4 hours",
        cost: 15,
        description: "Modern art museum with panoramic city views",
        tips: "Free rooftop access. Closed Tuesdays."
      },
      tip: "Combined ticket for Sainte-Chapelle + Conciergerie saves money.",
      totalCost: 33
    },
    {
      day: 7,
      morning: {
        activity: "Musée de l'Orangerie",
        location: "Jardin des Tuileries",
        time: "9:00 AM - 11:30 AM",
        duration: "2.5 hours",
        cost: 12,
        description: "Monet's Water Lilies in purpose-built oval rooms",
        tips: "Small museum, can be seen in 2 hours. Closed Tuesdays."
      },
      afternoon: {
        activity: "Champs-Élysées & Arc de Triomphe",
        location: "Place Charles de Gaulle",
        time: "12:00 PM - 5:00 PM",
        duration: "5 hours",
        cost: 13,
        description: "Shop famous avenue and climb triumphal arch",
        tips: "Arc entry from underground passage. Great Champs-Élysées views."
      },
      evening: {
        activity: "Farewell Seine Dinner Cruise",
        location: "Port de Suffren",
        time: "7:00 PM - 10:00 PM",
        duration: "3 hours",
        cost: 90,
        description: "Gourmet dinner cruise past illuminated monuments",
        tips: "Bateaux Parisiens or Ducasse sur Seine for fine dining."
      },
      tip: "Paris Museum Pass covers most museums. Calculate if worth it.",
      totalCost: 115
    }
  ],

  // BARCELONA - 5 Day Detailed Itinerary
  barcelona: [
    {
      day: 1,
      morning: {
        activity: "Sagrada Família",
        location: "Carrer de Mallorca, 401",
        time: "9:00 AM - 12:00 PM",
        duration: "3 hours",
        cost: 26,
        description: "Gaudí's unfinished masterpiece with stunning facades",
        tips: "Book online weeks ahead. Tower access requires separate ticket."
      },
      afternoon: {
        activity: "Park Güell",
        location: "Carrer d'Olot",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 10,
        description: "Whimsical mosaic park with city views",
        tips: "Timed entry required. Take bus 24 from Plaça Catalunya."
      },
      evening: {
        activity: "Gothic Quarter Walk",
        location: "Barri Gòtic",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 35,
        description: "Medieval streets with tapas bars and shops",
        tips: "Try patatas bravas at El Quim or Cervecería Catalana."
      },
      tip: "Buy Barcelona Card for transport and attraction discounts.",
      totalCost: 71
    },
    {
      day: 2,
      morning: {
        activity: "Casa Batlló",
        location: "Passeig de Gràcia, 43",
        time: "9:00 AM - 11:00 AM",
        duration: "2 hours",
        cost: 35,
        description: "Gaudí's dragon-inspired modernist house",
        tips: "Book earliest slot. Audio guide with AR included."
      },
      afternoon: {
        activity: "Casa Milà (La Pedrera)",
        location: "Passeig de Gràcia, 92",
        time: "12:00 PM - 2:30 PM",
        duration: "2.5 hours",
        cost: 25,
        description: "Undulating stone building with rooftop chimneys",
        tips: "Rooftop is highlight. Night visits available."
      },
      evening: {
        activity: "Las Ramblas & Boqueria Market",
        location: "La Rambla",
        time: "4:00 PM - 9:00 PM",
        duration: "5 hours",
        cost: 40,
        description: "Famous boulevard with food market and street performers",
        tips: "Go to Boqueria early. Avoid tourist trap restaurants on Rambla."
      },
      tip: "Passeig de Gràcia has best Modernist architecture. Walk the whole avenue.",
      totalCost: 100
    },
    {
      day: 3,
      morning: {
        activity: "Picasso Museum",
        location: "Carrer Montcada, 15-23",
        time: "9:00 AM - 12:00 PM",
        duration: "3 hours",
        cost: 12,
        description: "Extensive collection of Picasso's early works",
        tips: "Free Thursday evenings and first Sunday. Book ahead."
      },
      afternoon: {
        activity: "Barceloneta Beach",
        location: "Passeig Marítim",
        time: "1:00 PM - 5:00 PM",
        duration: "4 hours",
        cost: 30,
        description: "Relax on Mediterranean beach with seafood lunch",
        tips: "Try paella at Can Majó or 7 Portes."
      },
      evening: {
        activity: "Port Olímpic & Marina",
        location: "Port Olímpic",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 35,
        description: "Waterfront dining and nightlife with marina views",
        tips: "Watch sunset from W Hotel beach bar."
      },
      tip: "Beach is free. Rent sunbeds (€10-15) or bring towel.",
      totalCost: 77
    },
    {
      day: 4,
      morning: {
        activity: "Montjuïc & Magic Fountain",
        location: "Plaça de Carles Buïgas",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 0,
        description: "Hilltop park with museums and panoramic views",
        tips: "Take cable car from Barceloneta. Free area to explore."
      },
      afternoon: {
        activity: "MNAC Art Museum",
        location: "Palau Nacional",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 12,
        description: "National art museum with Romanesque collection",
        tips: "Free Saturday afternoons. Rooftop terrace has great views."
      },
      evening: {
        activity: "Poble Espanyol",
        location: "Avinguda Francesc Ferrer i Guàrdia",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 15,
        description: "Open-air architectural museum of Spanish villages",
        tips: "Craft workshops and flamenco shows available."
      },
      tip: "Magic Fountain shows Thursday-Sunday evenings. Check schedule.",
      totalCost: 27
    },
    {
      day: 5,
      morning: {
        activity: "Camp Nou Stadium Tour",
        location: "C. d'Aristides Maillol",
        time: "10:00 AM - 1:00 PM",
        duration: "3 hours",
        cost: 28,
        description: "FC Barcelona stadium and museum experience",
        tips: "Book online. Not available during match days."
      },
      afternoon: {
        activity: "Last Shopping & Tapas Crawl",
        location: "El Born District",
        time: "2:00 PM - 6:00 PM",
        duration: "4 hours",
        cost: 50,
        description: "Boutique shopping and multi-stop tapas tour",
        tips: "Try El Xampanyet for cava and anchovies."
      },
      evening: {
        activity: "Flamenco Show",
        location: "Palau Dalmases or Tablao Cordobés",
        time: "7:00 PM - 9:00 PM",
        duration: "2 hours",
        cost: 40,
        description: "Authentic flamenco performance with drinks",
        tips: "Smaller venues more authentic than big tourist shows."
      },
      tip: "Sunday many shops closed. El Born best for boutiques.",
      totalCost: 118
    }
  ],

  // ATHENS - 5 Day Detailed Itinerary
  athens: [
    {
      day: 1,
      morning: {
        activity: "Acropolis & Parthenon",
        location: "Dionysiou Areopagitou",
        time: "8:00 AM - 12:00 PM",
        duration: "4 hours",
        cost: 20,
        description: "Ancient citadel with iconic Parthenon temple",
        tips: "Arrive at opening. Enter from north slope to avoid crowds."
      },
      afternoon: {
        activity: "Acropolis Museum",
        location: "15 Dionysiou Areopagitou",
        time: "1:00 PM - 4:00 PM",
        duration: "3 hours",
        cost: 10,
        description: "World-class museum with Acropolis artifacts",
        tips: "Glass floors show excavations below. Rooftop café with views."
      },
      evening: {
        activity: "Plaka Dinner",
        location: "Plaka District",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 40,
        description: "Historic neighborhood with tavernas and shops",
        tips: "Avoid tourist traps on main streets. Try hidden alley restaurants."
      },
      tip: "Combo ticket €30 includes 7 ancient sites valid 5 days.",
      totalCost: 70
    },
    {
      day: 2,
      morning: {
        activity: "Ancient Agora & Temple of Hephaestus",
        location: "Adrianou 24",
        time: "8:30 AM - 12:00 PM",
        duration: "3.5 hours",
        cost: 0,
        description: "Heart of ancient Athens with best-preserved temple",
        tips: "Included in combo ticket. Stoa of Attalos museum inside."
      },
      afternoon: {
        activity: "Monastiraki & Flea Market",
        location: "Monastiraki Square",
        time: "12:30 PM - 4:00 PM",
        duration: "3.5 hours",
        cost: 30,
        description: "Bustling market with antiques and souvenirs",
        tips: "Haggle for better prices. Watch for pickpockets."
      },
      evening: {
        activity: "Psiri Nightlife",
        location: "Psiri District",
        time: "6:00 PM - 11:00 PM",
        duration: "5 hours",
        cost: 45,
        description: "Trendy area with bars, restaurants, and live music",
        tips: "Try ouzo and meze at traditional tavernas."
      },
      tip: "Sunday flea market has best selection but most crowded.",
      totalCost: 75
    },
    {
      day: 3,
      morning: {
        activity: "National Archaeological Museum",
        location: "44 Patission Street",
        time: "9:00 AM - 1:00 PM",
        duration: "4 hours",
        cost: 12,
        description: "Greatest collection of Greek antiquities",
        tips: "Allow 3-4 hours minimum. Audio guide recommended."
      },
      afternoon: {
        activity: "Lycabettus Hill Funicular",
        location: "Aristippou & Ploutarchou",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 10,
        description: "Highest point in Athens with panoramic views",
        tips: "Funicular €7 or walk 30 min. Sunset is spectacular."
      },
      evening: {
        activity: "Kolonaki Shopping & Dinner",
        location: "Kolonaki District",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 60,
        description: "Upscale neighborhood with designer boutiques",
        tips: "Best area for fine dining. Try Funky Gourmet for Michelin."
      },
      tip: "Museum closed Mondays. Free entry on select days.",
      totalCost: 82
    },
    {
      day: 4,
      morning: {
        activity: "Day Trip to Cape Sounion",
        location: "Sounion",
        time: "8:00 AM - 1:00 PM",
        duration: "5 hours",
        cost: 40,
        description: "Temple of Poseidon overlooking Aegean Sea",
        tips: "Bus from KTEL terminal or join tour. 1.5 hour drive."
      },
      afternoon: {
        activity: "Athens Riviera Beach",
        location: "Vouliagmeni",
        time: "2:00 PM - 5:00 PM",
        duration: "3 hours",
        cost: 25,
        description: "Relax at thermal lake or beach clubs",
        tips: "Lake Vouliagmeni €10 entry. Year-round warm water."
      },
      evening: {
        activity: "Return & Syntagma Square",
        location: "Syntagma Square",
        time: "6:00 PM - 9:00 PM",
        duration: "3 hours",
        cost: 30,
        description: "Watch changing of guard and evening stroll",
        tips: "Guard change every hour. Main ceremony Sunday 11 AM."
      },
      tip: "Sounion sunset is magical. Stay for golden hour photos.",
      totalCost: 95
    },
    {
      day: 5,
      morning: {
        activity: "Panathenaic Stadium",
        location: "Leoforos Vasileos Konstantinou",
        time: "9:00 AM - 11:00 AM",
        duration: "2 hours",
        cost: 5,
        description: "All-marble stadium of first modern Olympics",
        tips: "Run on the track. Photo op with Olympic torch."
      },
      afternoon: {
        activity: "National Gardens & Zappeion",
        location: "Leoforos Amalias",
        time: "11:30 AM - 3:00 PM",
        duration: "3.5 hours",
        cost: 0,
        description: "Peaceful green space in city center",
        tips: "Free entry. Great picnic spot. Find ancient ruins inside."
      },
      evening: {
        activity: "Farewell Dinner with Acropolis View",
        location: "Strofi or Acropolis View Restaurant",
        time: "7:00 PM - 10:00 PM",
        duration: "3 hours",
        cost: 55,
        description: "Rooftop dining with illuminated Acropolis backdrop",
        tips: "Reserve terrace table. Best views after 8 PM."
      },
      tip: "Athens Card includes transport and some attractions.",
      totalCost: 60
    }
  ],

  // TOKYO - 7 Day Detailed Itinerary
  tokyo: [
    {
      day: 1,
      morning: {
        activity: "Senso-ji Temple & Asakusa",
        location: "2-3-1 Asakusa, Taito",
        time: "8:00 AM - 11:00 AM",
        duration: "3 hours",
        cost: 0,
        description: "Tokyo's oldest temple with traditional shopping street",
        tips: "Arrive early for photos without crowds. Try ningyo-yaki sweets."
      },
      afternoon: {
        activity: "Tokyo Skytree",
        location: "1-1-2 Oshiage, Sumida",
        time: "12:00 PM - 3:00 PM",
        duration: "3 hours",
        cost: 30,
        description: "World's tallest tower with panoramic observation decks",
        tips: "Book tickets online. Clear days show Mt. Fuji."
      },
      evening: {
        activity: "Akihabara Electric Town",
        location: "Akihabara, Chiyoda",
        time: "5:00 PM - 10:00 PM",
        duration: "5 hours",
        cost: 50,
        description: "Anime, manga, electronics, and maid cafes",
        tips: "Visit arcades, anime shops, try themed cafe experience."
      },
      tip: "Asakusa is free. Skytree combo tickets save money.",
      totalCost: 80
    },
    {
      day: 2,
      morning: {
        activity: "Meiji Shrine",
        location: "1-1 Yoyogikamizonocho, Shibuya",
        time: "8:00 AM - 10:30 AM",
        duration: "2.5 hours",
        cost: 0,
        description: "Peaceful Shinto shrine in forested park",
        tips: "Free entry. Write wishes on ema plaques."
      },
      afternoon: {
        activity: "Shibuya Crossing & Shopping",
        location: "Shibuya Station",
        time: "11:00 AM - 4:00 PM",
        duration: "5 hours",
        cost: 60,
        description: "World's busiest crossing and fashion shopping",
        tips: "View crossing from Starbucks or Shibuya Sky. Shop 109 building."
      },
      evening: {
        activity: "Shinjuku Golden Gai",
        location: "1 Chome Kabukicho, Shinjuku",
        time: "6:00 PM - 11:00 PM",
        duration: "5 hours",
        cost: 70,
        description: "Tiny bars in narrow alleys, unique nightlife",
        tips: "Cover charge ¥500-1000 per bar. Some no foreigners (rare now)."
      },
      tip: "Shibuya Sky sunset tickets book weeks ahead.",
      totalCost: 130
    },
    {
      day: 3,
      morning: {
        activity: "Tsukiji Outer Market",
        location: "4 Chome Tsukiji, Chuo",
        time: "7:00 AM - 10:00 AM",
        duration: "3 hours",
        cost: 40,
        description: "Fresh seafood breakfast and food stalls",
        tips: "Go hungry! Try sushi, tamagoyaki, scallops."
      },
      afternoon: {
        activity: "teamLab Planets",
        location: "6-1-23 Toyosu, Koto",
        time: "12:00 PM - 3:00 PM",
        duration: "3 hours",
        cost: 32,
        description: "Immersive digital art museum experience",
        tips: "Book online. Barefoot experience. Allow 2 hours inside."
      },
      evening: {
        activity: "Ginza Dining & Shopping",
        location: "Ginza, Chuo",
        time: "4:00 PM - 9:00 PM",
        duration: "5 hours",
        cost: 100,
        description: "Upscale shopping and fine dining district",
        tips: "Department store basements (depachika) for gourmet food."
      },
      tip: "teamLab books out weeks ahead. Weekday mornings less crowded.",
      totalCost: 172
    },
    {
      day: 4,
      morning: {
        activity: "Imperial Palace East Gardens",
        location: "1-1 Chiyoda, Chiyoda",
        time: "9:00 AM - 11:30 AM",
        duration: "2.5 hours",
        cost: 0,
        description: "Former Edo Castle grounds with beautiful gardens",
        tips: "Free entry. Closed Mondays and Fridays. ID required."
      },
      afternoon: {
        activity: "Harajuku & Takeshita Street",
        location: "1 Chome Jingumae, Shibuya",
        time: "12:00 PM - 4:00 PM",
        duration: "4 hours",
        cost: 50,
        description: "Youth culture, crazy fashion, and crepes",
        tips: "Try rainbow cotton candy. Visit Omotesando for architecture."
      },
      evening: {
        activity: "Roppongi Hills & Mori Art Museum",
        location: "6-10-1 Roppongi, Minato",
        time: "5:00 PM - 10:00 PM",
        duration: "5 hours",
        cost: 45,
        description: "Art museum with Tokyo City View observation deck",
        tips: "Sunset combo ticket best value. Night views spectacular."
      },
      tip: "Imperial Palace tours require advance booking through website.",
      totalCost: 95
    },
    {
      day: 5,
      morning: {
        activity: "Day Trip to Nikko",
        location: "Nikko, Tochigi",
        time: "7:00 AM - 11:00 AM",
        duration: "4 hours travel",
        cost: 50,
        description: "UNESCO shrines and temples in mountain setting",
        tips: "JR Pass covers train. 2 hours from Tokyo. Buy Nikko Pass."
      },
      afternoon: {
        activity: "Toshogu Shrine & Kegon Falls",
        location: "2301 Sannai, Nikko",
        time: "11:30 AM - 4:00 PM",
        duration: "4.5 hours",
        cost: 20,
        description: "Ornate shogun mausoleum and spectacular waterfall",
        tips: "Shrine entry ¥1300. Falls elevator ¥570. Bus pass recommended."
      },
      evening: {
        activity: "Return to Tokyo & Izakaya",
        location: "Yurakucho or Shimbashi",
        time: "6:00 PM - 10:00 PM",
        duration: "4 hours",
        cost: 45,
        description: "Traditional Japanese pub experience with salarymen",
        tips: "Look for places with plastic food displays. Order yakitori."
      },
      tip: "Nikko All Area Pass covers transport. Worth it for day trip.",
      totalCost: 115
    },
    {
      day: 6,
      morning: {
        activity: "Ueno Park & Museums",
        location: "Ueno Koen, Taito",
        time: "9:00 AM - 12:30 PM",
        duration: "3.5 hours",
        cost: 10,
        description: "Large park with multiple museums and zoo",
        tips: "National Museum ¥1000. Zoo ¥600. Cherry blossoms in spring."
      },
      afternoon: {
        activity: "Ameyoko Market Shopping",
        location: "Ueno, Taito",
        time: "1:00 PM - 4:00 PM",
        duration: "3 hours",
        cost: 40,
        description: "Bustling street market with food and bargains",
        tips: "Great for souvenirs. Try street food snacks."
      },
      evening: {
        activity: "Tokyo Station & Ramen Street",
        location: "1 Chome Marunouchi, Chiyoda",
        time: "5:00 PM - 9:00 PM",
        duration: "4 hours",
        cost: 35,
        description: "Historic station with underground ramen shops",
        tips: "8 ramen shops in basement. Try Rokurinsha for tsukemen."
      },
      tip: "Monday many museums closed. Check schedules.",
      totalCost: 85
    },
    {
      day: 7,
      morning: {
        activity: "Odaiba Island",
        location: "Odaiba, Minato",
        time: "9:00 AM - 12:00 PM",
        duration: "3 hours",
        cost: 20,
        description: "Futuristic island with Gundam statue and beaches",
        tips: "Take Yurikamome line for views. TeamLab Borderless here."
      },
      afternoon: {
        activity: "Last Shopping & Electronics",
        location: "Yodobashi Camera or Bic Camera",
        time: "1:00 PM - 5:00 PM",
        duration: "4 hours",
        cost: 100,
        description: "Massive electronics stores with everything Japanese",
        tips: "Tax-free shopping over ¥5000. Bring passport."
      },
      evening: {
        activity: "Farewell Dinner Cruise",
        location: "Himiko or Hotaruna Cruise",
        time: "7:00 PM - 9:00 PM",
        duration: "2 hours",
        cost: 80,
        description: "Tokyo Bay dinner cruise with skyline views",
        tips: "Book window seat. See Rainbow Bridge lit up."
      },
      tip: "Get Suica/Pasmo card for easy train travel. Works at stores too.",
      totalCost: 200
    }
  ]
};

export function getDailyPlan(placeId: string, day: number): DailyPlan | null {
  const plans = dailyPlans[placeId];
  if (!plans || day < 1 || day > plans.length) {
    return null;
  }
  return plans[day - 1];
}

export function getTotalCost(placeId: string): number {
  const plans = dailyPlans[placeId];
  if (!plans) return 0;
  return plans.reduce((sum, plan) => sum + plan.totalCost, 0);
}

export function getPlanSummary(placeId: string): string {
  const plans = dailyPlans[placeId];
  if (!plans || plans.length === 0) {
    return "Detailed daily plans coming soon";
  }
  return `${plans.length} days of curated experiences with real attractions, times, and costs`;
}
