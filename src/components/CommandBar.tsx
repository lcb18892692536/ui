import React from 'react';
import { Keyboard, Mic, PhoneCall, Mail, Sparkles } from 'lucide-react';

export function CommandBar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-auto max-w-lg bg-[#2d3449]/70 backdrop-blur-[32px] rounded-full px-6 py-3 border border-[#3e4850]/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex items-center gap-6 z-50">
      <button className="flex flex-col items-center gap-1 group">
        <Keyboard className="w-5 h-5 text-[#88929b] group-hover:text-[#89ceff] transition-colors" />
        <span className="text-[8px] font-bold text-[#88929b] uppercase">Shortcuts</span>
      </button>
      
      <div className="w-px h-8 bg-[#3e4850]/20"></div>
      
      <button className="w-10 h-10 rounded-full bg-[#89ceff]/20 flex items-center justify-center text-[#89ceff] hover:bg-[#89ceff] transition-all hover:text-[#00344d] group">
        <Mic className="w-5 h-5" />
      </button>
      
      <button className="w-10 h-10 rounded-full bg-[#131b2e] flex items-center justify-center text-[#dae2fd] hover:bg-[#222a3d] transition-all">
        <PhoneCall className="w-5 h-5" />
      </button>
      
      <button className="w-10 h-10 rounded-full bg-[#131b2e] flex items-center justify-center text-[#dae2fd] hover:bg-[#222a3d] transition-all">
        <Mail className="w-5 h-5" />
      </button>
      
      <div className="w-px h-8 bg-[#3e4850]/20"></div>
      
      <button className="flex flex-col items-center gap-1 group">
        <Sparkles className="w-5 h-5 text-[#88929b] group-hover:text-[#ffb690] transition-colors" />
        <span className="text-[8px] font-bold text-[#88929b] uppercase">AI Assist</span>
      </button>
    </div>
  );
}
