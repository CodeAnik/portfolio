export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];
