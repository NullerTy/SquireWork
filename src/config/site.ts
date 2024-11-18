import { Navigation, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: '[rounded]',
  description: 'Dream. Develop. Dominate. Squared.',
  url: 'https://roundedsq.com',
  links: [],
  company: {
    name: 'RoundedSQ d.o.o.',
    adress: {
      street: 'Zg. Hoče 6c',
      zip: 2311,
      city: 'Hoče',
      country: 'Slovenija',
    },
    contact: {
      email: 'info@roundedsq.com',
      phone: '031753780',
    },
  },
}

export const topNav: Navigation = {
  items: [
    {
      title: '𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨',
      href: '/content/our-work',
    },
    {
      title: '𝗠𝗲𝗱𝗶𝗮',
      href: '/content/media',
    },
    {
      title: '𝙅𝙤𝙗𝙨',
      href: '/content/jobs',
    },
  ],
}
