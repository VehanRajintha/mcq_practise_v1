'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, correctAnswers }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <Badge variant="outline" className="text-xs sm:text-sm w-fit">
            Question {currentQuestion} of {totalQuestions}
          </Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm w-fit">
            <span className="hidden sm:inline">Score: </span>{correctAnswers}/{totalQuestions} ({score}%)
          </Badge>
        </div>
        <div className="text-xs sm:text-sm text-gray-600">
          {Math.round(progress)}% Complete
        </div>
      </div>
      <Progress value={progress} className="w-full h-2 sm:h-2" />
    </div>
  );
}
