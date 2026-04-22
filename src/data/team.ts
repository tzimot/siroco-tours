export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  languages: string[];
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Alexandra Rego',
    role: 'Tour Designer & Public Relations',
    bio: 'Enchanted by this magical country, Alexandra was motivated by this project to collaborate as a tour designer and public relations specialist for this company. Here, she feels she can put her intuition and talent to work, precisely understanding each traveler\'s desires and expectations, and gladly helping, in a personalized way, to create "that" unforgettable and remarkable trip.',
    languages: ['Portuguese', 'English', 'French', 'Spanish'],
    initials: 'AR',
  },
  {
    name: 'Pedro Lencastre',
    role: 'CEO',
    bio: 'A native of Portugal, Pedro is a lover of the peace of the Sahara Desert and its oases, as well as the rich Moroccan cuisine. Above all, he enjoys experiencing the country\'s traditions as a local and engaging with the people. Pedro is the CEO of the company. His goal is always to exceed each client\'s expectations, ensuring that every traveler finishes their journey as a true admirer of Morocco.',
    languages: ['Portuguese', 'English'],
    initials: 'PL',
  },
  {
    name: 'Mohamed Boughrara',
    role: 'Senior Tour Guide',
    bio: 'With 15 years of experience as a tour guide and a degree in Spanish literature from the University of Fez, Mohammed is a native of the desert who knows the Sahara, nomadic traditions, and Berber culture like no other. Perfectionist, dedicated, cheerful, and hospitable, Mohammed proudly and engagingly shares the history of his country.',
    languages: ['Spanish', 'Portuguese', 'English', 'Arabic', 'Berber'],
    initials: 'MB',
  },
  {
    name: 'Lee Meneres',
    role: 'Reservations & Accommodations',
    bio: 'Passionate about travel, Lee has explored several countries and, of course, Morocco. She loves the urban and exotic charm of Morocco\'s imperial cities. She is responsible for reservations and selecting the enchanting accommodations used in our trips, a key part of making our clients\' dream vacations a reality.',
    languages: ['Portuguese', 'English', 'Spanish'],
    initials: 'LM',
  },
  {
    name: 'Jamal Ouzina',
    role: 'Tour Guide',
    bio: 'Jamal is a proud Moroccan tour guide with 14 years of experience. For him, showing visitors around the country is a pleasure, not just a job. He has extensive knowledge of local culture and is always ready to make the wishes of our clients become a reality.',
    languages: ['Portuguese', 'Spanish', 'German', 'Arabic', 'Berber'],
    initials: 'JO',
  },
  {
    name: 'Rachid Ouzina',
    role: 'Senior Tour Guide',
    bio: 'Rachid has 18 years of experience as a tour guide. He has an in-depth knowledge of his country and always goes the extra mile to ensure that our travelers leave this adventure with the best memories of this incredible country. Friendly, cultured and fun, he is always attentive to everyone\'s needs, adding a unique flavor to each trip.',
    languages: ['Portuguese', 'Spanish', 'Italian', 'French', 'Arabic', 'Berber'],
    initials: 'RO',
  },
  {
    name: 'Sónia Medeiros',
    role: 'Brazil Representative',
    bio: 'Our representative in Brazil currently divides her time between her homeland and Morocco. She feels her heart is now half Brazilian and half Moroccan. Always available, Sónia knows how to balance the tastes of her fellow Brazilians and anticipate their preferences, offering accurate suggestions and helping to clarify any questions.',
    languages: ['Portuguese', 'Spanish'],
    initials: 'SM',
  },
  {
    name: 'Thea Xu',
    role: 'China Representative',
    bio: 'Originally from China, Thea first visited Morocco 10 years ago, following the establishment of diplomatic relations between the two countries. Since then, she has fallen in love with the country, its people, and particularly the Sahara. Having explored Morocco extensively, it has now become her chosen home. With deep knowledge from the North to the South, she knows how to recommend the most beautiful hidden corners of Morocco to clients.',
    languages: ['Chinese', 'English'],
    initials: 'TX',
  },
]
