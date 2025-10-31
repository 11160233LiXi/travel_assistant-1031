import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatBox from '../ChatBox';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main>
        <Outlet />
      </main>
      <ChatBox />
      <div className="fixed top-4 right-4 z-[9999]"> {/* 使用一個極大的 z-index */}
        <ThemeToggle />
      </div>
    </div>
  );
};
export default Layout;