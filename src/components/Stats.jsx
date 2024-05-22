export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="words" />
      <Stat number={stats.numberOfCharacter} label="Characters" />
      <Stat number={stats.intagramCharacterLeft} label="Instagram" />
      <Stat number={stats.facebookCharacterLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
