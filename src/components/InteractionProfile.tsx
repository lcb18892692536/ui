import React from 'react';
import { Edit3, FileText } from 'lucide-react';
import { INTERACTIONS } from '../constants';
import { cn } from '../lib/utils';

export function InteractionProfile() {
  return (
    <section className="space-y-6">
      <div className="bg-[#171f33] rounded-lg p-6">
        <h3 className="font-['Space_Grotesk'] font-bold text-[#dae2fd] mb-6">Interaction Profile</h3>
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#88929b] block mb-2">Account Status</span>
            <div className="p-3 rounded-lg bg-[#89ceff]/5 border border-[#89ceff]/10 flex items-center justify-between">
              <span className="text-xs font-medium text-[#dae2fd]">Active Member</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#89ceff]/20 text-[#89ceff] rounded-full">since 2021</span>
            </div>
          </div>
          
          <div>
            <span className="text-[10px] font-bold uppercase text-[#88929b] block mb-3">Recent Interactions</span>
            <div className="space-y-4">
              {INTERACTIONS.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                    item.status === 'error' ? "bg-[#ffb690]" : 
                    item.status === 'success' ? "bg-[#89ceff]" : "bg-[#88929b]"
                  )}></div>
                  <div>
                    <p className="text-xs font-medium text-[#dae2fd]">{item.type}</p>
                    <p className="text-[10px] text-[#88929b]">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-[10px] font-bold uppercase text-[#88929b] block mb-3">Internal Notes</span>
            <div className="bg-[#131b2e] p-4 rounded-lg italic text-xs text-[#bec8d2] leading-relaxed border border-[#3e4850]/10">
              "Elena prefers direct technical details. Avoid standard script loops. Focus on API stability metrics."
            </div>
          </div>
          
          <button className="w-full py-4 bg-gradient-to-r from-[#89ceff] to-[#0ea5e9] text-[#003751] font-bold text-xs rounded-xl shadow-lg shadow-[#89ceff]/10 hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <Edit3 className="w-4 h-4" />
            Edit Full Profile
          </button>
        </div>
      </div>

      <div className="bg-[#171f33] rounded-lg p-6 overflow-hidden relative">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#89ceff]/10 blur-3xl rounded-full"></div>
        <h3 className="text-[10px] font-bold uppercase text-[#88929b] mb-4">Customer Health Score</h3>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-[#2d3449]" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-[#89ceff]" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" stroke-dashoffset="35" stroke-width="4"></circle>
            </svg>
            <span className="absolute text-sm font-bold text-[#dae2fd]">84%</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#dae2fd]">Exceeds Benchmark</p>
            <p className="text-[10px] text-[#88929b]">Up 5% since last quarter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
