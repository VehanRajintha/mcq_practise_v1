'use client';

import { QuizResult } from '@/types/mcq';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface QuizResultsProps {
  results: QuizResult[];
  onRestart: () => void;
}

export function QuizResults({ results, onRestart }: QuizResultsProps) {
  const correctCount = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return 'Excellent! Outstanding performance!';
    if (score >= 80) return 'Very Good! Well done!';
    if (score >= 70) return 'Good job! Keep practicing!';
    if (score >= 60) return 'Passing grade. Review the material.';
    return 'Needs improvement. Study more and try again.';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="text-center pb-3 sm:pb-6">
          <CardTitle className="text-xl sm:text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-3 sm:space-y-4">
          <div className={`text-3xl sm:text-4xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </div>
          <div className="text-base sm:text-lg">
            {correctCount} out of {totalQuestions} questions correct
          </div>
          <div className="text-sm sm:text-base text-gray-600 px-4">
            {getScoreMessage(score)}
          </div>
          <Button onClick={onRestart} className="mt-3 sm:mt-4 text-sm sm:text-base">
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-lg sm:text-xl">Question Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {results.map((result, index) => (
              <div key={result.questionId} className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {result.isCorrect ? (
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs sm:text-sm">Question {index + 1}</Badge>
                    <Badge variant={result.isCorrect ? 'default' : 'destructive'} className="text-xs sm:text-sm">
                      {result.isCorrect ? 'Correct' : 'Incorrect'}
                    </Badge>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <p><strong>Your answer:</strong> {result.selectedAnswers.map(a => a.toUpperCase()).join(', ')}</p>
                    {!result.isCorrect && (
                      <p><strong>Correct answer:</strong> {result.correctAnswers.map(a => a.toUpperCase()).join(', ')}</p>
                    )}
                    <p className="mt-2"><strong>Explanation:</strong> {result.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
