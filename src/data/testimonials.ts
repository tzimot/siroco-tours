export interface Testimonial {
  name: string;
  location: string;
  title: string;
  text: string;
  source: string;
  avatar?: string;
}

export const testimonialsHeading = 'Top-rated on TripAdvisor with over 1000 Reviews';

export const testimonials: Testimonial[] = [
  {
    name: 'Mónica Pereira',
    location: 'Rio de Janeiro',
    title: 'Unforgettable experience!',
    text: 'Wonderful experience in the desert. My friend and I did the 3-day tour starting in Marrakech and ending in Fes. We stayed at the Ksar Sultan Dades hotel and in the desert tent. The Sultan Dades hotel is perfect. Very comfortable, top-notch hygiene and attentive staff. The tent in the desert is comfortable (for those who feel hot, it is better to opt for the tent package with air conditioning).',
    source: 'TripAdvisor',
    avatar: 'https://sirocotours.com/wp-content/uploads/2024/06/monica-a.jpg',
  },
  {
    name: 'Brunella C',
    location: 'Miami, Florida',
    title: 'Dream trip!',
    text: 'It was a beautiful travel day where everything worked perfectly!! From planning to execution, the team was super professional, taking care of every detail with great care and attention. The recommendations for hotels, places to visit and the details of the itinerary were very well taken care of, from someone who really knows the country. Our guides and driver were incredible.',
    source: 'TripAdvisor',
    avatar: 'https://sirocotours.com/wp-content/uploads/2024/06/default-avatar-2020-22.jpg',
  },
  {
    name: 'Patricia B',
    location: 'Porto Alegre, RS',
    title: 'Unforgettable trip!',
    text: 'We took a 10-day family trip through Morocco with Siroco Tours. Impeccable service, from pre-trip support with recommendations and tips, answering questions via Whatsapp. During the trip there is always a guide speaking Portuguese or \'Portunhol\' accompanying us, the selection of hotels is also wonderful. I highly recommend their service.',
    source: 'TripAdvisor',
    avatar: 'https://sirocotours.com/wp-content/uploads/2024/06/default-avatar-2020-62.jpg',
  },
  {
    name: 'Yuri D',
    location: 'Ubatuba, SP',
    title: 'Great excursion!',
    text: 'The excursion with Siroco Tours was impeccable, our guide Jamal was extremely attentive and made our trip calm and peaceful even with longer journeys. The hotels were great too. This trip is important to have a guide and we couldn\'t have chosen better. Guides in imperial cities are very important.',
    source: 'TripAdvisor',
    avatar: 'https://sirocotours.com/wp-content/uploads/2024/06/yuri-d.jpg',
  },
]
