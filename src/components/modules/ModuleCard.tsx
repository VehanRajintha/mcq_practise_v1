'use client';

import { Module } from '@/types/mcq';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Users } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onSelect: (moduleId: string) => void;
}

export function ModuleCard({ module, onSelect }: ModuleCardProps) {
  const completedLectures = module.lectures.filter(lecture => lecture.questions.length > 0).length;
  const totalLectures = module.lectures.length;

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer active:scale-95 touch-manipulation" onClick={() => onSelect(module.id)}>
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
            <CardTitle className="text-lg sm:text-xl truncate">{module.name}</CardTitle>
          </div>
          <Badge variant="secondary" className="text-xs sm:text-sm flex-shrink-0">
            {completedLectures}/{totalLectures}
          </Badge>
        </div>
        <CardDescription className="text-sm sm:text-base font-medium">
          {module.fullName}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{module.description}</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="truncate">Practice Questions Available</span>
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
            Start Practice
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
