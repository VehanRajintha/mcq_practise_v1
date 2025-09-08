'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { modules } from '@/data/modules';
import { QuizQuestion } from '@/components/quiz/QuizQuestion';
import { QuizProgress } from '@/components/quiz/QuizProgress';
import { QuizResults } from '@/components/quiz/QuizResults';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { QuizResult, QuizSession } from '@/types/mcq';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const lectureId = params.lectureId as string;

  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Find the lecture and initialize quiz session
    const lecture = modules
      .flatMap(module => module.lectures)
      .find(lecture => lecture.id === lectureId);

    if (lecture && lecture.questions.length > 0) {
      setQuizSession({
        lectureId: lecture.id,
        currentQuestionIndex: 0,
        results: [],
        isCompleted: false,
        score: 0,
        totalQuestions: lecture.questions.length
      });
    }
  }, [lectureId]);

  const handleAnswer = (result: QuizResult) => {
    if (!quizSession) return;

    // Check if this question was already answered
    const existingResultIndex = quizSession.results.findIndex(r => r.questionId === result.questionId);
    let newResults;
    
    if (existingResultIndex >= 0) {
      // Update existing result
      newResults = [...quizSession.results];
      newResults[existingResultIndex] = result;
    } else {
      // Add new result
      newResults = [...quizSession.results, result];
    }
    
    const correctCount = newResults.filter(r => r.isCorrect).length;
    
    const updatedSession = {
      ...quizSession,
      results: newResults,
      score: correctCount
    };
    
    setQuizSession(updatedSession);
    setShowResult(true);

    // Check if this was the last question and all questions are now answered
    const lecture = modules
      .flatMap(module => module.lectures)
      .find(lecture => lecture.id === lectureId);
    
    if (lecture && newResults.length === lecture.questions.length) {
      // All questions answered, complete the quiz
      setTimeout(() => {
        setQuizSession(prev => prev ? { ...prev, isCompleted: true } : null);
      }, 2000); // Show result for 2 seconds before completing
    }
  };

  const handleNextQuestion = () => {
    if (!quizSession) return;
    
    if (currentQuestionIndex < quizSession.totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      // Quiz completed - only if current question is answered
      const currentQuestion = modules
        .flatMap(module => module.lectures)
        .find(lecture => lecture.id === lectureId)?.questions[currentQuestionIndex];
      
      if (currentQuestion) {
        const currentResult = quizSession.results.find(r => r.questionId === currentQuestion.id);
        if (currentResult) {
          // Current question is answered, complete the quiz
          setQuizSession(prev => prev ? { ...prev, isCompleted: true } : null);
        }
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowResult(false);
    }
  };


  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setQuizSession(prev => prev ? {
      ...prev,
      results: [],
      isCompleted: false,
      score: 0,
      currentQuestionIndex: 0
    } : null);
  };

  const handleBackToModules = () => {
    router.push('/');
  };

  const handleFinishQuiz = () => {
    setQuizSession(prev => prev ? { ...prev, isCompleted: true } : null);
  };

  if (!quizSession) {
    return (
      <div className="container mx-auto px-4 py-2 sm:py-4 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lecture not found</h1>
          <Button onClick={handleBackToModules}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
        </div>
      </div>
    );
  }

  const lecture = modules
    .flatMap(module => module.lectures)
    .find(lecture => lecture.id === lectureId);

  if (!lecture) {
    return (
      <div className="container mx-auto px-4 py-2 sm:py-4 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lecture not found</h1>
          <Button onClick={handleBackToModules}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = lecture.questions[currentQuestionIndex];
  const currentResult = quizSession?.results.find(r => r.questionId === currentQuestion.id);
  const allQuestionsAnswered = quizSession?.results.length === lecture.questions.length;

  if (quizSession?.isCompleted) {
    return (
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="mb-4 sm:mb-6">
          <Button 
            variant="ghost" 
            onClick={handleBackToModules}
            className="mb-3 sm:mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold">{lecture.title}</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">{lecture.description}</p>
        </div>
        <QuizResults 
          results={quizSession?.results || []} 
          onRestart={handleRestart}
        />
      </div>
    );
  }

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
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold break-words">{lecture.title}</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">{lecture.description}</p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <QuizProgress 
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizSession?.totalQuestions || 0}
          correctAnswers={quizSession?.score || 0}
        />
        
         <QuizQuestion
           question={currentQuestion}
           onAnswer={handleAnswer}
           showResult={showResult}
           result={currentResult}
           onNext={handleNextQuestion}
           onPrevious={handlePreviousQuestion}
           canGoNext={currentQuestionIndex < (quizSession?.totalQuestions || 0) - 1}
           canGoPrevious={currentQuestionIndex > 0}
           isLastQuestion={currentQuestionIndex === (quizSession?.totalQuestions || 0) - 1}
           onFinishQuiz={handleFinishQuiz}
           allQuestionsAnswered={allQuestionsAnswered}
         />
      </div>
    </div>
  );
}
