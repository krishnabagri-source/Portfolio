import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(words[0]);
      return;
    }

    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), speed);
        setDisplayText(current.slice(0, charIndex + 1));
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
        setDisplayText(current.slice(0, charIndex - 1));
      } else {
        setIsDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return displayText;
}
