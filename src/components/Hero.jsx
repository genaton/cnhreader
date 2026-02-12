import Cards from "./Cards";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          CONTA CORRENTE BB
        </h1>
        <p>
          Abra sua conta corrente completa, totalmente digital, e simplifique sua vida financeira.
        </p>
      </div>

      <div className="hero-right">
        <img src="/slide2.png" alt="Cartão BB" />
      </div>
    </section>
  );
}