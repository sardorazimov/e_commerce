import { Folder, HomeIcon, Icon, Mail, Settings } from 'lucide-react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/product',
    icon: <Folder width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Product', path: '/product' },
      { title: 'Menu', path: '/menu' },
      { title: 'Savat', path: '/client' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Mail   width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Folder width="24" height="24" />,
  },
];