import React from 'react';
import { Search, Bell, ShieldAlert, Sliders, User } from 'lucide-react';
import { IMAGES } from '../constants';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-[#0b1326]/40 backdrop-blur-md flex justify-between items-center px-8 z-40 bg-gradient-to-b from-[#131b2e] to-transparent">
      <div className="flex items-center gap-8">
        <h1 className="font-['Space_Grotesk'] font-black text-[#89ceff] tracking-tighter text-xl uppercase">Ethereal Command</h1>
        <nav className="hidden lg:flex items-center gap-6 font-['Inter'] text-sm font-medium">
          <a className="text-[#89ceff] border-b-2 border-[#0ea5e9] pb-1" href="#">Network Status</a>
          <a className="text-slate-400 hover:text-[#89ceff] transition-colors" href="#">AI Engine</a>
          <a className="text-slate-400 hover:text-[#89ceff] transition-colors" href="#">Live Queue</a>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#88929b] w-4 h-4" />
          <input 
            className="bg-[#131b2e] border-none rounded-full py-1.5 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all outline-none text-[#dae2fd] placeholder:text-[#88929b]/50" 
            placeholder="Search contacts or active calls..." 
            type="text"
          />
        </div>
        
        <div className="flex items-center gap-4 text-slate-400">
          <button className="hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#ffb690] rounded-full"></span>
          </button>
          <button className="hover:text-white transition-colors">
            <ShieldAlert className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition-colors">
            <Sliders className="w-5 h-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-[#2d3449] overflow-hidden border border-[#3e4850]/20">
            <img 
              alt="Agent Avatar" 
              className="w-full h-full object-cover" 
              src={IMAGES.agent}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
