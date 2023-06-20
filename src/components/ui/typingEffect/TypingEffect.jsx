import { useLayoutEffect, useState } from "react";
import styles from "./TypingEffect.module.scss";

function TypingEffect({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    const typingTimer = setTimeout(() => {
      setCurrentText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 10);

    return () => clearTimeout(typingTimer);
  }, [currentIndex, text]);

  return <span>{currentText}</span>;
}

export default TypingEffect;
