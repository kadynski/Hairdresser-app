import React from "react";
import img1 from "../img/stock.jpg";
import img2 from "../img/stock1.jpg";
import img3 from "../img/stock2.jpg";
import { Carousel, BImg, BDiv } from "bootstrap-4-react";

const Caro = () => {
  return (
    <BDiv>
      <Carousel
        w="100"
        id="carouselExampleControls"
        className="carousel-section"
      >
        <Carousel.Inner>
          <Carousel.Item active>
            <BImg display="block" w="100" src={img1} className="carousel-img" />
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src={img2} className="carousel-img" />
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src={img3} className="carousel-img" />
          </Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    </BDiv>
  );
};

export default Caro;
