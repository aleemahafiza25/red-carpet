import Reveal from './Reveal';
const functions = [
  {
    name: 'Mehndi',
    date: '16 October 2027',
    time: '10:00 AM',
    icon: 'mehndi'
  },
  {
    name: 'Sangeet',
    date: '17 October 2027',
    time: '07:00 PM',
    icon: 'sangeet'
  },
  {
    name: 'Nikah',
    date: '18 October 2027',
    time: '11:00 AM',
    icon: 'nikah'
  },
  {
    name: 'Reception',
    date: '18 October 2027',
    time: '04:00 PM – 09:00 PM',
    icon: 'reception'
  }
];

function Functions() {
  return (
    <section className="functions-page">

      <Reveal className="functions-content">

        <h2>Other Functions</h2>

        <div className="functions-list">

          {functions.map((item) => (
            <Reveal className="function-item" key={item.name}>

              <div className={`function-icon ${item.icon}`}>
                {/* Decorative icons will go here */}
              </div>

              <div className="function-details">
                <h3>{item.name}</h3>
                <p>{item.date} | {item.time}</p>
              </div>

            </Reveal>
          ))}

        </div>

      </Reveal>

    </section>
  );
}

export default Functions;
