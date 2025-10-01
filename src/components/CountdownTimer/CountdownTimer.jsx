import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function CountdownTimer({ targetDate }) {
  const { container, timeKey, timeValue } = styles;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = number => {
    return String(number).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((keyName, index) => {
    if (timeLeft[keyName] !== undefined) {
      timerComponents.push(
        <span key={index} className={container}>
          <span className={timeValue}>{formatTimer(timeLeft[keyName])}</span>
          <span className={timeKey}>{String(keyName)}</span>
        </span>
      );
    }
  });

  return timerComponents;
}

export default CountdownTimer;
