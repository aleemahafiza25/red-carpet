import Reveal from './Reveal';
import { useEffect, useState } from 'react';

function Countdown() {
  const weddingDate = new Date('2027-10-18T16:00:00');

  const calculateTime = () => {
    const difference = weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds }
  ];

  return (
    <Reveal className="countdown-paper">

      <div className="countdown-ornament">✧ ❀ ✧</div>

      <h2>The Big Day In</h2>

      <Reveal className="countdown-grid">
  {items.map((item) => (
    <div className="countdown-box" key={item.label}>
      <strong>{String(item.value).padStart(2, '0')}</strong>
      <span>{item.label}</span>
    </div>
  ))}
</Reveal>

      <div className="countdown-bottom-ornament">
        ✧ ❀ ✧
      </div>

    </Reveal>
  );
}

export default Countdown;
