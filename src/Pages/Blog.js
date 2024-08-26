import React from "react";
import { Grid, Typography, Divider, Link } from "@mui/material";
import CarouselPhoto from "../Components/CarouselPhoto";
import "../css/Blog.css";

const Blog = () => {
  const myRef = React.useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  const imgStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    zIndex: "-1",
    objectFit: "cover",
    opacity: 0.2,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        backgroundColor: "transparent",
      }}
    >
      <img src="/MyWebsite/blogbg.jpeg" alt="Background" style={imgStyle} />
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={8} sx={{ marginTop: "50px", display: "flex" }}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ marginRight: "30px", marginTop: "30px" }}
          />
          <div>
            <Typography
              variant="h4"
              className="Heading"
              sx={{ textAlign: "center" }}
            >
              {" "}
              BEHIND THE LENS
            </Typography>
            <div className="unliner"></div>
            <Typography variant="p" className="Text-Body">
              My dad introduced me to film cameras at a young age, capturing
              countless moments on even random occasions and creating albums
              from them. Looking at those albums after years would always lead
              to a cascade of mixed emotions which can’t be easily articulated.
              Being behind the lens might not capture oneself but can capture
              the charm and details which one wishes to see and preserve
              forever…..
              <span
                style={{
                  color: "#231942",
                  fontStyle: "italic",
                  fontWeight: "500",
                }}
              >
                who doesn’t wish to freeze time :).
              </span>
              <br />
              <br />
            </Typography>
            <Typography>
              <Link underline="hover" onClick={executeScroll}>
                Scroll down for my picture carousel!
              </Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ marginBottom: "30px", marginTop: "30px" }}
          />
        </Grid>
        <Grid item xs={8} sx={{ display: "flex" }}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ marginRight: "30px", marginTop: "30px" }}
          />
          <div>
            <Typography
              variant="h4"
              className="Heading"
              sx={{ textAlign: "center" }}
            >
              MUSIC SPEAKS
            </Typography>
            <div className="unliner"></div>
            <Typography variant="p" className="Text-Body">
              Music has been a significant part of my life since childhood,
              especially during the five years I played the keyboard.. Over
              time, listening to songs has woven itself into my daily routine.
              Music has this incredible ability to be whatever you need it to be
              — a comforting companion, a mirror to your loneliness, a source of
              joy, or even the fuel to the fire burning within you. I often
              associate specific songs with particular people, places, and
              unforgettable moments. These associations make the music even more
              meaningful, as certain lyrics and melodies hold memories and
              emotions that are deeply personal. It's fascinating how a song can
              bring out emotions we didn’t even realise we were feeling. Some
              lyrics are so profound that they etch themselves into my mind,
              carrying a depth that lingers long after the song has ended.
              <br />
              <br />I mostly find myself drawn to acoustic pop, with Ed Sheeran
              being my all-time favourite. There's something about his lyrics
              paired with the simplicity of an acoustic guitar that brings a
              sense of peace to my day. Alongside this, I mostly enjoy melodious
              Tamizh songs and a bit of mix of Hindi, Malayalam songs too.
              Sharing music has become a way for me to stay connected with
              others, exchanging songs like we’re sharing pieces of our lives.
              <br />
              <br />
              <span
                style={{
                  color: "#231942",
                  fontStyle: "italic",
                  fontWeight: "500",
                }}
              >
                Here are the links to my Spotify playlist:{" "}
              </span>
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://open.spotify.com/playlist/3VCfd19J9IlaJyASfercF5?si=0f74bf4302c5494c"
              >
                Tamizh
              </Link>
              ,{" "}
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://open.spotify.com/playlist/72qykKkbtDG7VfrwTybeHl?si=a670d2d7ae984f37"
              >
                English
              </Link>
              ,{" "}
              <Link
                underline="hover"
                target="_blank"
                rel="noopener"
                href="https://open.spotify.com/playlist/72qykKkbtDG7VfrwTybeHl?si=a670d2d7ae984f37"
              >
                Hindi and other languages
              </Link>
              .
            </Typography>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ marginBottom: "30px", marginTop: "30px" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ height: "90vh" }}>
          <CarouselPhoto id={myRef} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
