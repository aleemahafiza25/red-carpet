
import { useEffect, useRef, useState } from 'react';

function ThankYou() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`thankyou-page ${visible ? 'thankyou-visible' : ''}`}
      ref={sectionRef}
    >

      <div className="thankyou-content">

        <div className="thankyou-ornament reveal-item">
          ✧ ❀ ✧
        </div>

        <h2 className="thankyou-heading reveal-item">
          Thank You
        </h2>

        <p className="thankyou-message reveal-item">
          A heartfelt thank you for
          <br />
          being a part of our journey.
        </p>

        <p className="thankyou-message reveal-item">
          Your love, prayers and presence
          <br />
          mean the world to us.
        </p>

        <div className="thankyou-names reveal-item">
          Ayaan &amp; Zara
        </div>

        <div className="thankyou-bottom-ornament reveal-item">
          ❧ ❀ ❧
        </div>

      </div>

    </section>
  );
}

export default ThankYou;
