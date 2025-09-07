'use client';

import { useState } from 'react';
import { MCQQuestion, QuizResult } from '@/types/mcq';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: MCQQuestion;
  onAnswer: (result: QuizResult) => void;
  showResult?: boolean;
  result?: QuizResult;
}

export function QuizQuestion({ question, onAnswer, showResult = false, result }: QuizQuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleOptionClick = (optionId: string) => {
    if (showResult) return;

    if (question.type === 'single') {
      setSelectedAnswers([optionId]);
    } else {
      setSelectedAnswers(prev => 
        prev.includes(optionId) 
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;

    const correctAnswers = question.options
      .filter(option => option.isCorrect)
      .map(option => option.id);

    const isCorrect = selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every(answer => correctAnswers.includes(answer));

    onAnswer({
      questionId: question.id,
      selectedAnswers,
      isCorrect,
      correctAnswers,
      explanation: question.explanation
    });
  };

  const getOptionStyle = (optionId: string) => {
    if (!showResult) {
      return selectedAnswers.includes(optionId) 
        ? 'bg-blue-600 text-white border-blue-600' 
        : 'hover:bg-gray-100';
    }

    const option = question.options.find(opt => opt.id === optionId);
    if (!option) return '';

    if (option.isCorrect) {
      return 'bg-green-100 border-green-500 text-green-900';
    }
    
    if (selectedAnswers.includes(optionId) && !option.isCorrect) {
      return 'bg-red-100 border-red-500 text-red-900';
    }

    return 'bg-gray-100';
  };

  const getOptionIcon = (optionId: string) => {
    if (!showResult) return null;

    const option = question.options.find(opt => opt.id === optionId);
    if (!option) return null;

    if (option.isCorrect) {
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    }
    
    if (selectedAnswers.includes(optionId) && !option.isCorrect) {
      return <XCircle className="h-4 w-4 text-red-600" />;
    }

    return null;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={question.type === 'single' ? 'default' : 'secondary'} className="text-xs sm:text-sm">
            {question.type === 'single' ? 'Single Choice' : 'Multiple Choice'}
          </Badge>
          {showResult && result && (
            <Badge variant={result.isCorrect ? 'default' : 'destructive'} className="text-xs sm:text-sm">
              {result.isCorrect ? 'Correct' : 'Incorrect'}
            </Badge>
          )}
        </div>
        <CardTitle className="text-base sm:text-lg break-words">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              disabled={showResult}
              className={`w-full p-3 sm:p-4 text-left border rounded-lg transition-colors touch-manipulation active:scale-95 ${getOptionStyle(option.id)} ${
                showResult ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3">
                {getOptionIcon(option.id)}
                <span className="font-medium text-sm sm:text-base flex-shrink-0">{option.id.toUpperCase()}.</span>
                <span className="text-sm sm:text-base break-words">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {!showResult && (
          <div className="flex justify-end pt-2">
            <Button 
              onClick={handleSubmit} 
              disabled={selectedAnswers.length === 0}
              className="min-w-24 text-sm sm:text-base"
            >
              Submit
            </Button>
          </div>
        )}

        {showResult && result && (
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-100 rounded-lg">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Explanation:</h4>
                <p className="text-xs sm:text-sm text-gray-600 break-words">{result.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
