// src/app/workshops/day1/page.tsx (assuming you’re using the app directory structure)
import RegisterButton from '@/components/workshops/RegisterButton';
import WorkshopList from '@/components/workshops/WorkshopList';
import React from 'react';

const WorkshopsDay1: React.FC = () => {
    const workshops = [
      { date: '2025-01-01', time: '10:00 AM', imageAlt: 'Workshop 1' },
      { date: '2025-01-01', time: '2:00 PM', imageAlt: 'Workshop 2' },
    ];
  
    return (
      <div className="bg-blue-900 min-h-screen p-8">
        <h1 className="text-2xl text-center text-white font-bold mb-8">DAY 1:</h1>
        <WorkshopList workshops={workshops} />
        <div className="flex justify-center">
          <RegisterButton />
        </div>
      </div>
    );
  };
  
  export default WorkshopsDay1;