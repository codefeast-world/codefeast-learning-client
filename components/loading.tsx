"use client"

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';


export function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded-full bg-blue-500"
              style={{
                animation: 'bounce 0.8s infinite',
                animationDelay: `${i * 0.2}s`,
                opacity: 0.8
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 