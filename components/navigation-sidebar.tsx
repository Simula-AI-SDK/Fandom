'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Home, Compass, MessageSquare, Bell, User, MoreHorizontal, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  badge?: string | number;
  href?: string;
}
const NavItem = ({
  icon,
  label,
  isActive,
  onClick,
  badge,
  href
}: NavItemProps) => {
  const content = (
    <>
      <div className={cn("flex items-center justify-center mb-1.5 transition-colors duration-200", isActive ? "text-[#520044]" : "text-[#291927]")}>
        {icon}
      </div>
      <span className={cn("text-[10px] font-medium leading-none text-center truncate w-full px-1 transition-colors duration-200", isActive ? "text-[#520044]" : "text-[#595358]")}>
        {label}
      </span>
      {badge && <span className="absolute top-2 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#fa005a] px-1 text-[9px] font-bold text-white shadow-sm">
          {badge}
        </span>}
    </>
  );

  const className = cn("group relative flex flex-col items-center justify-center w-[58px] h-[58px] rounded-md transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#520044]/30", isActive ? "bg-white shadow-sm" : "hover:bg-black/5");

  if (href) {
    return <Link href={href} className={className} aria-label={label}>{content}</Link>;
  }

  return <button onClick={onClick} className={className} aria-label={label}>{content}</button>;
};

// @component: NavigationSidebar
export const NavigationSidebar = () => {
  const [activeTab, setActiveTab] = useState('Menu');
  const [isExpanded, setIsExpanded] = useState(false);
  const menuItems = [{
    id: 'Menu',
    label: 'Menu',
    icon: <Menu size={18} />
  }, {
    id: 'Home',
    label: 'Home',
    icon: <Home size={18} />,
    href: '/'
  }, {
    id: 'Explore',
    label: 'Explore',
    icon: <Compass size={18} />
  }, {
    id: 'Discussions',
    label: 'Talk',
    icon: <MessageSquare size={18} />,
    badge: 3
  }, {
    id: 'Notifications',
    label: 'Alerts',
    icon: <Bell size={18} />,
    badge: '!'
  }] as any[];
  const bottomItems = [{
    id: 'Profile',
    label: 'Profile',
    icon: <User size={18} />
  }, {
    id: 'More',
    label: 'More',
    icon: <MoreHorizontal size={18} />
  }] as any[];

  // @return
  return <aside className="fixed left-0 top-0 h-full flex flex-col items-center bg-[#f4f4f4] border-r border-gray-200 z-50">
      {/* Top Navigation Section */}
      <nav className="flex-1 w-[66px] flex flex-col items-center py-3 gap-1.5 mt-11" aria-label="Fandom navigation">
        {menuItems.map(item => <NavItem key={item.id} icon={item.icon} label={item.label} badge={item.badge} isActive={activeTab === item.id} onClick={() => setActiveTab(item.id)} href={item.href} />)}

        <div className="w-8 h-[1px] bg-gray-300 my-2" aria-hidden="true" />

        {/* Dynamic Panel Content (Placeholder for expanded states) */}
        <AnimatePresence>
          {isExpanded && <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} className="absolute left-[66px] top-0 h-full w-64 bg-white shadow-xl border-r border-gray-100 p-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#291927]">Explore Fandom</h3>
                <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-gray-600">
                  <HelpCircle size={18} />
                </button>
              </div>
              <ul className="space-y-3">
                {['Communities', 'Movies', 'TV', 'Video Games', 'Anime'].map(category => <li key={category} className="group">
                    <a href="#" className="flex items-center text-sm font-medium text-[#595358] hover:text-[#520044] transition-colors">
                      <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#520044] mr-3" />
                      {category}
                    </a>
                  </li>)}
              </ul>
            </motion.div>}
        </AnimatePresence>
      </nav>

      {/* Bottom Profile/Meta Section */}
      <div className="w-[66px] flex flex-col items-center py-3 gap-1.5 bg-[#ebebeb]/50">
        {bottomItems.map(item => <NavItem key={item.id} icon={item.icon} label={item.label} isActive={activeTab === item.id} onClick={() => {
        setActiveTab(item.id);
        if (item.id === 'More') setIsExpanded(!isExpanded);
      }} />)}
      </div>

      {/* Background container style from original */}
      <div className="hidden">
        <div className="global-explore-navigation__top" style={{
        display: 'grid',
        justifyItems: 'center',
        backgroundColor: 'rgb(244, 244, 244)',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '0%',
        padding: '12px 0px 12px 0px',
        width: '66px'
      }} />
      </div>
    </aside>;
};
