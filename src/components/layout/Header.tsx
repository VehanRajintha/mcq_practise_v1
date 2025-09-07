'use client';

import { Button } from '@/components/ui/button';
import { Menu, BookOpen } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <span className="font-bold text-lg text-blue-600">MCQ Practice</span>
        </div>
        <Button
          variant="ghost"
          size="lg"
          onClick={onMenuClick}
          className="p-3 min-w-[48px] min-h-[48px] bg-blue-50 hover:bg-blue-100 border border-blue-200"
        >
          <Menu className="h-6 w-6 text-blue-600" />
        </Button>
      </div>
    </header>
  );
}
