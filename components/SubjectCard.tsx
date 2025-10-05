import React from 'react';
import type { Subject } from '../types.ts';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
    >
      <span className="text-6xl mb-4">{subject.emoji}</span>
      <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
      <p className="text-gray-600 mt-2 text-sm">{subject.description}</p>
    </div>
  );
};
