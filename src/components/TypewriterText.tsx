import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  delay = 1000,
  speed = 100,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            texts[currentTextIndex].slice(0, currentText.length + 1)
          );
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, delay, speed]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
