export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  explanation: string;
  type: 'single' | 'multiple';
}

export interface Lecture {
  id: string;
  title: string;
  description: string;
  questions: MCQQuestion[];
}

export interface Module {
  id: string;
  name: string;
  fullName: string;
  description: string;
  lectures: Lecture[];
}

export interface QuizResult {
  questionId: string;
  selectedAnswers: string[];
  isCorrect: boolean;
  correctAnswers: string[];
  explanation: string;
}

export interface QuizSession {
  lectureId: string;
  currentQuestionIndex: number;
  results: QuizResult[];
  isCompleted: boolean;
  score: number;
  totalQuestions: number;
}
