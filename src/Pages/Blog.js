import React from "react";
import { Container } from "@mui/material";
import CarouselPhoto from "../Components/CarouselPhoto";

const Blog = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "72px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "450px" }}>
        <CarouselPhoto />
      </div>
    </Container>
  );
};

export default Blog;
