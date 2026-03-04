import { useState, useEffect } from "react";

export default function Cards() {
  const slides = [
    "/slide1.png",
    "/slide2.png",
    "/slide3.png"
  ];

  const [current, setCurrent] = useState(0);

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
          />
        ))}
      </div>
    </div>
  );
}