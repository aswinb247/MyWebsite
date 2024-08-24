import React from "react";
import Carousel from "react-multi-carousel";
import { Paper } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import "../css/Carousel_.css";
import { styled } from "@mui/system";

const ImageContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingBottom: "177.78%",
  backgroundColor: "#d9d9d9",
  boxShadow: "none",
}));

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  margin: "3px",
  borderRadius: "5%",
});

const CarouselPhoto = ({ id }) => {
  return (
    <div ref={id}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className="carousel-container"
        containerClass={`w-full`}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {Array.from({ length: 25 }, (_, i) => (
          <ImageContainer key={i + 1}>
            <Image src={`/MyWebsite/blogimg/${i + 1}.jpg`} alt={`Slide ${i}`} />
          </ImageContainer>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhoto;
