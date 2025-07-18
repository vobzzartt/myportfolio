'use client';
import { useEffect, useState } from 'react';

const roles = [
  'a Software Engineer',
  'an App Developer',
  'a Cloud Engineer',
  'a Full Stack Developer',
  'a Web3 Innovator',
  'an Entrepreneur',
  'Friendly, feel free to Connect with me❤️',
];

export default function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-2xl md:text-4xl font-bold text-white transition-all duration-500 ease-in-out">
      I&apos;m  <span className="text-purple-500">{roles[index]}</span>
    </h1>
  );
}
