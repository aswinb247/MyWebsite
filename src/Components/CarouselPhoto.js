import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const imageUrl = [
  "photo.jpeg",
  "photo.jpeg",
  "photo.jpeg",
  "photo.jpeg",
  "photo.jpeg",
  "photo.jpeg",
  "photo.jpeg",
];
const ImageContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  overflow: "hidden",
}));

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const CarouselPhoto = () => {
  return (
    <Carousel 
      animation="slide"
      autoPlay
      interval={3000}
      indicators={false}
      navButtonsAlwaysVisible
    >
      {imageUrl.map((item, i) => (
        <ImageContainer key={i}>
          <Image src={`/MyWebsite/blogimg/${item}`} alt={`Slide ${i}`} />
        </ImageContainer>
      ))}
    </Carousel>
  );
};

export default CarouselPhoto;
