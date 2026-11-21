import Reveal from './Reveal';
import { useRef, useState } from 'react';
import './App.css';
import ScratchCard from './ScratchCard';
import Countdown from './Countdown';
import Functions from './Functions';
import Venue from './Venue';
import ThankYou from './ThankYou';

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const startVideo = async () => {
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Video could not start:', error);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowInvitation(true);
  };

  return (
    <main className="wedding-site">

      {!showInvitation ? (
        <section className="opening-screen">
          <video
            ref={videoRef}
            className="opening-video"
            src="/opening.mp4"
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
          />

          {!isPlaying && (
            <button
              className="tap-overlay"
              onClick={startVideo}
            >
              <span className="tap-text">TAP TO BEGIN</span>
              <span className="tap-decoration">✧</span>
            </button>
          )}
        </section>
      ) : (

<div className="invitation-pages">

  {/* PAGE 1 - GRAND INVITATION */}
  <section className="invitation-page">

    <img
      src="/first-page-bg.png"
      alt=""
      className="invitation-bg-image"
    />

    <Reveal className="invitation-content">
      <p className="bismillah">
  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
</p>

<span className="top-ornament">✧ ❀ ✧</span>

      <p className="invitation-subtitle">
        TOGETHER WITH THEIR FAMILIES
      </p>

      <h1>
        Hamza
        <span className="ampersand">&</span>
        Shifa
      </h1>

      <p className="invitation-description">
        REQUEST THE PLEASURE
        <br />
        OF YOUR COMPANY
      </p>

      <span className="bottom-ornament">❧ ❀ ❧</span>
   </Reveal>
<div className="scroll-indicator">
  <span>SCROLL TO EXPLORE</span>
  <span className="scroll-arrow">⌄</span>
</div>
  </section>


  {/* PAGE 2 - THE COUPLE */}
  <section className="couple-page">

    <Reveal className="couple-paper">

      <h2>The Couple</h2>

     

<div className="couple-photos">


<svg className="arch-definitions" aria-hidden="true">
  <defs>
    <clipPath id="portraitArch" clipPathUnits="objectBoundingBox">
      <path d="
        M 0.5 0
        C 0.58 0.025, 0.63 0.075, 0.70 0.13
        C 0.86 0.23, 0.96 0.36, 0.98 0.52
        L 1 1
        L 0 1
        L 0.02 0.52
        C 0.04 0.36, 0.14 0.23, 0.30 0.13
        C 0.37 0.075, 0.42 0.025, 0.5 0
        Z
      "/>
    </clipPath>
  </defs>
</svg>


  <div className="portrait-image groom-image">
    <img src="/groom.jpg" alt="Groom" />
  </div>

  <div className="portrait-image bride-image">
    <img src="/bride.jpg" alt="Bride" />
  </div>

  <img
    src="/couple-frames.png"
    className="couple-frame-overlay"
    alt=""
  />

</div>



      <div className="couple-names">
        <span>Hamza</span>
        <span className="couple-ampersand">&</span>
        <span>Shifa</span>
      </div>

      <div className="story-heading">
        <span></span>
        <h3>Our Story</h3>
        <span></span>
      </div>

      <p className="couple-story">
        What began as a simple conversation soon
        turned into a journey of faith, friendship
        and love, guided by His mercy.
      </p>

      <div className="story-ornament">✧ ❀ ✧</div>

    </Reveal>

  </section>


{/* PAGE 3 - FORMAL INVITATION */}

<section className="formal-invitation">

  <Reveal className="formal-content">

    <div className="formal-top-ornament">
      ✧ ❀ ✧
    </div>

    <h2>You are Invited</h2>

    <p className="formal-blessing">
      With the blessings of
      <br />
      Almighty Allah,
    </p>

    <p className="formal-message">
      We are delighted to invite
      <br />
      you and your family to join us
      <br />
      in celebrating the
      <br />
      wedding of
    </p>

    <h3 className="formal-names">
      Hamza &amp; Shifa
    </h3>

    <div className="formal-bottom-ornament">
      ✧ ❀ ✧
    </div>

  </Reveal>

</section>


{/* PAGE 4 - WEDDING DATE REVEAL */}

<section className="date-reveal-page">

  <Reveal className="date-heading">
    <h2>
      Discover Our
      <br />
      Wedding Date
    </h2>
    <br /><br /><br /><br /><br />
      <p className="scratch-hint">
    Scratch to Reveal
  </p>
  </Reveal>

  <ScratchCard />



</section>

{/* PAGE 5 - WEDDING COUNTDOWN */}

<section className="countdown-section">
  <div className="countdown-carpet">
    <Countdown />
  </div>
</section>

{/* PAGE 6 - OTHER FUNCTIONS */}
<Functions />

{/* PAGE 8 - VENUE & LOCATION */}
<Venue />
{/* FINAL PAGE - THANK YOU */}
<ThankYou />
</div>

      )}

    </main>
  );
}

export default App;
