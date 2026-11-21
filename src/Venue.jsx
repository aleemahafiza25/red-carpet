import Reveal from './Reveal';
function Venue() {
  return (
    <section className="venue-page">

      <Reveal className="venue-content">

        {/* Heading */}
        <h2 className="venue-heading">
          Venue &amp; Location
        </h2>

        {/* Location ornament */}
        <div className="venue-pin">
          <span>♥</span>
        </div>

        {/* Venue details */}
        <h3 className="venue-name">
          The Grand Palace
        </h3>

        <p className="venue-address">
          Bantwal, Karnataka
        </p>

        {/* Map preview */}
        <div className="venue-map">
          <iframe
            title="Wedding venue location"
            src="https://www.google.com/maps?q=Bantwal,Karnataka&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Directions button */}
        <a
          className="directions-button"
          href="https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Bantwal+Karnataka"
          target="_blank"
          rel="noreferrer"
        >
          <span>➤</span>
          Get Directions
        </a>

      </Reveal>

    </section>
  );
}

export default Venue;
