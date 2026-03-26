import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  History, 
  Settings, 
  HelpCircle, 
  LogOut,
  Box
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Users, label: 'CRM' },
  { icon: History, label: 'History' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#171f33]/60 backdrop-blur-xl flex flex-col py-8 px-4 font-['Space_Grotesk'] tracking-tight shadow-[0_40px_80px_rgba(137,206,255,0.08)] z-50">
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-[#89ceff] to-[#0ea5e9] rounded-lg flex items-center justify-center">
          <Box className="text-[#003751] w-6 h-6 fill-current" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-[#89ceff]">Agent Alpha</span>
          <span className="text-[10px] uppercase tracking-widest text-[#88929b]">Level 4 Operator</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center gap-3 py-3 px-4 transition-all duration-300 rounded-lg group",
              item.active 
                ? "bg-[#222a3d] text-[#89ceff] rounded-r-full border-r-4 border-[#0ea5e9]" 
                : "text-slate-400 hover:text-slate-200 hover:bg-[#222a3d]/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-1 pt-4 border-t border-[#3e4850]/10">
        <button className="w-full flex items-center gap-3 py-3 px-4 text-slate-400 hover:text-slate-200 hover:bg-[#222a3d]/50 transition-all duration-300 rounded-lg">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Support</span>
        </button>
        <button className="w-full flex items-center gap-3 py-3 px-4 text-slate-400 hover:text-[#ffb4ab] transition-all duration-300 rounded-lg">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
