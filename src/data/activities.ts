import type { IconName } from '@/components/ui/icons';

export interface Activity {
  id: string;
  title: string;
  role: string;
  date: string;
  icon: IconName;
  description?: string;
}

/** Leadership, organising and volunteer work listed on the original portfolio. */
export const activities: Activity[] = [
  {
    id: 'robo-tech-olympiad-2023',
    title: 'Robo Tech Olympiad 2023',
    role: 'Organising Team Member',
    date: '7 February 2023',
    icon: 'award',
    description:
      'National robotics competition run by Robo Tech Valley and Mawlana Bhashani Science and Technology University.',
  },
  {
    id: 'nactar-robotics-2022',
    title: 'NACTAR Robotics Competition 2022',
    role: 'Organising Team Member',
    date: '6 August 2022',
    icon: 'award',
    description:
      'National event organised by Robo Tech Valley, NACTAR and the ICT Division of Bangladesh, held at NACTAR, Bogura.',
  },
  {
    id: 'cdc-uap',
    title: 'Career Development Club, CSE — UAP',
    role: 'President',
    date: 'Fall 2021',
    icon: 'users',
    description: 'Led the career development club of the Department of Computer Science & Engineering.',
  },
  {
    id: 'nitcyd',
    title: 'National IT Competition for Youth with Disabilities',
    role: 'Volunteer',
    date: '2019 & 2020',
    icon: 'heart-handshake',
  },
  {
    id: 'icpc-2017',
    title: 'International Collegiate Programming Contest (ICPC)',
    role: 'Volunteer',
    date: '2017',
    icon: 'heart-handshake',
  },
];
