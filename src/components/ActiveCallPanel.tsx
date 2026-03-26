import React from 'react';
import { PhoneOff, Pause, BadgeCheck, Smile, Clock, CreditCard, AlertCircle } from 'lucide-react';
import { IMAGES } from '../constants';

export function ActiveCallPanel() {
  return (
    <section className="space-y-6">
      <div className="bg-[#171f33] rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#89ceff] via-[#0ea5e9] to-[#89ceff]"></div>
        
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#89ceff] to-[#ffb690]">
            <img 
              alt="Caller" 
              className="w-full h-full object-cover rounded-full border-4 border-[#171f33]" 
              src={IMAGES.caller}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#2d3449] p-1.5 rounded-full border border-[#3e4850]/30">
            <BadgeCheck className="text-[#89ceff] w-4 h-4 fill-current" />
          </div>
        </div>
        
        <h2 className="text-xl font-['Space_Grotesk'] font-bold text-[#dae2fd]">Elena Vance</h2>
        <p className="text-sm text-[#88929b] mb-4">Managing Director @ Black Mesa</p>
        
        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#131b2e] rounded-lg p-3">
            <span className="text-[10px] uppercase text-[#88929b] block mb-1">Sentiment</span>
            <div className="flex items-center gap-2 text-[#89ceff]">
              <Smile className="w-3 h-3" />
              <span className="text-xs font-bold">Positive</span>
            </div>
          </div>
          <div className="bg-[#131b2e] rounded-lg p-3">
            <span className="text-[10px] uppercase text-[#88929b] block mb-1">Duration</span>
            <div className="flex items-center gap-2 text-[#dae2fd]">
              <Clock className="w-3 h-3" />
              <span className="text-xs font-bold">04:12</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 w-full">
          <button className="flex-1 py-3 bg-[#ffb4ab]/20 text-[#ffb4ab] rounded-lg flex items-center justify-center gap-2 hover:bg-[#ffb4ab]/30 transition-all">
            <PhoneOff className="w-4 h-4" />
            <span className="text-xs font-bold">End</span>
          </button>
          <button className="flex-1 py-3 bg-[#2d3449] text-[#dae2fd] rounded-lg flex items-center justify-center gap-2 hover:bg-[#31394d] transition-all">
            <Pause className="w-4 h-4" />
            <span className="text-xs font-bold">Hold</span>
          </button>
        </div>
      </div>

      <div className="bg-[#171f33] rounded-lg p-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#88929b] mb-4">Quick Context</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CreditCard className="text-[#89ceff] w-5 h-5" />
            <div>
              <p className="text-xs text-[#dae2fd] font-medium">Enterprise Tier</p>
              <p className="text-[10px] text-[#88929b]">$4.2k MRR • Renewing Dec '26</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="text-[#ffb690] w-5 h-5" />
            <div>
              <p className="text-xs text-[#dae2fd] font-medium">Open Ticket #492</p>
              <p className="text-[10px] text-[#88929b]">API Integration latency (High)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
