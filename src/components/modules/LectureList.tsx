'use client';

import { Lecture } from '@/types/mcq';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, CheckCircle } from 'lucide-react';

interface LectureListProps {
  lectures: Lecture[];
  onSelectLecture: (lectureId: string) => void;
}

export function LectureList({ lectures, onSelectLecture }: LectureListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Available Lectures</h2>
      <div className="grid gap-3 sm:gap-4">
        {lectures.map((lecture, index) => (
          <Card key={lecture.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-base sm:text-lg break-words">{lecture.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1 line-clamp-2">{lecture.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {lecture.questions.length > 0 ? (
                    <Badge variant="default" className="flex items-center gap-1 text-xs sm:text-sm">
                      <CheckCircle className="h-3 w-3" />
                      <span className="hidden sm:inline">{lecture.questions.length} Questions</span>
                      <span className="sm:hidden">{lecture.questions.length}</span>
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs sm:text-sm">Coming Soon</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Lecture {index + 1}</span>
                </div>
                <Button 
                  onClick={() => onSelectLecture(lecture.id)}
                  disabled={lecture.questions.length === 0}
                  size="sm"
                  className="w-full sm:w-auto text-xs sm:text-sm"
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  {lecture.questions.length > 0 ? 'Start Quiz' : 'Coming Soon'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
