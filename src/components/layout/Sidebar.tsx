'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { modules } from '@/data/modules';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Home, 
  Menu, 
  X, 
  ChevronRight,
  Users,
  BarChart3,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  // Auto-expand module containing current lecture
  useEffect(() => {
    if (pathname.startsWith('/quiz/')) {
      const lectureId = pathname.split('/')[2];
      const currentModule = modules.find(module => 
        module.lectures.some(lecture => lecture.id === lectureId)
      );
      if (currentModule && !expandedModules.includes(currentModule.id)) {
        setExpandedModules(prev => [...prev, currentModule.id]);
      }
    }
  }, [pathname, expandedModules]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const navigateTo = (path: string) => {
    router.push(path);
    onToggle(); // Close sidebar on mobile after navigation
  };

  const isActive = (path: string) => pathname === path;
  
  const isLectureActive = (lectureId: string) => {
    return pathname === `/quiz/${lectureId}`;
  };

  const sidebarItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/',
      badge: null
    },
    {
      id: 'progress',
      label: 'Progress',
      icon: BarChart3,
      path: '/progress',
      badge: null
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      path: '/settings',
      badge: null
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-80 bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-2xl",
        "fixed left-0 top-0 z-50 h-full transform transition-all duration-300 ease-in-out",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:pointer-events-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-white/20 bg-white/30 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600 drop-shadow-sm" />
            <span className="font-bold text-lg text-gray-800 drop-shadow-sm">MCQ Practice</span>
          </div>
          <Button
            variant="ghost"
            size="lg"
            onClick={onToggle}
            className="p-3 min-w-[48px] min-h-[48px] bg-white/40 hover:bg-white/60 border border-white/30 backdrop-blur-sm transition-all duration-200"
          >
            <X className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.path)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all duration-200 backdrop-blur-sm",
                      isActive(item.path)
                        ? "bg-blue-500/20 text-blue-700 border border-blue-400/30 shadow-lg shadow-blue-500/10"
                        : "text-gray-700 hover:bg-white/40 border border-transparent hover:border-white/20"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Modules Section */}
          <div className="border-t border-white/20 p-4 bg-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-4 w-4 text-gray-600 drop-shadow-sm" />
              <h3 className="font-semibold text-gray-800 drop-shadow-sm">Study Modules</h3>
            </div>
            
            <div className="space-y-1">
              {modules.map((module) => {
                const isExpanded = expandedModules.includes(module.id);
                const completedLectures = module.lectures.filter(lecture => lecture.questions.length > 0).length;
                const totalLectures = module.lectures.length;
                const progress = totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0;
                const hasActiveLecture = module.lectures.some(lecture => isLectureActive(lecture.id));

                return (
                  <div key={module.id}>
                    {/* Module Header */}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className={cn(
                        "w-full flex items-center gap-2 px-3 py-2 text-left rounded-lg transition-all duration-200 backdrop-blur-sm",
                        hasActiveLecture 
                          ? "bg-blue-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/10" 
                          : "hover:bg-white/40 border border-transparent hover:border-white/20"
                      )}
                    >
                      <ChevronRight 
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isExpanded ? "rotate-90" : ""
                        )} 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 truncate">
                            {module.name}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {completedLectures}/{totalLectures}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {module.fullName}
                        </div>
                      </div>
                    </button>

                    {/* Module Lectures */}
                    {isExpanded && (
                      <div className="ml-6 mt-1 space-y-1">
                        {module.lectures.map((lecture) => {
                          const isActiveLecture = isLectureActive(lecture.id);
                          return (
                            <button
                              key={lecture.id}
                              onClick={() => navigateTo(`/quiz/${lecture.id}`)}
                              disabled={lecture.questions.length === 0}
                              className={cn(
                                "w-full flex items-center gap-2 px-3 py-2 text-left rounded-lg transition-all duration-200 text-sm backdrop-blur-sm",
                                lecture.questions.length === 0
                                  ? "text-gray-400 cursor-not-allowed"
                                  : isActiveLecture
                                    ? "bg-blue-500/20 text-blue-700 border border-blue-400/30 shadow-lg shadow-blue-500/10"
                                    : "text-gray-600 hover:bg-white/40 border border-transparent hover:border-white/20"
                              )}
                            >
                              <div className={cn(
                                "w-2 h-2 rounded-full flex-shrink-0",
                                isActiveLecture 
                                  ? "bg-blue-600" 
                                  : "bg-gray-300"
                              )} />
                              <span className="truncate">{lecture.title}</span>
                              {lecture.questions.length > 0 && (
                                <Badge 
                                  variant={isActiveLecture ? "default" : "secondary"} 
                                  className="ml-auto text-xs"
                                >
                                  {lecture.questions.length}
                                </Badge>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 p-4 bg-white/20 backdrop-blur-sm">
          <div className="text-xs text-gray-600 text-center drop-shadow-sm">
            MCQ Practice Platform v1.0
          </div>
        </div>
      </aside>
    </>
  );
}
