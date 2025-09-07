'use client';

import { useState } from 'react';
import { modules } from '@/data/modules';
import { ModuleCard } from '@/components/modules/ModuleCard';
import { LectureList } from '@/components/modules/LectureList';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function HomePage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  const handleLectureSelect = (lectureId: string) => {
    // Navigate to quiz page
    window.location.href = `/quiz/${lectureId}`;
  };

  if (selectedModule) {
    const module = modules.find(m => m.id === selectedModule);
    if (!module) return null;

  return (
    <div className="container mx-auto px-4 py-2 sm:py-4">
      <div className="mb-4 sm:mb-6">
        <Button 
          variant="ghost" 
          onClick={handleBackToModules}
          className="mb-3 sm:mb-4 text-sm sm:text-base"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Button>
        <div className="flex items-start sm:items-center gap-3">
          <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mt-1 sm:mt-0 flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold break-words">{module.fullName}</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">{module.description}</p>
          </div>
        </div>
      </div>
      <LectureList 
        lectures={module.lectures} 
        onSelectLecture={handleLectureSelect}
      />
    </div>
  );
  }

  return (
    <div className="container mx-auto px-4 py-2 sm:py-4">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">MCQ Practice Platform</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Practice multiple choice questions for your exams. Choose a module below to get started.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {modules.map((module) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            onSelect={handleModuleSelect}
          />
        ))}
      </div>
    </div>
  );
}
