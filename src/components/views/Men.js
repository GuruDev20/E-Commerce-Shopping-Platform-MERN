import React from "react";
import "../../styles/Men.css";
import Men from "../../assets/men1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function view2() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mens-coll">
      <div className="men-left rev">Men's Collection</div>
      <div className="men-right reveal">
        <img src={Men} alt="men" className="men-img" />
      </div>
      <div className="carousel-container">
        <Carousel responsive={responsive}>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
          <div className="cards">
            <img src={Men} alt="" className="card-img" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default view2;
