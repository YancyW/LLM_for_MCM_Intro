"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import Advantages from '../components/Advantages';
import Comparison from '../components/Comparison';
import Precautions from '../components/Precautions';
import Examples from '../components/Examples';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('introduction');

  const renderPage = () => {
    switch (currentPage) {
      case 'introduction':
        return <Introduction />;
      case 'advantages':
        return <Advantages />;
      case 'comparison':
        return <Comparison />;
      case 'precautions':
        return <Precautions />;
      case 'examples':
        return <Examples />;
      default:
        return <Introduction />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
    </main>
  );
}

