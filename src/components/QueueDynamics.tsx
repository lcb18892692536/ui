import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { QUEUE_DATA } from '../constants';

export function QueueDynamics() {
  return (
    <div className="bg-[#171f33] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-['Space_Grotesk'] font-bold text-[#dae2fd]">Queue Dynamics</h3>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#89ceff]"></span>
            <span className="text-[#88929b]">Live Load</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ffb690]"></span>
            <span className="text-[#88929b]">Wait Time (min)</span>
          </div>
        </div>
      </div>
      
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={QUEUE_DATA}>
            <Bar dataKey="load" radius={[2, 2, 0, 0]}>
              {QUEUE_DATA.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#89ceff" 
                  fillOpacity={entry.load > 80 ? 1 : 0.6} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-between px-2">
        <div className="text-[10px] text-[#89ceff] invisible">Peak</div>
        <div className="text-[10px] text-[#89ceff] ml-[37%]">Peak</div>
        <div className="text-[10px] text-[#89ceff] invisible">Peak</div>
      </div>
    </div>
  );
}
