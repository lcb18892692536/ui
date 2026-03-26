import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ActiveCallPanel } from './components/ActiveCallPanel';
import { LiveInsights } from './components/LiveInsights';
import { QueueDynamics } from './components/QueueDynamics';
import { InteractionProfile } from './components/InteractionProfile';
import { CommandBar } from './components/CommandBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] antialiased">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-20 p-8 h-screen overflow-y-auto no-scrollbar grid grid-cols-12 gap-6">
        {/* Left Column: Active Call Panel */}
        <div className="col-span-12 lg:col-span-3">
          <ActiveCallPanel />
        </div>

        {/* Center Column: AI Call Insights & Queue */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <LiveInsights />
          <QueueDynamics />
        </div>

        {/* Right Column: Contextual CRM Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <InteractionProfile />
        </div>
      </main>

      <CommandBar />
    </div>
  );
}
