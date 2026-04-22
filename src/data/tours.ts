export interface TourDay {
  day: number;
  route: string;
  highlights: string;
}

export interface Tour {
  slug: string;
  name: string;
  duration: string;
  shortDescription: string;
  description: string;
  startLocation: string;
  endLocation: string;
  heroImage: string;
  galleryImages: string[];
  itinerary: TourDay[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  optionalActivities: string[];
  specialNotes?: string;
}

// Real hero images from sirocotours.com (scraped 2026-04-22)
export const TOUR_IMAGES = {
  hero: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-cid-hq-scaled.jpg',
  desertCamp: 'https://sirocotours.com/wp-content/uploads/2024/08/maison-sahara-1.jpeg',
  marrakech: 'https://sirocotours.com/wp-content/uploads/2024/08/amanjena-moroccan-restaurant.jpg',
  chefchaouen: 'https://sirocotours.com/wp-content/uploads/2024/08/DSC_0011-scaled.jpg',
  fes: 'https://sirocotours.com/wp-content/uploads/2024/08/el-hedim-square.jpg',
  atlas: 'https://sirocotours.com/wp-content/uploads/2024/08/toubkal-summit--393x205.jpg',
  aitBenhaddou: 'https://sirocotours.com/wp-content/uploads/2024/09/ouarzazate-s.png',
  camelRide: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-4dias.jpeg',
  essaouira: 'https://sirocotours.com/wp-content/uploads/2024/08/essaouira-cropped.jpeg',
  todra: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-cume-4x4-2.jpeg',
  riad: 'https://sirocotours.com/wp-content/uploads/2024/08/palais-musee-claudio-bravo-2_enhanced-destaque-2.jpeg',
  food: 'https://sirocotours.com/wp-content/uploads/2025/05/tajine.jpeg',
  stargazing: 'https://sirocotours.com/wp-content/uploads/2024/08/constellation-300x169.jpg',
  draaValley: 'https://sirocotours.com/wp-content/uploads/2024/07/oasis_1.jpg',
  door: 'https://sirocotours.com/wp-content/uploads/2024/08/burro.jpg',
  toursBanner: 'https://sirocotours.com/wp-content/uploads/2024/08/burro.jpg',
  activitiesBanner: 'https://sirocotours.com/wp-content/uploads/2025/05/gnaoua-peoples.jpg',
  contactsBanner: 'https://sirocotours.com/wp-content/uploads/2024/06/DSCF5452-3.jpg',
  contactsSecondary: 'https://sirocotours.com/wp-content/uploads/2024/06/DSCF5419.jpg',
  teamBanner: 'https://sirocotours.com/wp-content/uploads/2024/06/DSC_9302_3.jpg',
  teamSecondary: 'https://sirocotours.com/wp-content/uploads/2024/06/DSC_9587_1.jpg',
};

export const tours: Tour[] = [
  {
    slug: 'desert-mountain-sea-oasis-cities-12-days',
    name: 'Desert, Mountain, Sea, Oasis, and Cities - 12 days',
    duration: '12 Days',
    shortDescription: 'Explore the 5 elements of Morocco with the private company of a local guide, during a 12-day trip, in a comfortable and joyful environment.',
    description: 'Morocco offers an impressive diversity of landscapes, traditions, nature, and culture. By exploring the country in depth, you will come into contact with its 5 elements: deserts, mountains, beaches, oases, and vibrant cities.\n\nThroughout the trip, you will experience the scorching silence of the desert and the hypnotic magic of the oases, as well as enjoy the beauty of the Atlantic coast, breathe the fresh mountain air, and discover the vibrant life of the Moroccan cities.\n\nYou will have the constant company of our warm and experienced guide, who speaks your language and will immerse you in the culture of each place, showing you secret paradises, completely unknown to mass tourism.\n\nTo craft this trip to your preference, contact us via our form .',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/burro.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/foleirada.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/palmeira-deserto.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/koutoubia-mosque.jpeg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - Rabat',
        highlights: 'Upon arriving at Casablanca airport, our guide will be there on time, properly identified, to welcome you with all due attention.',
      },
      {
        day: 2,
        route: 'Rabat – Chefchaouen',
        highlights: 'Rabat is a city that flourished in the 14th and 15th centuries following the expulsion of the Andalusians from the Iberian Peninsula. Surrounded by three walls that reflect the most significant phases of its history — the Almohad, Andalusian, and Alawite walls — the city is rich in heritage and architecture. During the tour, your guide will lead you along the walls and to the city’s main attractions, such as the iconic Hassan Tower , situated atop an imposing mosque, the opulent Mausoleum of Mohammed V , and other historical monuments.',
      },
      {
        day: 3,
        route: 'Chefchaouen – Meknes – Volubilis – Fez',
        highlights: 'Sultan Moulay Ismail dreamed of transforming Meknes into the most splendid city in North Africa. A contemporary of Louis XIV of France, Moulay Ismail maintained relations with the French king and, inspired by the splendor of the European court, sought to imitate the style and grandeur of Versailles. As a result, he became a historical figure, even proposing marriage to the French king’s daughter. The city is even known as the “Versailles of the Maghreb.” During the visit, with the help of our guide, you will be able to explore the most emblematic places of Meknes. Additionally, the region i…',
      },
      {
        day: 4,
        route: 'Fez',
        highlights: 'Therefore, this day will be dedicated to visiting this mysterious city. With the help of a guide specialized exclusively in Fes, you will be able to dive into its nooks, traditions, stories, and histories.',
      },
      {
        day: 5,
        route: 'Fez – Ifran – Midelt – Erfoud – Merzouga Desert',
        highlights: 'During the journey, we will make a brief stop in Ifrane, a charming village located between the High Atlas and the Middle Atlas. This privileged location allows you to take in the lush mountain landscape. Along the way, you might spot monkeys and other animals typical of these cedar forests.',
      },
      {
        day: 6,
        route: 'Merzouga Desert – Rissani – Khamlia – Sahara Dunes (Merzouga)',
        highlights: 'During the day, you can embark on various desert adventures, from thrilling quad bike rides on the dunes to participating in Moroccan cooking workshops. You can also engage with the nomads, immersing yourself in their music and traditions for a truly unique cultural experience.',
      },
      {
        day: 7,
        route: 'Merzouga Desert– Todra Gorges – Dades Valley - Ouarzazate',
        highlights: 'During the journey, we will visit the Todra Gorges , where the stunning cliffs rise to 300 meters in height, separated by a mere 15 meters. There will be time to enjoy a walk along the river, surrounded by the grandeur of this unique, rocky landscape.',
      },
      {
        day: 8,
        route: 'Ouarzazate – Ait Ben Haddou – Imlil',
        highlights: 'Ouarzazate is known as the city of the “Doors of the Desert,” due to its strategic location between the Atlas Mountains and the Sahara Desert. In this city, you can visit the Taouirt Kasbah , an ancient fortress that houses the palace of Pasha Glaoui, located near the Medina. Additionally, be sure to explore the renowned film studios (Atlas Studios), where several historical films were shot, including the iconic Lawrence of Arabia .',
      },
      {
        day: 9,
        route: 'Imlil - Essaouira',
        highlights: 'Imlil is a typical Atlas village, situated at an altitude of 1,760 meters. Here, you can appreciate the beauty, tranquility, and grandeur of the mountains. Located near Marrakech, Imlil is the ideal destination for those who enjoy outdoor activities and hiking, whether on foot or by mule, through the mountains. Among the peaks surrounding the village, Toubkal stands out as the highest point in North Africa, reaching 4,167 meters in altitude.',
      },
      {
        day: 10,
        route: 'Essaouira - Marrakech',
        highlights: 'Essaouira is one of the most charming cities on the Moroccan coast and a multicultural artistic hub that has captivated figures like Jimi Hendrix, Orson Welles, and Bob Marley. With a maritime scent that constantly fills the corners of its medina, the city is notable for its vibrant urban life, rich culture, and diverse culinary offerings.',
      },
      {
        day: 11,
        route: 'Marrakech',
        highlights: 'Throughout the day, a guide dedicated exclusively to the city of Marrakech will accompany you, allowing you to make the most of what the city has to offer. With them, you will explore the rich history of the city and experience the sense of fantasy and surprise that Marrakech constantly provides.',
      },
      {
        day: 12,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens: This is the only botanical garden in Marrakech. Designed by the artist Jacques Majorelle and owned by Yves Saint Laurent and Pierre Bergé since 1980, the garden offers a charming experience with exotic flowers from various parts of the world.',
      },
    ],
    highlights: [
      'Night in the Sahara Desert dunes',
      'The green hues of the oasis and the blues of Chefchaouen',
      'High Atlas Mountains (Imlil)',
      'Essaouira (beach)',
      'Imperial cities of Marrakech, Fez, Meknes, and Rabat',
      'Nature and Culture'
    ],
    included: [
      'Arrival and departure transfers to the airport;',
      'Private transportation throughout the trip in a new and safe minivan with air conditioning. All of our vehicles are licensed by the Moroccan government for tourism and have insurance for our clients;',
      'A permanent guide who speaks English ;',
      'Accommodation throughout the trip, including breakfast;',
      'Dinners on the 2 nights in Merzouga and the Dades Valley;',
      'Additional official guide in the cities of Marrakech, Meknes, and Fez;',
      '1 night in a Berber camp in a luxury nomadic tent;',
      'Camel ride with a view on the way to the camp.'
    ],
    notIncluded: [],
    optionalActivities: [
      'Hikes in the Atlas Mountains',
      'Sandboarding (snowboarding on the desert dunes)',
      'History and storytelling',
      'Craft tour',
      'Yoga in the desert',
      'Surf',
      'Other activities'
    ],
  },
  {
    slug: 'luxury-tour-10-to-14-days',
    name: 'Luxury Tour Morocco - 10 to 14 Days',
    duration: '10 to 14 Days',
    shortDescription: 'Embark on a Luxury Tour throughout Morocco, accompanied by a private and knowledgeable guide who will show the country\'s wonders.',
    description: 'In Morocco, it is possible to combine the charming environment provided by Moroccan architecture with exceptional comfort and refinement. In this Luxury Tour in Morocco , you will go beyond ordinary mass tourism, with the ability to customize the itinerary with activities and experiences of your choice that will make this trip special.\n\nDiscover the most exotic corners of Morocco and enjoy the luxury accommodations we have carefully selected for you, prioritizing quality, location, and elegance. From boutique hotels that represent the culture of each place to Arab palaces that enchanted Sultans, Sheikhs, or historical figures like Churchill, whose favorite place in the world was Marrakech.\n\nAllow yourself to be immersed in the Moroccan cities, which you can explore with the presence of a private guide with university studies dedicated solely to each of the cities. In addition to these local guides, you will have the continuous and attentive presence of a guide from Siroco Tours, ensuring that everything goes at your pace and accommodates your preferences throughout the trip.\n\nThis trip is based on 10 days, with the option to extend for 4 days to the Moroccan Atlantic coast, with new experiences and discoveries.',
    startLocation: 'Casablanca',
    endLocation: 'Casablanca',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/amanjena-moroccan-restaurant.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/gnoua-people-.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/mosque-fountain.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/cactus-restored-jpg.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/tamaras-cha-marroquino.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - Rabat',
        highlights: 'Arrival at Casablanca airport, where our guide will warmly welcome you in Morocco.',
      },
      {
        day: 2,
        route: 'Rabat – Volubilis - Meknes',
        highlights: 'During the morning, explore the Medina of Rabat freely to feel the Moroccan urban life and its colorful souks .',
      },
      {
        day: 3,
        route: 'Meknes – Fez',
        highlights: 'Wine Tasting in Meknes (at lunchtime)',
      },
      {
        day: 4,
        route: 'Fez',
        highlights: 'The medina of Fez boasts over 9,000 streets that create a magical ambiance, where light and shadow intermingle. It is recognized as a UNESCO World Heritage site.',
      },
      {
        day: 5,
        route: 'Fez – Middle Atlas - Ifran',
        highlights: 'We will depart in the morning to visit the magical cedar forests of the Middle Atlas , where you will be dazzled by the spectacular native nature. The atmosphere is calm, clear, and rich in the aromas of nature.',
      },
      {
        day: 6,
        route: 'Ifran - Ziz Valley - Rissani - Merzouga Desert',
        highlights: 'We will depart in the morning towards Merzouga. During the journey, you may spot monkeys and other animals typical of these forests.',
      },
      {
        day: 7,
        route: 'Merzouga Desert – Todra Gorges – Dades Valley - Skoura',
        highlights: 'After a relaxed breakfast and witnessing the breathtaking sunrise over the dunes, we will visit the Todra Gorges , where the cliffs rise to 300 meters in height, separated by just 15 meters. There will be time to enjoy a walk along the river, surrounded by the grandeur of this unique and rocky landscape.',
      },
      {
        day: 8,
        route: 'Skoura - Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'Ouarzazate is known as the “Gateway to the Desert” due to its location between the Atlas Mountains and Sahara Desert. In addition to the stunning scenery, you can visit the Kasbah Taouirt , an ancient fortress, the palace of Pasha Glaoui , near the Medina, and the famous film studios that have hosted several historical films, including the iconic Lawrence of Arabia .',
      },
      {
        day: 9,
        route: 'Marrakech',
        highlights: 'During the day, a guide dedicated solely to the city of Marrakech will accompany you to make the most of what this city has to offer, exploring its history and the atmosphere of fantasy and surprise that Marrakech always exudes.',
      },
      {
        day: 10,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens : This is the only botanical garden in Marrakech. It was designed by artist Jacques Majorelle and has been owned by Yves Saint Laurent and Pierre Bergé since 1980. You can enjoy a wonderful garden filled with exotic flowers from various parts of the world.',
      },
      {
        day: 11,
        route: 'Marrakech – High Atlas - Imlil (Extra Day)',
        highlights: 'The Imlil Mountains in the High Atlas are covered in snow during the winter, with flowers in the spring, fruit in the summer, and red-tinged leaves in the autumn. Regardless of the time of year, the High Atlas is always picturesque.',
      },
      {
        day: 12,
        route: 'Imlil - Essaouira (Extra Day)',
        highlights: 'This coastal area, since the time when Carthage was an empire, has always been considered one of the best anchorage points in the North African Atlantic. The first signs of significant commercial activity date back to the 11th century, but it was in 1506 that the city would see one of the most important chapters in its history, when it was conquered by the Portuguese, who built the fort that still stands in the city today and named it Mogador .',
      },
      {
        day: 13,
        route: 'Essaouira - Safi - Oualidia (Extra Day)',
        highlights: 'Safi is a beautiful coastal city, which, although it has a castle and an ancient cathedral from the Portuguese era, is better known as the ceramics capital of Morocco.',
      },
      {
        day: 14,
        route: 'Oualidia - El Jadida - Casablanca (Extra Day)',
        highlights: 'This small port city, once controlled by Portugal, is now a UNESCO World Heritage site. Formerly known as Mazagan, the city features a Manueline cistern (built by the Portuguese in 1514 to store water) and is one of its main attractions. You can also spot the Chapel of St. Sebastian and the recently restored facade of the Church of Our Lady of the Assumption , a Manueline-style church.',
      },
    ],
    highlights: [],
    included: [
      'Arrival and departure transfers to the airport;',
      'Private transportation throughout the trip in a new, safe 4×4 or Minivan with air conditioning. All our cars are tourist-licensed by the Moroccan Government and have insurance for our clients;',
      'Permanent guide fluent in Spanish and proficient in Portuguese;',
      'Accommodations throughout the trip, with breakfast included;',
      'Dinners in Ifrane, Merzouga Desert, Skoura, and Asni;',
      'Additional official guide in the cities of Marrakesh, Meknes, and Fes;',
      '1 night in a luxury Berber nomadic tent camp;',
      'Camel ride with a view to reach the camp.'
    ],
    notIncluded: [
      'Drinks and other meals (lunches and snacks);',
      'Entrance fees to monuments.',
      'Merzouga Desert;',
      'Oases of Skoura and the Ziz Valley;',
      'Middle and High Atlas Mountain Ranges;',
      'Moroccan pottery in Fes and Safi;',
      'Imperial cities of Marraquexe, Fez, Meknes, and Rabat.',
      'Hiking in Ifrane Natural Park (Middle Atlas);',
      'Hammam at the hotel in Ifrane;',
      'Wine tasting in Meknes;',
      'Interaction with nomadic people in the desert',
      'Other activities'
    ],
    optionalActivities: [],
  },
  {
    slug: 'imperial-cities-and-desert-8-days',
    name: 'Imperial Cities and Desert - 8 Days',
    duration: '8 Days',
    shortDescription: 'On this private trip, you will discover the main imperial cities of Morocco and spend a magical night in the dunes of the Merzouga desert.',
    description: 'Combining the beauty of Morocco’s imperial cities with the diversity of natural landscapes the country has to offer, this tour provides a complete cultural experience along with the enriching silence of the desert in a traditional nomadic tent.\n\nThis tour is private and customizable according to the number of days you have available, as well as your arrival and departure flight times and locations. It can also be tailored to your tastes and what most captivates you about Morocco. Contact us to help you discover the best itinerary for you.\n\nThe tour is carefully planned for you, depending on the time you have for the trip and your preferences. Contact us so we can define the best route for you.',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-cid-hq-scaled.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/fez-scaled.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/homem-desert.jpeg',
      'https://sirocotours.com/wp-content/uploads/2024/08/placas-morocco.jpeg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - Rabat',
        highlights: 'Arrival at Casablanca airport, where our guide will be waiting for you, promptly and properly identified.',
      },
      {
        day: 2,
        route: 'Rabat – Meknes – Volubilis - Fez',
        highlights: 'We continue on to Fez, and along the way, you’ll have the opportunity to explore one of the most important imperial cities in Morocco.',
      },
      {
        day: 3,
        route: 'Fez',
        highlights: 'Thus, this day is dedicated to visiting this mysterious city. Explore Fez with the support of a guide dedicated exclusively to this city, allowing you to discover its hidden corners, traditions, stories, and history in depth.',
      },
      {
        day: 4,
        route: 'Fez – Ifran – Erfoud – Sahara Dunes (Merzouga Desert)',
        highlights: 'We depart in the morning to visit the magical cedar forests of Azrou and Ifran , where you will be awestruck by the spectacular native nature. The atmosphere is calm, clear, and filled with the scents of the natural world.',
      },
      {
        day: 5,
        route: 'Merzouga Desert – Todra Gorges – Dades Valley',
        highlights: 'After breakfast and watching the stunning sunrise over the dunes, we will head towards the “Route of a Thousand Kasbahs.”',
      },
      {
        day: 6,
        route: 'Dades Valley - Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'Ouarzazate is known as the “Gateway to the Desert” due to its location between the Atlas Mountains and the Sahara Desert. In addition to the stunning scenery, here you can visit the Kasbah Taouirt, an ancient fortress, the Pasha Glaoui Palace near the Medina, and the famous film studios where several historical movies were filmed, including the renowned Lawrence of Arabia .',
      },
      {
        day: 7,
        route: 'Marrakech',
        highlights: 'During the day, a guide dedicated exclusively to the city of Marrakech will accompany you to make the most of what the city has to offer, explore its history, and experience the fantasy and surprise that Marrakech always provides.',
      },
      {
        day: 8,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens: This is the only botanical garden in Marrakech. Designed by artist Jacques Majorelle, it has been owned by Yves Saint Laurent and Pierre Bergé since 1980. You can enjoy a stunning garden filled with exotic flowers from various parts of the world.',
      },
    ],
    highlights: [],
    included: [
      'Arrival and departure airport transfers.',
      'Private transportation throughout the trip in a new, safe 4×4 or Minivan with air conditioning. All of our vehicles have a tourism license from the Moroccan government and insurance for our clients.',
      'A permanent guide fluent in Spanish and proficient in Portuguese.',
      'Accommodation throughout the trip with breakfast included.',
      'Dinners in Merzouga Desert and the Dades Valley.',
      'Additional official guides in the cities of Marrakech, Meknes, and Fes.',
      '1 night in a luxury nomadic tent at a Berber camp.',
      'Camel ride to reach the camp.'
    ],
    notIncluded: [
      'Drinks and other meals (lunches and snacks).',
      'Entrance fees to monuments or museums.',
      'Merzouga Desert;',
      'Imperial Cities: Marrakech, Rabat, Meknes, and Fes',
      'Sandboarding;',
      'Wine Tasting in Meknes',
      'Other Activities'
    ],
    optionalActivities: [],
  },
  {
    slug: 'charms-of-southern-morocco-10-days',
    name: 'Charms of Southern Morocco - 10 days',
    duration: '10 Days',
    shortDescription: 'Southern Morocco - Siroco Tours - Set off on an unforgettable journey to discover the southern Morocco, interacting with local people, always in comfort and safety.',
    description: 'This tour is designed for people who want to explore the southern Morocco, the deep desert and its chromatic variations, and who are passionate about travelling and discovering new environments.\n\nWe will head off-road through the desert along one of the Paris-Dakar routes, having the opportunity to cross various types of desert until we reach the Atlantic coast, where the fresh air mixes with the dry desert wind. Recommended for those who have a passion for driving as well as for those who want to discover the depths of the desert and its cultural diversity. There are several activities that can be done in the desert, from cooking activities, music, astronomy nights, to 4×4 motorbike riding.\n\nYou will also have the opportunity to visit the imperial city of Fes, one of the most impressive in the country, formerly the capital. With an additional guide dedicated solely to the Medina of Fes, you will discover the stories of each corner and learn about the typical crafts of this place.\n\nAt the end of the trip, you can choose to stay two more days in Marrakesh and explore the red city accompanied by our guide.\n\nThe tour is planned in detail for you, depending on the time you have available for the trip and your preferences. Contact us to let us know the best itinerary for you.',
    startLocation: 'Fes',
    endLocation: 'Marrakesh',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/palais-musee-claudio-bravo-2_enhanced-destaque-2.jpeg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/sidecar-vintage-marrakech.jpeg',
      'https://sirocotours.com/wp-content/uploads/2024/08/BRU_3732-1.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/men-djellaba.png'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Fes',
        highlights: '*It is also possible to arrive at Casablanca, Rabat or Tangier airports.',
      },
      {
        day: 2,
        route: 'Fes - Ifran - Midelt - Ziz Valley',
        highlights: 'We will leave in the morning to visit the Cedar forests, where you will be dazzled by their spectacular native nature. The environment is calm, clear and rich in the aromas of nature.',
      },
      {
        day: 3,
        route: 'Ziz Valley - Erfoud - Rissani – Merzouga Desert (Sahara Dunes)',
        highlights: 'On the way to the Merzouga Desert, you will pass through Erfoud. Nearby, there are fossil excavations where today you can find several fossils of trilobites and other primitive species. This suggests that the soil of the Sahara Desert was once the bottom of an ocean in ancient times. Here you can also enjoy an exhibition of original fossils.',
      },
      {
        day: 4,
        route: 'Merzouga – Khamlia – Ramlia',
        highlights: 'Start the day by heading to the deepest desert, where you will have the opportunity to meet nomadic people and discover the unknown charms of southern Morocco.',
      },
      {
        day: 5,
        route: 'Ramlia - Zagora (Astronomy Night)',
        highlights: 'In the morning, we set off for Zagora, passing through the Anti-Atlas and the Berber villages of Agdz and the singing valley of the Draa with its extensive palm groves, considered to be among the largest in Morocco.',
      },
      {
        day: 6,
        route: 'Zagora - Taroudant',
        highlights: 'In the morning, we will head towards Taroudant , a city in southern Morocco, nicknamed “Little Marrakesh” or “Grandmother of Marrakesh” because it resembles the smaller Marrakesh, due to its walls and lively Assarag Square. It is known above all for its trade, its walls, the best preserved in Morocco, and its abundance of gardens, which take up more space than the houses.',
      },
      {
        day: 7,
        route: 'Taroudant – Paradise Valley - Taghazout',
        highlights: 'Along the way, we can spend some refreshing moments in the Paradise Valley , located near Agadir, a canyon surrounded by palm trees with small lagoons and waterfalls of crystal clear water, a hidden treasure where you can relax and take a dip.',
      },
      {
        day: 8,
        route: 'Taghazout – Essaouira',
        highlights: 'In the morning, we will head to Essaouira . One of the most charming cities on the Moroccan coast and a multicultural artistic hub that has captivated the likes of Jimi Hendrix, Orson Welles and Bob Marley. With a maritime aroma that constantly permeates the corners of its medina, the city of Essaouira stands out for its urban life, culture and gastronomy, based on fresh fish and the use of argan oil.',
      },
      {
        day: 9,
        route: 'Essaouira - Marrakesh',
        highlights: 'We suggest you end the day with dinner in the fantastic Jamaa el Fna square, where the mix of smells, music and shows are intoxicating, and where tourists and locals mingle and often dine side by side. The entire Moroccan urban culture is represented here and you can find musicians of gnoa or Arabic music, belly dancers, snake charmers and new shows every night.',
      },
      {
        day: 10,
        route: 'Marrakesh',
        highlights: 'During the day, be accompanied by a guide dedicated exclusively to the city of Marrakesh, so that you can enjoy the best this city has to offer, explore its history and the atmosphere of fantasy and surprise that Marrakesh always has.',
      },
    ],
    highlights: [
      'Merzouga Desert;',
      'Ramlia Oasis;',
      'Astronomy;',
      'Essaouira (beach);',
      'Ziz Valley;',
      'Imperial cities of Marrakesh and Fes;'
    ],
    included: [
      'Airport arrival and departure transfers;',
      'Private transportation throughout the trip in a new, safe, air-conditioned 4×4 vehicle. All our vehicles are licensed by the Moroccan government and have insurance for our clients;',
      'Permanent guide who speaks fluent Spanish and Portuguese;',
      'Accommodation throughout the trip, with breakfast;',
      'Dinners in the Ziz Valley, the Merzouga Desert, Ramlia and Zagora;',
      'Additional official guide in the cities of Marrakesh and Fes;',
      '1 night in a Berber camp in a luxury nomad tent;',
      'Camel ride to reach the camp.'
    ],
    notIncluded: [
      '● Drinks and other meals (lunches and snacks); ● Entrance fees to monuments and museums; ● Extra activities;'
    ],
    optionalActivities: [
      'Astronomy Night in Zagora;',
      'Sandboarding (snowboarding on the desert dunes)',
      'Cooking workshop;',
      'Hiking in the Ziz Valley;',
      'Yoga in the desert',
      'Surfing in Essaouira and Taghazout',
      'Other activities'
    ],
  },
  {
    slug: 'desert-express-5-days',
    name: 'Desert Express - 5 Days',
    duration: '5 Days',
    shortDescription: 'Embark on a flight from Casablanca to Errachidia, a desert town close to Merzouga and explore the desert, avoiding long car journeys.',
    description: 'Embark on a 5-day journey to the Merzouga Desert, immersing yourself in the local culture and exploring all the traditions that make this area one of the most unique in Morocco, off the typical tourist routes. Here, you will have the chance to stroll through the country’s largest oasis, the Ziz Valley, and visit traditional Berber villages such as Rissani and Erfoud, known for their rich cultural heritage and the hospitality of the local people.\n\nYou will have the opportunity to immerse yourself in the magical vastness of the Merzouga Desert, spending a night under a vast starry sky, where the silence of the night invites introspection.\n\nThis is the ideal itinerary for those who seek to discover the rural side of the country while avoiding long and exhausting car journeys.\n\nThe tour is meticulously planned for you, depending on the time you have available for the trip and your preferences. Contact us to find out the best itinerary for you.',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-4dias.jpeg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/07/oasis_1.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - Errachidia (Domestic Flight)',
        highlights: 'Arrival in Errachidia at night, where our guide will meet you and welcome you to Morocco.',
      },
      {
        day: 2,
        route: 'Errachidia - Ziz Valley - Erfoud - Merzouga',
        highlights: 'In the morning, depart for the Merzouga Desert and along the way, we’ll make a stop at the Ziz Valley, where you will learn more about Moroccan traditions and experience the atmosphere of an oasis with typical activities, all set in a truly magical environment, away from the main tourist routes. Being in this palm grove feels like being in the desert – so close, yet surrounded by lush and harmonious nature.',
      },
      {
        day: 3,
        route: 'Merzouga Desert - Khamlia - Rissani - Merzouga Desert',
        highlights: 'Embark on various desert activities, ranging from thrilling experiences to cultural encounters. You can enjoy quad biking rides, make bread in the sand using traditional methods, try extreme sports, take part in Moroccan cooking workshops, or even connect with the nomadic tribes, immersing yourself in their music and traditions.',
      },
      {
        day: 4,
        route: 'Merzouga - Todra Gorges - Dades Valley',
        highlights: 'This valley features arid mountains like those of the desert, yet it also boasts a fertile valley filled with the sounds and aromas of nature. In the winter, snow can be seen atop the mountains, and there are several typical Kasbahs—ancient walled settlements. You will also see Jbel Saghro, a mountain even drier than the rest of the range, with a landscape often compared to the surface of the Moon.',
      },
      {
        day: 5,
        route: 'Dades Valley - Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'Ouarzazate , known as the “Gateway to the Desert,” is located between the Atlas Mountains and the Sahara Desert. In addition to its stunning scenery, you can visit the Kasbah Taouirt, the former fortress of the Pasha Glaoui, near the Medina, and the famous film studios where several historical movies were shot, including the iconic Lawrence of Arabia .',
      },
    ],
    highlights: [
      'Merzouga Desert',
      'Ziz Valley',
      'High Atlas Mountains',
      'Dune excursions',
      'Berber culture'
    ],
    included: [
      'Arrival and departure transfers to/from the airport.',
      'Private transportation in a new, safe 4×4 car or Minivan, with air conditioning. All our vehicles are licensed by the Moroccan Government and insured for our clients.',
      'A permanent guide speaking English, Spanish, and Portuguese.',
      'Accommodations throughout the entire trip, with breakfast and dinner included.',
      '1 night in a Berber camp in a luxury nomadic tent.',
      'Camel ride with a view for the journey to the camp.'
    ],
    notIncluded: [
      'Drinks and other meals (lunches and snacks).',
      'Entrance fees to museums or monuments.',
      'Domestic flight from Casablanca to Errachidia (with Royal Air Maroc).'
    ],
    optionalActivities: [
      'Sandboard',
      'Cooking workshop in Merzouga',
      'Quad biking in the dunes',
      'Other activities'
    ],
  },
  {
    slug: 'nature-and-culture-tour-8-days',
    name: 'Nature and Culture Tour - 8 Days',
    duration: '8 Days',
    shortDescription: 'If you are interested in explore the nature and culture of Morocco, this is the ideal 8-day private trip for you.',
    description: 'Explore the nature and culture of Morocco in depth. You will experience the scorching silence of the desert, the magic and magnetism of its oases, enjoy the beach and fishing town of Essaouira, breathe the fresh mountain air, and discover the chromatic life of Moroccan cities.\n\nThe tour is meticulously planned for you, depending on the time you have for the trip and your preferences. Contact us to inform you of the best itinerary for you. This circuit is just an example of this type of excursion and is therefore a suggestion.',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/el-hedim-square.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/monkey-azrou_enhanced.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/BRU_3911-resized-1.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - Rabat - Fez',
        highlights: 'Arrival at Casablanca airport where our guide will be waiting for you punctually and properly identified.',
      },
      {
        day: 2,
        route: 'Fez',
        highlights: 'Paul Bowles described Fez as a “enchanted labyrinth sheltered from time.” Thus, this day is dedicated to visiting this mysterious city. Explore Fes with the support of a guide dedicated solely to this city, allowing you to get to know it in depth: its corners, traditions, tales, and stories.',
      },
      {
        day: 3,
        route: 'Fez – Ifrane – Midelt – Erfoud – Sahara Desert (Merzouga)',
        highlights: 'We will depart in the morning to visit the magical cedar forests of Azrou and Ifrane, where you will be amazed by their spectacular native nature. The atmosphere is calm, clear, and filled with the scents of nature.',
      },
      {
        day: 4,
        route: 'Sahara Desert – Todra Gorges – Skoura - Ouarzazate',
        highlights: 'After breakfast and witnessing the breathtaking sunrise over the dunes, we will head towards the “ Route of a Thousand Kasbahs “.',
      },
      {
        day: 5,
        route: 'Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'We will continue our journey and stop at Ait Benhaddou , the most important location along the “Route of a Thousand Kasbahs,” a UNESCO World Heritage site. It is well-known for being a backdrop for many Hollywood films such as The Mummy , Gladiator , and Game of Thrones .',
      },
      {
        day: 6,
        route: 'Marrakech - Essaouira',
        highlights: 'Madrassa Ben Youssef: This 12th-century Islamic college in Marrakesh was commissioned by Sultan Ali ibn Yusuf of Morocco. Today, it serves as a museum. The interiors are stunning, fully decorated, and its architecture is remarkable.',
      },
      {
        day: 7,
        route: 'Essaouira - Marrakech',
        highlights: '',
      },
      {
        day: 8,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens: This is the only botanical garden in Marrakesh. It was designed by artist Jacques Majorelle and has been owned by Yves Saint Laurent and Bergé Pierre since 1980. You can enjoy a wonderful garden with exotic flowers from various parts of the world.',
      },
    ],
    highlights: [],
    included: [
      'Arrival and departure airport transfers;',
      'Private transportation throughout the trip in a new and safe 4×4 or minivan with air conditioning. All of our cars are licensed by the Moroccan government and insured for our clients;',
      'Permanent guide fluent in Spanish, English, and Portuguese;',
      'Accommodation throughout the trip with breakfast;',
      'Dinners in the Merzouga Desert and Ouarzazate;',
      'Additional official guide in the cities of Marrakesh and Fez;',
      '1 night in a Berber camp in a luxury nomadic tent;',
      'Camel ride to reach the camp.'
    ],
    notIncluded: [
      'Drinks and other meals (lunches and snacks)',
      'Entrance fees to monuments',
      'Sahara Desert – Merzouga',
      'Skoura Oasis',
      'High Atlas (Dades Valley)',
      'Essaouira (beach)',
      'Imperial cities of Marraquexe and Fes',
      'Sandboarding (snowboarding on the desert dunes)',
      'History and storytelling',
      'Craft tour',
      'Yoga in the desert',
      'Surf',
      'Other activities'
    ],
    optionalActivities: [],
  },
  {
    slug: 'photography-tour-14-days',
    name: 'Photography Tour - 14 Days',
    duration: '14 Days',
    shortDescription: 'Photography Tour invites you on an exploration from deep, chromatic deserts to verdant oases, waterfalls, lush forests, and fertile valleys.',
    description: 'Morocco boasts an exquisite tapestry of landscapes, inviting exploration from deep, chromatic deserts to verdant oases, cascading waterfalls, lush forests, and fertile valleys. It’s a paradise for photography enthusiasts, offering endless opportunities to capture breathtaking moments.\n\nEmbark on a photography journey that begins with the mesmerizing whirlwind of Marrakech , a city where cosmopolitan charm seamlessly intertwines with ancient traditions. Experience the awe-inspiring wonders of the High Atlas Mountains , their towering peaks standing tall amidst the sky. Delve into the gorges of Todra , plunging to depths of 600 meters. And marvel at waterfalls and caves soaring over 100 meters high, their grandeur unmatched.\n\nDiscover the hidden gems of the Sahara , where secret oases await, nurturing life in the midst of the vast desert. Navigate the labyrinthine streets of Fes , a city steeped in history, and stroll through the picturesque alleys of Chefchaouen , its stunning blue-washed buildings painting a serene picture.\n\nBut the desert holds its own allure, with its chromatic hues shifting with the sun, mountainous dunes stretching to the horizon, creating a landscape that will leave you in awe and ensure unforgettable nights under the starry sky. Morocco truly offers a journey of a lifetime, where every corner holds a new surprise waiting to be uncovered.\n\nTo customize your trip, contact us for more information !',
    startLocation: 'Marrakech',
    endLocation: 'Casablanca',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/essaouira-cropped.jpeg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/sonia-laranjas-scaled.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/IMG_9649-copy-resized.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/cactus-madu.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Marrakech',
        highlights: 'Upon arrival at Marrakech airport, you will be warmly greeted by our dedicated team who will then escort you to your luxurious hotel or riad, ensuring a seamless and comfortable transition to your Moroccan adventure.',
      },
      {
        day: 2,
        route: 'Marrakech',
        highlights: 'Embark on an unforgettable journey through Marrakech, the enchanting red city of Morocco, guided by an expert who is intimately familiar with its every corner. This curated tour will take you on a captivating walk through time, revealing the rich history and vibrant culture that defines Marrakech.',
      },
      {
        day: 3,
        route: 'Marrakech – Ouzoud waterfall – Demnate',
        highlights: 'Start your day with a rejuvenating escape to Ouzoud, a serene oasis nestled amidst a lush green landscape dotted with olive trees. Here, you’ll find a breathtaking spectacle of nature – waterfalls cascading down a towering 110 meters, creating a serene and refreshing ambiance that’s the perfect antidote to the hustle and bustle of Marrakech.',
      },
      {
        day: 4,
        route: 'Demnate - Ait Benhaddou - Ouarzazate',
        highlights: 'As you continue your tour towards the majestic High Atlas Mountains , prepare for an unforgettable adventure that blends the beauty of nature with the rich history and culture of Morocco. Your first stop will be a traditional Berber village , where you’ll have the opportunity to immerse yourself in the unique lifestyle and traditions of this fascinating community.',
      },
      {
        day: 5,
        route: 'Ouarzazate – Rose valley - Dades valley – Todra gorges – Ouarzazate',
        highlights: 'This day will be dedicated to the rocky landscape of the Dades Valley and the Todra Gorges Both of these places are an essential stop for any photographer, for their grandeur and diversity of colors.',
      },
      {
        day: 6,
        route: 'Ouarzazate – Zagora (Astronomy night)',
        highlights: 'In the morning, head towards Zagora , on what used to be the route of commercial caravans that crossed the entire desert.',
      },
      {
        day: 7,
        route: 'Zagora – Sahara (Off-road) – Ramlia (Oasis of Sahara)',
        highlights: 'Start your day with an exhilarating journey into the heart of Morocco’s vast and majestic Sahara Desert . As you traverse the legendary Paris-Dakar route , you’ll have the unique opportunity to encounter the nomadic peoples who have called this region home for centuries. Prepare to be captivated by the charm and authenticity of the small, traditional villages that dot the landscape, each with its own rich history and culture.',
      },
      {
        day: 8,
        route: 'Ramlia – Sahara (Off-road) - Khamlia – Merzouga desert',
        highlights: 'Embark on a day filled with adventure and discovery in the heart of the Sahara Desert. From extreme sports to cultural immersion, there’s something for everyone to enjoy. Experience the thrill of a quad bike ride through the towering dunes, or hone your culinary skills in a Moroccan cuisine workshop. For those seeking a deeper connection to the region, engage with the nomadic communities, immersing yourself in their music, traditions, and way of life.',
      },
      {
        day: 9,
        route: 'Merzouga – Rissani – Erfoud – Ziz valley',
        highlights: 'Wake up early and enjoy the sunrise from the top of a dune (which can reach 100m high) and feel the clarity that invades the open desert sky. On the horizon, we see the camels, who still sleep peacefully in the sand.',
      },
      {
        day: 10,
        route: 'Ziz valley – Azrou – Ifran – Fes',
        highlights: 'We leave for Fes. Take the opportunity to make a short stop in Midelt, a village situated between the Great Atlas and the Middle Atlas; an exceptional location to contemplate the lush landscape of the mountains. Along the way, pass through the cedar forest, where you can see the monkeys and all the surrounding Nature.',
      },
      {
        day: 11,
        route: 'Fes',
        highlights: 'Experience the timeless charm of Fes, as described by the esteemed author Paul Bowles as an “enchanted labyrinth sheltered from time.” With over 9,000 streets and alleyways weaving through its medina, Fes creates a mesmerizing world of light and shadow, transporting visitors to a bygone era. Step into the medieval streets and immerse yourself in a lifestyle that feels like a journey through time.',
      },
      {
        day: 12,
        route: 'Fes - Chefchaouen',
        highlights: 'As we bid farewell to the enchanted labyrinth of Fes, we set our sights on Chefchaouen, a charming destination that promises a unique experience for photography. Along the way, you have the option to pause at Volubilis , a captivating glimpse into North Africa’s Roman past, or Meknes , an imperial city that flourished in the 18th century.',
      },
      {
        day: 13,
        route: 'Chefchaouen - Rabat',
        highlights: 'If you are willing to get up early you can explore the Rif mountains and the delights of its landscapes without the large tourist groups that invade this place of sublime beauty during the day. The dim light of dawn over the waterfalls of Akchour or the stroll along the “Bridge of God” will allow you to discover stunning landscapes and provide a good location for photographs.',
      },
      {
        day: 14,
        route: 'Rabat - Casablanca',
        highlights: 'After breakfast, we embark on a journey to Casablanca, Mosque of Hassan II, a magnificent structure built on the shores of the sea and one of the few in the world that welcomes non-Muslim visitors. Standing tall as the world’s tallest mosque outside of Mecca, it is a testament to Morocco’s rich heritage and architectural prowess.',
      },
    ],
    highlights: [
      'Astronomny Night;',
      'Stunning Landscapes;',
      'Photography;',
      'Oásis and Desert;',
      'Berber culture;',
      'Off-Road trip;'
    ],
    included: [
      'Private transport throughout the trip in 4×4 car, new and safe, with air conditioning. All our cars have tourist license from the Government of Morocco and insurance for our customers;',
      'Permanent guide that speaks Spanish, English French and Portuguese;',
      'Accommodation throughout the trip, with breakfasts;',
      'Dinners in Ouarzazate, Zagora, Ramlia, Merzouga and Ziz valley;',
      'Additional official guide in the Medinas of Marrakech and Fes;',
      '1 night in Berber camp in a luxury nomad tent;',
      'Camel ride with a view to reaching the camp;',
      'Astronomy Workshop in Zagora.'
    ],
    notIncluded: [],
    optionalActivities: [],
  },
  {
    slug: 'morocco-north-to-south-7-days',
    name: 'Morocco North to South Tour - 7 days',
    duration: '7 Days',
    shortDescription: 'Explore Morocco from north to south in just 7 days, starting from Tangier, passing through the Merzouga desert, until Marrakech.',
    description: 'Tangier is a port city located in the north of Morocco, accessible by ferry from Algeciras and Tarifa in Spain, as well as by plane from major European cities such as Lisbon, Madrid, etc.\n\nThis itinerary is ideal for those looking to explore Morocco from north to south in just 7 days, starting with a visit to Tangier, passing through the Merzouga desert, the imperial cities of Fes, Meknes and Marrakech, and also the blue town of Chefchaouen.\n\nThe trip ends in Marrakech, also known as the “Pearl of the South”, where there is an airport with a wide range of flights to various cities in Europe and internationally.\n\nTo customize your trip, contact us for more information !',
    startLocation: 'Tangier',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/DSC_0011-scaled.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/06/DSF3500-scaled.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/mercados.jpeg',
      'https://sirocotours.com/wp-content/uploads/2024/08/67.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Tangier - Chefchaouen',
        highlights: 'Arrival at the airport/port of Tangier, where our guide will be waiting for you punctually and properly identified. Then we will start the North to South tour.',
      },
      {
        day: 2,
        route: 'Chefchaouen - Meknes - Fes',
        highlights: 'Embark on a captivating journey to Fes, stopping along the way to marvel at the imperial city of Meknes , a beautifully preserved example of a large Roman colonial city.',
      },
      {
        day: 3,
        route: 'Fes',
        highlights: 'Paul Bowles described Fes as an “enchanted labyrinth sheltered from time”. This is why this day is dedicated to visiting this mysterious city. Visit Fes with the support of a guide dedicated solely to this city, so that you can get to know it in depth: its nooks, crannies, traditions, stories and histories.',
      },
      {
        day: 4,
        route: 'Fes - Ifrane - Midelt - Erfoud - Merzouga desert',
        highlights: 'We embark on our journey in the morning, bound for the enchanting cedar forests where nature’s splendor will captivate your senses. The serene atmosphere, crisp air, and the alluring scents of the wilderness create a tranquil escape.',
      },
      {
        day: 5,
        route: 'Merzouga - Todra gorges - Dades valley',
        highlights: 'After savoring a delicious breakfast and witnessing the breathtaking sunrise over the dunes, we embark on a journey to the captivating Dades valley.',
      },
      {
        day: 6,
        route: 'Dades valley - Ouarzazate - Ait Ben Haddou - Marrakech',
        highlights: 'Continuing along the enchanting “Route of the Thousand Kasbahs” , we make our way to Kalaat Mgouna, the City of Roses, where the air is fragrant with the sweet scent of blooms. Our journey also includes a visit to the oasis of Skoura, a serene oasis dotted with ancient Kasbahs, each one a masterpiece of Moroccan architecture, surrounded by lush palm forests that provide a cool oasis in the heart of the desert. This journey promises to be a memorable experience, filled with breathtaking scenery and rich cultural insights.',
      },
      {
        day: 7,
        route: 'Marrakech',
        highlights: 'Explore Marrakesh, Morocco’s red city and the country’s cosmopolitan hub. The intense aroma of spices, the colourful and exotic atmosphere, the hidden corners and secrets of its history and its surprising architecture make this city the most attractive and visited in Morocco.',
      },
    ],
    highlights: [
      'Tangier;',
      'Blue town of Chefchaouen;',
      'Imperial cities of Marrakesh, Meknes and Fes;',
      'Merzouga Desert;'
    ],
    included: [
      'Private transport throughout the trip in 4×4 car, new and safe, with air conditioning. All our cars have tourist license from the Government of Morocco and insurance for our customers;',
      'Permanent guide that speaks Spanish, English French and Portuguese;',
      'Accommodation throughout the trip, with breakfasts;',
      'Dinners in Dades valley, Merzouga;',
      'Additional official guide in the Medinas of Marrakech and Fes;',
      '1 night in Berber camp in a luxury nomad tent;',
      'Camel ride with a view to reaching the camp.'
    ],
    notIncluded: [],
    optionalActivities: [],
  },
  {
    slug: 'slow-tour-10-days',
    name: 'Slow Tour - 10 days',
    duration: '10 Days',
    shortDescription: 'The slow tour is ideal to explore Morocco without having to travel long distances, allowing for a complete immersion in a relaxed way.',
    description: 'This slow tour is ideal for those who want to explore Morocco without having to travel long distances by car. The itinerary is designed to allow for a complete immersion in a relaxed way, with extra time in the most important imperial cities: Fez and Marrakesh.\n\nThe first night in Casablanca also allows you to rest and recharge for the next days.\n\nWe suggest spending a night in Midelt, to avoid the long 8-hour drive from Fez to the Merzouga Desert, dividing it into two days. The hotel we suggest in Midelt is built in a chalet style and is located in a peaceful area with thermal waters, overlooking a large lake.\n\nTo customize your trip, contact us for more information !',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/maison-sahara-1.jpeg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/06/thea-image.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/roses-tea.jpeg',
      'https://sirocotours.com/wp-content/uploads/2024/08/EADEDD17-6758-4C63-BC51-ED9474FF08B8-copy.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca',
        highlights: 'Arrival at Casablanca airport where our guide will be waiting for you punctually and properly identified.',
      },
      {
        day: 2,
        route: 'Casablanca - Rabat',
        highlights: 'We continue to Rabat , where you will have the opportunity to enjoy its beautiful domes, minarets, wide avenues and green spaces.',
      },
      {
        day: 3,
        route: 'Rabat - Meknes - Fes',
        highlights: 'Embark on a captivating journey to Fes, stopping along the way to marvel at the imperial city of Meknes , a beautifully preserved example of a large Roman colonial city.',
      },
      {
        day: 4,
        route: 'Fes',
        highlights: 'Paul Bowles described Fes as an “enchanted labyrinth sheltered from time”. This is why this day is dedicated to visiting this mysterious city. Visit Fes with the support of a guide dedicated solely to this city, so that you can get to know it in depth: its nooks, crannies, traditions, stories and histories.',
      },
      {
        day: 5,
        route: 'Fes - Ifrane - Midelt',
        highlights: 'We embark on our journey in the morning, bound for the enchanting cedar forests where nature’s splendor will captivate your senses. The serene atmosphere, crisp air, and the alluring scents of the wilderness create a tranquil escape.',
      },
      {
        day: 6,
        route: 'Midelt - Erfoud - Rissani - Merzouga desert',
        highlights: 'Start the day on your way to the deepest desert. The journey is made smoothly through slopes and dunes that our guide knows like the back of his hands.',
      },
      {
        day: 7,
        route: 'Merzouga - Todra gorges - Dades valley',
        highlights: 'After savoring a delicious breakfast and witnessing the breathtaking sunrise over the dunes, we embark on a journey to the captivating Dades valley.',
      },
      {
        day: 8,
        route: 'Dades valley - Ouarzazate - Ait Ben Haddou - Marrakech',
        highlights: 'Continuing along the enchanting “Route of the Thousand Kasbahs,” we make our way to Kalaat Mgouna, the City of Roses, where the air is fragrant with the sweet scent of blooms. Our journey also includes a visit to the oasis of Skoura, a serene oasis dotted with ancient Kasbahs, each one a masterpiece of Moroccan architecture, surrounded by lush palm forests that provide a cool oasis in the heart of the desert. This journey promises to be a memorable experience, filled with breathtaking scenery and rich cultural insights.',
      },
      {
        day: 9,
        route: 'Marrakech',
        highlights: 'Explore Marrakesh, Morocco’s red city and the country’s cosmopolitan hub. The intense aroma of spices, the colourful and exotic atmosphere, the hidden corners and secrets of its history and its surprising architecture make this city the most attractive and visited in Morocco.',
      },
      {
        day: 10,
        route: 'Marrakech',
        highlights: '',
      },
    ],
    highlights: [
      'High and Middle Atlas Mountains;',
      'Imperial cities of Marrakesh, Meknes and Fes;',
      'Merzouga Desert;',
      'Hassan II Mosque;',
      'Fes’ Ceramics;'
    ],
    included: [
      'Private transport throughout the trip in 4×4 car, new and safe, with air conditioning. All our cars have tourist license from the Government of Morocco and insurance for our customers;',
      'Permanent guide that speaks Spanish, English French and Portuguese;',
      'Accommodation throughout the trip, with breakfasts;',
      'Dinners in Dades valley, Midelt, Merzouga;',
      'Additional official guide in the Medinas of Meknes, Marrakech and Fes;',
      '1 night in Berber camp in a luxury nomad tent;',
      'Camel ride with a view to reaching the camp.'
    ],
    notIncluded: [],
    optionalActivities: [],
  },
  {
    slug: 'revisit-morocco-15-days',
    name: 'Revisit Morocco - 15 Days',
    duration: '15 Days',
    shortDescription: 'For travelers wishing to return to Morocco once more, this itinerary offers new landscapes and destinations beyond the usual tourist routes.',
    description: 'If you have already visited Morocco, you’ve surely fallen in love with this country and have thought about returning for new discoveries!\n\nThis itinerary is dedicated to those who want the opportunity to explore magical destinations beyond the obvious.\n\nWe will explore less touristy places that will provide you with extraordinary new experiences. For example: a fresh fish lunch in caves with fishermen (near Agadir), a safari (Souss Massa National Park), staying in a centuries-old kasbah that is a national monument, crossing the deep and silent desert (Erg Chegaga dunes), attending an astronomy workshop (Zagora), contemplating the unique geology of the Anti-Atlas, and much more.\n\nFor sports enthusiasts, be amazed by the vast beaches where surfing, windsurfing, kitesurfing, and even paragliding are practiced.\n\nIn addition to incredible landscapes and abundant nature, during this trip, you will immerse yourself in local markets and visit UNESCO World Heritage sites (El Jadida and the medina of Essaouira), which are part of Morocco’s cultural wealth.\n\nThe tour is carefully planned for you, depending on the time you have for the trip and your preferences. Contact us so we can inform you about the best itinerary for you. This circuit is just an example of such excursions and, as such, is a suggestion.',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/paradise-valley.jpg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/ait-mansour.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/souss-massa-owl.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/painted-rocks-tafraoute-morocco-980x1306.jpg.webp'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca - El Jadida',
        highlights: 'In Casablanca, visit the Hassan II Mosque , the only one in Morocco that non-Muslims are allowed to visit. Finally, enjoy a coffee and traditional pastries at “ Parc de la Ligue Arabe ,” the largest park in the city.',
      },
      {
        day: 2,
        route: 'El Jadida - Safi - Essaouira',
        highlights: 'After exploring El Jadida in the morning, we will head towards Essaouira, passing through Safi first, a coastal city where you can visit the Ksar El Bahr fortress, built by the Portuguese colonizers. In the old town, food stalls and craft markets gather on Rue du Souq. Nearby is the National Ceramic Museum, also located in a fortress, where you can admire the local decorated ceramics.',
      },
      {
        day: 3,
        route: 'Essaouira',
        highlights: 'Essaouira is one of the most charming cities on the Moroccan coast and a multicultural artistic hub that captivated people like Jimi Hendrix, Orson Welles, and Bob Marley. With a seaside aroma that permanently invades the corners of its medina, the city stands out for its urban life, culture, and gastronomy.',
      },
      {
        day: 4,
        route: 'Essaouira - Agadir',
        highlights: 'Visit Nouveau Talborj , the city’s center, where you cannot miss the local shops full of color and movement. And why not enjoy a show at the open-air theater? The performances take place throughout the year and are a great way to appreciate and learn about this multifaceted culture.',
      },
      {
        day: 5,
        route: 'Agadir - Paradise Valley - Agadir',
        highlights: 'Allow yourself to be enveloped by the soothing sound of the waterfalls and enjoy the comforting tranquility of this unique environment, one you will never forget.',
      },
      {
        day: 6,
        route: 'Agadir - Souss Massa National Park - Mirleft',
        highlights: 'After a peaceful breakfast in Agadir, we will head to the Souss-Massa National Park, perfect for nature lovers. Don’t forget to bring your binoculars to fully enjoy the wildlife that inhabits this protected area. Covering 33,800 hectares, you will have the opportunity to observe species such as the red fox, the elusive Dorcas gazelle, and wild boars.',
      },
      {
        day: 7,
        route: 'Mirleft - Legzira – Sidi Ifni – Tiznit - Tafraoute',
        highlights: 'On this day, we will explore some of the country’s most beautiful beaches as well as the charming Berber village of Tafraoute.',
      },
      {
        day: 8,
        route: 'Tafraoute - Ait Mansour - Tafraoute',
        highlights: 'Wednesday is market day in Tafraoute, and the town fills with color and life as merchants offer their various goods. Try argan oil , one of the most sought-after ingredients in the world of cosmetics for its regenerative and nourishing qualities.',
      },
      {
        day: 9,
        route: 'Tafraoute – Tata - Foum Zguid',
        highlights: 'In the morning, we calmly head towards Tata . This charming city in the south of Morocco is also a wonderful oasis in the desert.',
      },
      {
        day: 10,
        route: 'Foum Zguid - Erg Chegaga (Desert)',
        highlights: 'The dunes of Erg Chegaga are located 98 km south of the city of Zagora . Due to the aridity of the region, these dunes are extremely difficult to access, only reachable by 4×4, camel, or for the more adventurous, on foot.',
      },
      {
        day: 11,
        route: 'Erg Chegaga – Zagora',
        highlights: 'From the desert, we head towards the lush Zagora . This city is famous for the mountain – or djebel – that dominates it. It is filled with beautiful and majestic palm trees that further enhance this charming town. Every Wednesday and Sunday, there is a large market in the city, ideal for getting to know traditional products and getting lost among the colors and spices.',
      },
      {
        day: 12,
        route: 'Zagora - Ouarzazate',
        highlights: 'Ouarzazate is known as the “Gateway to the Desert” due to its location between the Atlas Mountains and the Sahara Desert. There, we will take the opportunity to rest and spend the night.',
      },
      {
        day: 13,
        route: 'Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'On the way, we make a stop at Ait Ben Haddou , the most important site along the “Route of the Thousand Kasbahs,” classified as a UNESCO World Heritage Site. It is very famous for serving as a backdrop for many Hollywood movies, such as The Mummy , Gladiator , and Game of Thrones .',
      },
      {
        day: 14,
        route: 'Marrakech',
        highlights: 'During the day, you’ll be accompanied by a guide dedicated exclusively to Marrakesh, ensuring you experience the best the city has to offer. Discover its history, the enchanting atmosphere, and the sense of wonder and surprise that Marrakesh always delivers.',
      },
      {
        day: 15,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens This is Marrakesh’s only botanical garden, featuring exotic plants from around the world. It was designed by artist Jacques Majorelle and later owned by Yves Saint Laurent and Pierre Bergé.',
      },
    ],
    highlights: [],
    included: [
      'Airport Transfers: Arrival and departure transfers to and from the airport.',
      'Private Transportation: A modern and safe 4×4 vehicle or minivan with air conditioning for the entire trip. All vehicles are government-licensed for tourism in Morocco and insured for our clients.',
      'Permanent Guide: A dedicated guide fluent in Spanish, English, and Portuguese.',
      'Accommodations: Lodging throughout the trip, including breakfast.',
      '6 Dinners: Provided in Tafraoute, Foum Zguid, Zagora, the Erg Chegaga desert, and Ouarzazate.',
      'Additional Official Guide in Marrakesh.',
      'Astronomy Workshop in Zagora.',
      '1 Night in a Luxury Berber Camp: Accommodation in a nomadic-style luxury tent.',
      'Camel Ride: To reach the Berber camp while enjoying the desert views.'
    ],
    notIncluded: [
      'Beverages and Additional Meals, such as lunches and snacks.',
      'Entrance Fees: Tickets to monuments and/or museums.',
      'Anti-Atlas Mountains',
      'Beaches of Sidi Ifni, Legzira, Mirleft, Essaouira',
      'UNESCO World Heritage Sites',
      'Paradise Valley',
      'Souss Massa National Park',
      'Desert (Erg Chegaga dunes)',
      'Southern Morocco: Tafraoute, Foum Zguid, Ait Mansour',
      'Astronomy Night (Zagora)',
      'Hiking',
      'Safari (Souss Massa National Park)',
      'Fresh Fish Lunch in the Caves',
      'Surfing',
      'Bicycle Rides',
      'Astronomy Workshop',
      'Other Activities'
    ],
    optionalActivities: [],
  },
  {
    slug: 'desert-trip-4-days',
    name: 'Desert Trip - 4 days',
    duration: '4 Days',
    shortDescription: 'This desert adventure offers a unique chance to delve deep into the authentic heart of Morocco, bypassing the crowds of mass tourism.',
    description: 'On this extraordinary desert journey, you will embark on a captivating exploration of the vast dunes and shimmering sands of the Sahara Desert, where a tapestry of unparalleled landscapes awaits your discovery. Immerse yourself in the pure, crisp air of the Atlas Mountains, seamlessly blending into the haunting tranquility of the Desert’s expanse.\n\nThis adventure offers a unique chance to delve deep into the authentic heart of Morocco – desert, bypassing the crowds of mass tourism and allowing you to intimately connect with the rich tapestry of Moroccan culture. Participate in authentic experiences and engage firsthand with local traditions, fostering a deeper understanding and appreciation for the vibrant heritage of this fascinating land.\n\nNot only will you witness the breathtaking beauty of the Desert, but you’ll also have the opportunity to engage in traditional activities, learning the customs and crafts that have been passed down through generations. This trip promises a profound and transformative experience, where you’ll return home with memories that will last a lifetime.\n\nTo customize your trip, contact us for more information !',
    startLocation: 'Marrakech',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/08/desert-cume-4x4-2.jpeg',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/08/3-38fbd410-scaled.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/tajine.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Marrakech - Aitbenhaddou - Dades valley',
        highlights: 'We will commence your desert journey with a convenient pick-up from your Marrakech hotel at approximately 8:30 am, embarking on a thrilling tour towards the majestic High Atlas Mountains. Our first destination is a traditional Berber village, where you’ll be enchanted by the timeless charm and authentic way of life.',
      },
      {
        day: 2,
        route: 'Dades valley - Todra gorges - Merzouga desert',
        highlights: 'Arrive at the awe-inspiring Todra Gorges , where towering cliffs rise to an astonishing 300 meters, separated by mere 15 meters of sheer wonder. Take a leisurely stroll along the riverbank, surrounded by the stunning rock formations that define this unique landscape.',
      },
      {
        day: 3,
        route: 'Merzouga - Draa valley - Ouarzazate',
        highlights: 'The sunrise over the dunes is an ethereal moment etched in your memory forever; the crisp morning air of the desert is a sensation like no other. As you embark on a camel ride back to the support hotel, savor every moment of this unique experience.',
      },
      {
        day: 4,
        route: 'Ouarzazate - Anti Atlas - Marrakech',
        highlights: 'In the morning, we will head towards Marrakech at a leisurely pace, through the High Atlas Mountains. We will make stops along the way to rest and enjoy the nature.',
      },
    ],
    highlights: [
      'Berber culture;',
      'High atlas mountains;',
      'Gorges and oases;',
      'Merzouga Desert.'
    ],
    included: [
      'Private transport throughout the trip in 4×4 car, new and safe, with air conditioning. All our cars have tourist license from the Government of Morocco and insurance for our customers;',
      'Permanent guide that speaks Spanish, English French and Portuguese;',
      'Accommodation throughout the trip, with breakfasts;',
      'Dinners in Dades valley, Merzouga, Ouarzazate;',
      '1 night in Berber camp in a luxury nomad tent;',
      'Camel ride with a view to reaching the camp.'
    ],
    notIncluded: [],
    optionalActivities: [],
  },
  {
    slug: 'jewish-heritage-in-morocco-13-days',
    name: 'Jewish Heritage in Morocco - 13 days',
    duration: '13 Days',
    shortDescription: 'Explore the Jewish Heritage sites in Morocco on a private tour and get to know the life of moroccan jews and muslims throughout the centuries.',
    description: 'Morocco, a predominantly Muslim country, boasts a rich tapestry of cultural diversity, where the Jewish community has coexisted harmoniously for centuries, with roots tracing back to Roman times and an immigration history that spans as early as 70 AD. This unique blend of cultures offers an immersive experience for travelers eager to delve into the Jewish Heritage and understand the intricate ways in which Jews have integrated into the fabric of Moroccan society.\n\nEmbark on a 13-day customizable journey that promises to enrich your understanding of Moroccan culture and the remarkable history of its Jewish population. From bustling medinas to serene synagogues, this itinerary is designed to take you on a captivating exploration of the traditions, customs, and shared experiences that have shaped Morocco’s vibrant multicultural landscape.\n\nEach day holds new discoveries, from visiting historic Jewish quarters, where you’ll encounter stunning architecture and learn about the community’s rich past, to engaging in cultural exchanges with locals who warmly welcome visitors into their homes and share stories of coexistence and resilience. You’ll also have the opportunity to sample delicious Moroccan cuisine, infused with flavors and influences from both Muslim and Jewish traditions.\n\nBut the beauty of this itinerary lies in its flexibility. Whether you have more or fewer days at your disposal, our team is dedicated to crafting a personalized experience tailored to your interests, preferences, and time constraints. Contact us today to start planning your unforgettable journey through the heart of Morocco’s cultural mosaic.\n\nTo customize your trip, contact us for more information !',
    startLocation: 'Casablanca',
    endLocation: 'Marrakech',
    heroImage: 'https://sirocotours.com/wp-content/uploads/2024/09/ouarzazate-s.png',
    galleryImages: [
      'https://sirocotours.com/wp-content/uploads/2024/07/vince-gx-33DJx0Yb2cA-unsplash-scaled.jpg',
      'https://sirocotours.com/wp-content/uploads/2024/08/man-flower-cropped.jpeg',
      'https://sirocotours.com/wp-content/uploads/2024/08/mosque-minarete.jpg'
    ],
    itinerary: [
      {
        day: 1,
        route: 'Casablanca',
        highlights: 'Casablanca is the largest city in Morocco, with 3.7 million inhabitants. It is a coastal city located in the western part of Morocco and is considered the economic and business center of the country.',
      },
      {
        day: 2,
        route: 'Casablanca - Rabat - Asilah - Tangier',
        highlights: 'Rabat is a city that grew up in the 14th and 15th centuries, with the expulsion of Andalusians from the Iberian Peninsula. It is surrounded by three walls corresponding to the most remarkable phases of its history: the Almohad Wall, the Andalusian Wall and the Alawite Wall. Your guide will show you walls and the main points of the city, such as the Hassan Tower, situated on top of an imposing mosque, the opulent tomb of Mohammed V, decorated with stained glass, white marble and a wrought iron entrance with a staircase leading to an impressive dome.',
      },
      {
        day: 3,
        route: 'Tangier - Tetouan - Chefchaouen',
        highlights: 'Discover the vibrant city of Tangier, where the medina and kasbah stand as testaments to its rich history, a melting pot of civilizations and cultures that have left their mark. This city, renowned for its artistic freedom and unique customs, served as a haven for renowned authors like Paul Bowles in the 20th century. After immersing yourself in Tangier’s history, embark on a journey to Tetouan, Morocco’s hidden gem nestled between the Rif Mountains and the Mediterranean Sea. Tetouan, a city untouched by mass tourism, offers a glimpse into Morocco’s past, where you can lose yourself in its…',
      },
      {
        day: 4,
        route: 'Chefchaouen - Volubilis - Meknes - Fes',
        highlights: 'Embark on a captivating journey to Fes, stopping along the way to marvel at the imperial city of Meknes and the exquisite Roman ruins of Volubilis , a beautifully preserved example of a large Roman colonial city.',
      },
      {
        day: 5,
        route: 'Fes',
        highlights: 'Paul Bowles’ enchanting description of Fez as a “sheltered enchanted labyrinth of time” sets the stage for an unforgettable exploration of this mystical city. Join a dedicated guide, solely focused on Fez, to delve deep into its intricate corners, rich traditions, and captivating tales.',
      },
      {
        day: 6,
        route: 'Fes - Sefrou - Ifrane - Midelt',
        highlights: 'We embark on our journey in the morning, bound for the enchanting cedar forests where nature’s splendor will captivate your senses. The serene atmosphere, crisp air, and the alluring scents of the wilderness create a tranquil escape.',
      },
      {
        day: 7,
        route: 'Midelt - Rissani - Khamlia - Merzouga desert',
        highlights: 'Start the day on your way to the deepest desert. The journey is made smoothly through slopes and dunes that our guide knows like the back of his hands.',
      },
      {
        day: 8,
        route: 'Merzouga - Todra gorges - Ouarzazate',
        highlights: 'After savoring a delicious breakfast and witnessing the breathtaking sunrise over the dunes, we embark on a journey to the captivating town of Ouarzazate.',
      },
      {
        day: 9,
        route: 'Ouarzazate – Ait Ben Haddou – Marrakech',
        highlights: 'We will continue our journey and stop at Ait Benhaddou , the most important site on the route of the ‘Thousand Kasbahs’, classified as a UNESCO World Heritage Site. He is famous for having served as the setting in many Hollywood films, such as “The Mummy”, “The Gladiator” and “The Game of Thrones”.',
      },
      {
        day: 10,
        route: 'Marrakech',
        highlights: 'During the day, be accompanied by a guide dedicated exclusively to the city of Marrakesh, so that you can enjoy the best this city has to offer, explore its history and the atmosphere of fantasy and surprise that Marrakesh always has.',
      },
      {
        day: 11,
        route: 'Marrakech',
        highlights: 'Majorelle Gardens: This is the only botanical garden in Marrakech. It was designed by the artist Jacques Majorelle and has belonged to Yves Saint-Laurent and Pierre Bergé since 1980. You can enjoy a wonderful garden with exotic flowers from all over the world.',
      },
      {
        day: 12,
        route: 'Marrakech - Essaouira',
        highlights: 'Its medina was built in the 18th century and is one of the few in the world that has actually had architectural planning. It was at that time that the city was named Essaouira, which literally means “the beautifully designed”. Today, the city is considered a UNESCO World Heritage Site and is the place of choice for most Moroccan visual artists.',
      },
      {
        day: 13,
        route: 'Essaouira - Marrakech',
        highlights: '',
      },
    ],
    highlights: [
      'Jewish Culture in Morocco;',
      'Northern Morocco: Tangier, Tetouan and Chefchaouen;',
      'High and Middle Atlas Mountains;',
      'Hassan II Mosque;',
      'Synagogues in Fes and Essaouira;',
      'Kosher restaurant in Marrakech;'
    ],
    included: [
      'Private transport throughout the trip in 4×4 car, new and safe, with air conditioning. All our cars have tourist license from the Government of Morocco and insurance for our customers;',
      'Permanent guide that speaks Spanish, English French and Portuguese;',
      'Accommodation throughout the trip, with breakfasts;',
      'Dinners in Ouarzazate, Midelt, Merzouga;',
      'Additional official guide in the Medinas of Meknes, Sefrou, Marrakech and Fes;',
      '1 night in Berber camp in a luxury nomad tent;',
      'Camel ride with a view to reaching the camp.'
    ],
    notIncluded: [],
    optionalActivities: [],
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return tours.map(t => t.slug);
}