'use client';
import { useEffect, useState } from 'react';

const roles = [
  'a Software Engineer',
  'an App Developer',
  'a Cloud Engineer',
  'a Robotics Engineer',
  'a UI/UX Designer',
  'a Full Stack Developer',
  'an Entrepreneur',
];

export default function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-2xl md:text-4xl font-bold text-white transition-all duration-500 ease-in-out">
      I&apos;m  <span className="text-purple-500">{roles[index]}</span>
    </h1>
  );
}
