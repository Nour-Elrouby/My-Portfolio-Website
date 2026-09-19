import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  speed?: number;
  startDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  delay = 1000,
  speed = 100,
  startDelay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasStarted, setHasStarted] = useState(startDelay === 0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (hasStarted || startDelay === 0 || shouldReduceMotion || !isPageVisible) {
      return;
    }

    const timeout = setTimeout(() => setHasStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [hasStarted, startDelay, shouldReduceMotion, isPageVisible]);

  useEffect(() => {
    if (!hasStarted || shouldReduceMotion || !isPageVisible) return;

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
  }, [
    currentText,
    currentTextIndex,
    isTyping,
    texts,
    delay,
    speed,
    hasStarted,
    shouldReduceMotion,
    isPageVisible,
  ]);

  return (
    <span className="inline-block">
      {shouldReduceMotion ? texts[0] : currentText}
      {!shouldReduceMotion && hasStarted && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterText;
