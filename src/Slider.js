import React, { useRef, useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs"; // Importing Bootstrap person-circle icon
import { MdAccountCircle } from "react-icons/md";

const reviews = [
  {
    text: "KWCO provided legal expertise that transformed our credit recovery process. Their professionalism ensured we retrieved outstanding debts efficiently.",
    author: "James Mwangi",
    position: "CEO, Equity Bank",
  },
  {
    text: "Our company faced challenges in debt collection. Thanks to KWCO, we recovered payments with minimal disputes and smooth legal procedures.",
    author: "Rose Wanjiru",
    position: "Finance Director, Safaricom",
  },
  {
    text: "KWCO’s legal team helped us resolve complex credit issues. Their strategic approach ensured we minimized financial risks and disputes.",
    author: "David Otieno",
    position: "MD, KCB Group",
  },
  {
    text: "With KWCO’s support, our legal compliance improved significantly. They guided us through credit policy enhancements, protecting our interests.",
    author: "Lilian Achieng",
    position: "CFO, Cooperative Bank",
  },
  {
    text: "KWCO streamlined our legal processes, making credit collection efficient. Their guidance reduced defaults and enhanced our financial stability.",
    author: "John Kamau",
    position: "GM, Family Bank",
  },
  {
    text: "Their legal services were instrumental in resolving debt recovery cases. KWCO ensured fairness while safeguarding our business operations.",
    author: "Anne Mutua",
    position: "Legal Officer, NCBA Bank",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const updateItemsPerView = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setItemsPerView(1);
    } else if (width < 768) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateItemsPerView();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="container-fluid bg-body-tertiary py-3"
      ref={carouselRef}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div id="testimonialCarousel" className="carousel">
        <div
          className="carousel-inner"
          style={{ display: "flex", padding: "1em 0", overflow: "hidden" }}
        >
          {reviews.map((review, index) => (
            <div
              className="carousel-item"
              key={index}
              style={{
                flex: `0 0 calc(100% / ${itemsPerView})`,
                margin: "0 0.5em",
                minWidth: "250px",
              }}
            >
              <div className="card shadow-sm rounded-3 p-3">
                <div className="quotes display-2 text-body-tertiary">
                  <i className="bi bi-quote"></i>
                </div>
                <div className="card-body">
                  <p className="card-text">"{review.text}"</p>
                  <div className="d-flex align-items-center pt-2">
                    <MdAccountCircle
                      size={50}
                      className="text-secondary me-3"
                    />
                    <div>
                      <h5 className="card-title fw-bold">{review.author}</h5>
                      <span className="text-secondary">{review.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
