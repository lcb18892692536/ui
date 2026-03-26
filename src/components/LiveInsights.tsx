import React from 'react';
import { Brain, Share2 } from 'lucide-react';
import { INSIGHTS } from '../constants';
import { cn } from '../lib/utils';

export function LiveInsights() {
  return (
    <div className="bg-[#171f33] rounded-lg h-[500px] flex flex-col relative overflow-hidden">
      <div className="p-6 border-b border-[#3e4850]/10 flex justify-between items-center bg-[#171f33]/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#89ceff]/10 flex items-center justify-center">
            <Brain className="text-[#89ceff] w-5 h-5" />
          </div>
          <h3 className="font-['Space_Grotesk'] font-bold text-[#dae2fd]">AI Live Insights</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#89ceff] rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold text-[#89ceff] uppercase tracking-widest">Processing...</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
        <div className="space-y-4">
          {INSIGHTS.map((insight) => (
            <div key={insight.id} className={cn("flex gap-4", insight.isAI && "flex-row-reverse")}>
              <div className={cn(
                "w-8 h-8 rounded-full shrink-0 flex items-center justify-center",
                insight.isAI ? "bg-[#0ea5e9]" : "bg-[#2d3449]"
              )}>
                <span className={cn(
                  "text-[10px] font-bold",
                  insight.isAI ? "text-[#003751]" : "text-[#88929b]"
                )}>
                  {insight.initials}
                </span>
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm max-w-[80%]",
                insight.isAI 
                  ? "bg-[#89ceff]/5 text-[#89ceff] rounded-tr-none border border-[#89ceff]/20" 
                  : "bg-[#131b2e] text-[#bec8d2] rounded-tl-none"
              )}>
                {insight.text}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#222a3d]/40 rounded-xl p-4 border border-[#3e4850]/10">
          <div className="flex items-center gap-2 mb-3">
            <Share2 className="text-[#ffb690] w-4 h-4" />
            <span className="text-[10px] font-bold uppercase text-[#ffb690]">Key Entities Detected</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Mobile Platform', 'Checkout Drop-off', 'API Latency', '09:00 UTC'].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[#2d3449] rounded-md text-[10px] text-[#dae2fd] border border-[#3e4850]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-[#222a3d]/50 border-t border-[#3e4850]/10">
        <h4 className="text-[10px] font-bold uppercase text-[#88929b] mb-3 px-2">Next Step Suggestions</h4>
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-[#89ceff]/10 text-[#89ceff] border border-[#89ceff]/20 rounded-lg text-xs font-medium hover:bg-[#89ceff]/20 transition-all">
            Create Escalation Ticket
          </button>
          <button className="flex-1 py-2 bg-[#2d3449] text-[#dae2fd] border border-[#3e4850]/20 rounded-lg text-xs font-medium hover:bg-[#31394d] transition-all">
            Email Latency Log
          </button>
        </div>
      </div>
    </div>
  );
}
