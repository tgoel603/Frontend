import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="relative w-1/3 min-w-[320px]">
        <input 
          type="text" 
          placeholder="Find influencers to collaborate with" 
          className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-orange-50 text-amber-600 font-semibold text-xs px-3 py-1.5 rounded-md border border-amber-200 hover:bg-amber-100 transition duration-150">
          ⚡ Upgrade
        </button>
        <button className="bg-blue-600 text-white font-medium text-xs px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150">
          + Create Campaign
        </button>
        <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
            A
          </div>
          <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}