import Link from 'next/link';
import { ChartBarDecreasing, Settings, Users2 } from 'lucide-react';

// Move outside component - computed at build time!
const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: ChartBarDecreasing,
  },
  {
    title: 'Members',
    url: '/members',
    icon: Users2,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: Settings,
  },
];

export function AppSidebarContent() {
  return (
    <nav className="space-y-2">
      <div className="mb-4">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Menu
        </h2>
      </div>

      {menuItems.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
