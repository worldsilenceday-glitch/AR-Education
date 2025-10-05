
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext.tsx';
import { SUBJECTS } from '../constants.ts';
import { SubjectCard } from '../components/SubjectCard.tsx';
// Fix: Corrected the import path from ../components-tsx to ../components
import SubjectDetailsModal from '../components/SubjectDetailsModal.tsx';
import type { Subject } from '../types.ts';
import { LanguageSelector } from '../components/LanguageSelector.tsx';

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleStartChat = (subject: string) => {
    navigate(`/chat/${encodeURIComponent(subject)}`);
  };
  
  const handleStartQuiz = (subject: string) => {
    navigate(`/quiz/${encodeURIComponent(subject)}`);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="flex justify-between items-center mb-8">
          <div>
              <h1 className="text-3xl font-bold text-gray-800 capitalize">Hello, {user.name}!</h1>
              <p className="text-gray-600">What would you like to learn today?</p>
          </div>
          <LanguageSelector />
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SUBJECTS.map((subject) => (
          <SubjectCard 
            key={subject.name} 
            subject={subject} 
            onClick={() => setSelectedSubject(subject)}
          />
        ))}
      </div>

      {selectedSubject && (
        <SubjectDetailsModal 
          subject={selectedSubject}
          onClose={() => setSelectedSubject(null)}
          onStartChat={handleStartChat}
          onStartQuiz={handleStartQuiz}
        />
      )}
    </div>
  );
};

export default DashboardPage;