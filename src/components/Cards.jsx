import { useState, useEffect } from "react";

export default function Cards() {
  const slides = ["/slide1.jpg", "../assets/img/slide2.png", "/slide3.jpg"];
  const [current, setCurrent] = useState(0);

  // troca automática a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={slides[current]}
        alt="slide"
        className="carousel-image"
      />

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}