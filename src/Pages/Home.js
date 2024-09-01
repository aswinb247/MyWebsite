// Home.tsx (or Home.js if not using TypeScript)
import React from "react";
import ParticlesBG from "../Components/ParticlesBG";
import "../css/Home.css";
import { Paper, Grid, Typography, Divider, Link } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <Paper elevation={4} sx={{ backgroundColor: "black" }}>
        <ParticlesBG />
      </Paper>
      <div>
        <img src="/MyWebsite/photo.jpeg" alt="Aswin" className="home-photo" />
        <Grid
          container
          marginLeft={"30px"}
          className="home-content"
          width={"100vw"}
        >
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h4" className="Heading">
              Welcome to my homepage!
              <div className="home-underliner"></div>
            </Typography>
          </Grid>
          <Grid item xs={9} display={"flex"}>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ marginRight: "60px" }}
            />
            <div>
              <Typography variant="p" className="Text-Body">
                I am a final year dual degree (B. Tech + M. Tech) student from
                Aerospace Engineering department of Indian Institute of
                Technology Madras. I have been affiliated to the{" "}
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href="https://ctcs.iitm.ac.in/"
                  sx={{ fontStyle: "italic" }}
                >
                  Centre of Excellence for Studying Critical Transition in
                  Complex Systems{" "}
                </Link>
                (CoE-CTCS, PI:{" "}
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href="https://scholar.google.co.in/citations?user=ChR5YpEAAAAJ&hl=en"
                  sx={{ fontStyle: "italic" }}
                >
                  Prof. R. I. Sujith{" "}
                </Link>
                ) since my sophomore year.
              </Typography>
              <br />
              <br />
              <Typography variant="p" className="Text-Body">
                My research lies on using data-driven methods such as complex
                networks to decipher the inter- and intra-subsystem interactions
                of complex systems, specifically turbulent thermo-fluid systems.
                In the summer of 2024, I had the opportunity to meet{" "}
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href="https://scholar.google.com/citations?hl=en&user=iwzqdyQAAAAJ"
                  sx={{ fontStyle: "italic" }}
                >
                  {" "}
                  Prof. Jürgen Kurths
                </Link>{" "}
                and{" "}
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href="https://scholar.google.de/citations?user=BsLmq3EAAAAJ&hl=de"
                  sx={{ fontStyle: "italic" }}
                >
                  Dr. Norbert Marwan{" "}
                </Link>
                from the Potsdam Institute for Climate Impact Research ({" "}
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href="https://www.pik-potsdam.de/en/home"
                  sx={{ fontStyle: "italic" }}
                >
                  PIK{" "}
                </Link>
                ), Germany, to collaborate on our ongoing projects.
              </Typography>
              <br />
              <br />
              <Typography variant="p" className="Text-Body">
                I have used tools such as{" "}
                <span
                  style={{
                    color: "#231942",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  ordinal partition networks, natural visibility graphs{" "}
                </span>{" "}
                on temporal and spatiotemporal experimental data to understand
                the physics of these{" "}
                <span
                  style={{
                    color: "#231942",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  nonlinear systems{""}
                </span>
                . I’m applying for graduate studies in the interdisciplinary
                research field of utilizing data-driven methods to understand
                system dynamics.
              </Typography>
              <br />
              <br />
              <Typography variant="p" className="Text-Body">
                When I am away from my desk, you can usually find me cycling,
                journaling, listening to songs (most of the time :’)) and
                spending some quality time with friends and family. I also love
                photography and wish to learn more (do checkout the photo
                carousel in the blog!)
              </Typography>
              <br />
              <br />
              <Typography variant="p" className="Text-Body">
                Do contact me through the contact form below to have a chat on
                my research, music or maybe even share some of your camera
                snaps!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
