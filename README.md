# MCQ Practice Platform

A modern web application for students to practice multiple choice questions before exams. Built with Next.js, TypeScript, and shadcn/ui.

## Features

- **6 Subject Modules**: AIN, CSA, OS, PS, ES
- **Lecture-based Organization**: Each module contains multiple lectures
- **Interactive Quiz System**: 
  - Single and multiple choice questions
  - Real-time answer validation
  - Detailed explanations for each answer
  - Progress tracking
  - Score calculation
- **Modern UI**: Clean, responsive design with light theme
- **Exam-style Questions**: Based on actual past paper formats

## Current Implementation

### AIN (Advanced Internetworking) Module
- **Lecture 1**: Introduction to Scaling Networks (15 questions available)
- Lectures 2-7: Coming soon

### Question Types
- Single Choice: Select one correct answer
- Multiple Choice: Select one or more correct answers

### Features Implemented
- ✅ Module selection and navigation
- ✅ Lecture browsing
- ✅ Interactive quiz interface
- ✅ Answer validation with explanations
- ✅ Progress tracking
- ✅ Results summary with detailed review
- ✅ Responsive design
- ✅ Modern UI with shadcn/ui components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page with module selection
│   └── quiz/[lectureId]/  # Dynamic quiz pages
├── components/            # React components
│   ├── quiz/             # Quiz-related components
│   └── modules/          # Module-related components
├── data/                 # Static data and questions
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React useState/useEffect

## Question Format

Questions are based on actual exam formats and include:
- Clear question text
- Multiple choice options (A, B, C, D, E)
- Correct answer identification
- Detailed explanations
- Support for both single and multiple correct answers

## Future Enhancements

- Add remaining lectures for AIN module
- Implement other subject modules (CSA, OS, PS, ES)
- Add user authentication and progress saving
- Implement timed quizzes
- Add question difficulty levels
- Include question statistics and analytics
