export interface Lesson {
  id: string;
  title: string;
  subject: string;
  grade: string;
  content: string;
  duration: string;
}

export interface Question {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  id: string;
  lessonId: string;
  lessonTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
}

export interface AppData {
  lessons: Lesson[];
  quizResults: QuizResult[];
  lastSynced: string | null;
}
