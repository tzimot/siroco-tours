export interface ValueProp { icon: string; title: string; description: string; }
export interface HowItWorksStep { number: number; title: string; description: string; }

export const homeContent = {
  seo: {
    title: 'Morocco Private Tours | Luxury & Authentic Custom Travel - Siroco',
    description: 'Morocco Private Tours - Experience cultural encounters, desert, culinary & family adventures with best guides to meet the true soul of Morocco!',
  },
  hero: {
    title: 'Morocco Private Tours',
    titleLong: 'Morocco Private Tours – Siroco Tours Morocco',
  },
  intro: {
    subtitle: 'Discover Our Morocco Private Tours',
    heading: 'Personalised tours in Morocco – original and genuine experiences',
  },
  valueProps: [
    {
      icon: 'shield-check',
      title: 'Safe and Private Tours',
      description: 'Journey with confidence alongside our experienced guides, whose intimate knowledge of Morocco guarantees a safe and private adventure.',
    },
    {
      icon: 'sliders',
      title: 'Fully Customizable Itineraries',
      description: 'We adapt every detail of your tour to your preferences and are dedicated to answering all your inquiries.',
    },
    {
      icon: 'star',
      title: 'Quality and Comfort',
      description: 'Experience the true essence of Morocco\'s captivating culture, all while enjoying the highest standards of comfort and quality.',
    },
  ] as ValueProp[],
  features: [
    {
      icon: 'map',
      title: 'Original Itinerary',
      description: 'We specialise in planning original itineraries so that you can explore the essence of Morocco away from the \'mass tourism\' routes. Our aim is to provide a personal service and suggest ideas that suit your style and preferences.',
    },
    {
      icon: 'headphones',
      title: '24 Hour Assistance',
      description: 'From the moment you first contact us, we\'ll be on hand to clarify all your doubts and support you at any time, via email or WhatsApp. All tours are personalised. You\'ll feel accompanied throughout the process.',
    },
    {
      icon: 'bed',
      title: 'Quality Accommodation',
      description: 'The accommodation we have carefully chosen for you has typical Moroccan decor and is of great quality and charm. The cuisine is also excellent. We are very careful in our choice of hotels and they are all very well located.',
    },
    {
      icon: 'car',
      title: 'Private Transport',
      description: 'Our vehicles (SUVs, 4x4s, vans, and buses) are comfortable, new, equipped with air conditioning, and officially licensed for tourism by the Moroccan Government.',
    },
  ] as ValueProp[],
  howItWorks: [
    {
      number: 1,
      title: 'Contact us for more information',
      description: 'Feel free to talk to us, no strings attached! You can send us an email, WhatsApp message, fill in our detailed form or call us on our telephone numbers. We\'re here to help you!',
    },
    {
      number: 2,
      title: 'Clarify all your doubts',
      description: 'We want to understand your preferences and give you the best possible advice. Talk to one of our attentive travel agents. We\'ll create the perfect trip, tailored to your needs and desires.',
    },
    {
      number: 3,
      title: 'Direct and detailed communication',
      description: 'We\'ll provide you with a suggested itinerary that\'s tailored to your preferences. Once you\'ve decided to travel, we\'ll confirm the booking and send you a travel guide with everything you need to know and the final details.',
    },
    {
      number: 4,
      title: 'Relax and enjoy your trip',
      description: 'With the attentive company of one of our experienced English-speaking private guides, you\'ll get to know the real Morocco, away from the mass tourism routes, and explore its culture by getting in touch with the local population.',
    },
  ] as HowItWorksStep[],
  parallaxCtaHeading: 'Our Morocco Private Tours are designed to your taste',
  activitiesCtaHeading: 'We offer a variety of extra activities to make your experience even more exciting',
  testimonialsHeading: 'Top-rated on TripAdvisor with over 1000 Reviews',
};
