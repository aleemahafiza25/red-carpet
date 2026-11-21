
import { useEffect, useRef, useState } from 'react';

function ScratchCard() {
  const canvasRef = useRef(null);
  const scratching = useRef(false);
  const [revealed, setRevealed] = useState(false);

  const weddingDate = '18 October 2027';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const pattern = new Image();
    let imageLoaded = false;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (imageLoaded) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(pattern, 0, 0, rect.width, rect.height);
      }
    };

    pattern.onload = () => {
      imageLoaded = true;
      resizeCanvas();
    };

    pattern.src = '/pashmina-scratch.png';

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  const scratch = (e) => {
    if (revealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(
      0, 0, canvas.width, canvas.height
    ).data;

    let cleared = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 100) cleared++;
    }

    if (cleared / (pixels.length / 4) >= 0.45) {
      setRevealed(true);
    }
  };

  return (
    <div className="scratch-card">
      <div className="revealed-date">
        <span className="revealed-date-label">
          OUR WEDDING DATE
        </span>

        <strong>{weddingDate}</strong>

        <span className="revealed-date-ornament">
          ✧ ❀ ✧
        </span>
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          className="pashmina-canvas"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            scratching.current = true;
            scratch(e);
          }}
          onPointerMove={(e) => {
            if (scratching.current) scratch(e);
          }}
          onPointerUp={() => {
            scratching.current = false;
            checkReveal();
          }}
          onPointerCancel={() => {
            scratching.current = false;
            checkReveal();
          }}
        />
      )}

      {revealed && (
        <div className="petal-rain" aria-hidden="true">
          {Array.from({ length: 36 }, (_, i) => (
            <span
              className="hibiscus-petal"
              key={i}
              style={{
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 12) * 0.22}s`,
                animationDuration: `${4 + (i % 5) * 0.8}s`,
                '--drift': `${(i % 2 === 0 ? 1 : -1) * (25 + (i % 4) * 15)}px`,
                '--rotation': `${i * 47}deg`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScratchCard;
