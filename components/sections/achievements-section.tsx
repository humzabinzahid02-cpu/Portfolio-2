'use client';

import { useEffect, useRef, useState } from 'react';

const achievements = [
  { label: 'Performance Boost', value: 30, unit: '%' },
  { label: 'Faster Load Times', value: 40, unit: '%' },
  { label: 'Higher Interactivity', value: 20, unit: '%' },
  { label: 'Improved Engagement', value: 15, unit: '%' },
];

function Counter({ end, unit, label }: { end: number; unit: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        const interval = setInterval(() => {
          setCount((prev) => (prev < end ? prev + 1 : end));
        }, 30);
        return () => clearInterval(interval);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        {count}
        <span className="text-3xl">{unit}</span>
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <section
      data-section
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-gray-700">Key</span>
            <span className="text-gray-800"> Achievements</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
              <div className="relative bg-white border border-gray-300 group-hover:border-gray-400 rounded-xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 transform group-hover:scale-110 shadow-sm hover:shadow-md">
                <Counter
                  end={achievement.value}
                  unit={achievement.unit}
                  label={achievement.label}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
