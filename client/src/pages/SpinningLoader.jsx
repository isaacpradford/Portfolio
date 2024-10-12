import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SpinningLoader() {
  const text = "Loading Loading Loading Loading";
  const characters = text.split("");

  const radius = 120;
  const fontSize = "20px";
  const letterSpacing = 11.3;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.1, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });

      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        ease: "linear",
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 10, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <motion.div
      ref={scope}
      className="loading-circle"
      style={{ width: radius * 2 }}
    >
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`letter letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
