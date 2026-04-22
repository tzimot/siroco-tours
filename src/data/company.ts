export interface Phone {
  country: string;
  label: string;
  number: string;
  tel: string;
  flag: string;
}

export const company = {
  email: 'info@sirocotours.com',
  office: '4 Rue Al Yarmouke, Casablanca 20100, Morocco',
  legal: 'Siroco Tours Morocco is owned by SOCIÉTÉ MONO TOURS, S.A.R.L. — Registre de Commerce 447315',
  whatsapp: '+351923578090',
};

export const phones: Phone[] = [
  {
    country: 'Portugal',
    label: 'PORTUGAL',
    number: '+351 923 578 090',
    tel: '+351923578090',
    flag: '🇵🇹',
  },
  {
    country: 'Brazil',
    label: 'BRAZIL',
    number: '+55 113 280 9467',
    tel: '+551132809467',
    flag: '🇧🇷',
  },
  {
    country: 'Morocco',
    label: 'MOROCCO',
    number: '+212 644 957 982',
    tel: '+212644957982',
    flag: '🇲🇦',
  },
  {
    country: 'USA',
    label: 'USA',
    number: '+1 716 218 3861',
    tel: '+17162183861',
    flag: '🇺🇸',
  },
  {
    country: 'China',
    label: 'CHINA',
    number: '+86 159 5181 3373',
    tel: '+8615951813373',
    flag: '🇨🇳',
  },
];

export const contactFormInterests: string[] = [
  'Imperial Cities',
  'History and Culture',
  'Nature and Well-being',
  'Sea and Beaches',
  'Desert',
];
