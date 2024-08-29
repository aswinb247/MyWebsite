import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import "../css/Blog.css";

const Tab1Content = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={11}>
        <Typography variant="p" className="Text-Body">
          Complexity science is such an interdisciplinary research field that
          focuses on systems with multiple interacting subsystems, spanning
          areas such as engineering, neuroscience, climate, chemistry, and other
          biological systems. In fact,{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://www.nobelprize.org/prizes/physics/2021/popular-information/"
            sx={{ fontStyle: "italic" }}
          >
            the 2021 Nobel Prize for Physics
          </Link>{" "}
          was awarded for complex systems research.
          <br />
          <br />I have been working in Prof. Sujith’s lab since February 2022,
          studying turbulent thermo-acoustic systems using tools of complex
          system theory. I also got an opportunity to meet our collaborators —
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://scholar.google.com/citations?hl=en&user=iwzqdyQAAAAJ"
            sx={{ fontStyle: "italic" }}
          >
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
            Dr. Norbert Marwan
          </Link>{" "}
          from Potsdam Institute of Climate Impact Research (PIK) in the summer
          of 2024 to discuss our ongoing projects on using transition networks
          to study thermo-acoustic and climatic systems.
          <br />
          <br />
          <span style={{ fontStyle: "italic" }}>
            Some of my research works are:
          </span>
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography
          variant="h6"
          className="Heading"
          sx={{ textDecoration: "underline" }}
        >
          Non-monotonic emergence of order from chaos in turbulent
          thermo-acoustic fluid systems
        </Typography>
        <Typography
          variant="body1"
          className="Text-Body"
          sx={{ paddingLeft: "50px" }}
        >
          <span style={{ fontWeight: "600" }}>Authors: Aswin Balaji</span>,
          Shruti Tandon, Norbert Marwan, Jürgen Kurths, R. I. Sujith
          <br />
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://arxiv.org/abs/2311.08101"
            sx={{ fontStyle: "italic" }}
          >
            arXiv:2311.08101
          </Link>{" "}
          (2024).
          <span style={{ fontStyle: "italic" }}>
            manuscript is under review.
          </span>
          <br />
          <span style={{ fontWeight: "600" }}>Keywords:</span> Emergence of
          order, Transition Networks, Complexity, Network entropy, Fluctuations
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography
          variant="h6"
          className="Heading"
          sx={{ textDecoration: "underline" }}
        >
          Cross-variable amplitude-frequency coupling during intermittency in a
          turbulent thermoacoustic system
        </Typography>
        <Typography
          variant="body1"
          className="Text-Body"
          sx={{ paddingLeft: "50px" }}
        >
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://arxiv.org/abs/2311.08101"
            sx={{ fontStyle: "italic" }}
          >
            arXiv:2311.08101
          </Link>{" "}
          (2024).
          <span style={{ fontStyle: "italic" }}>
            manuscript is under review.
          </span>
          <br />
          <span style={{ fontWeight: "600" }}>Authors: </span>
          Shruti Tandon, <span style={{ fontWeight: "600" }}>Aswin Balaji</span>
          , Norbert Marwan, Jürgen Kurths, R. I. Sujith
          <br />
          <span style={{ fontWeight: "600" }}>Keywords:</span> Natural
          Visibility Graphs (NVGs), Intermittency, Frequency Modulation (FM),
          Amplitude Modulation (AM), Turbulence
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography
          variant="h6"
          className="Heading"
          sx={{ textDecoration: "underline" }}
        >
          Identifying dynamical transitions and temporal structure of complex
          systems dynamics
        </Typography>
        <Typography
          variant="body1"
          className="Text-Body"
          sx={{ paddingLeft: "50px" }}
        >
          <span style={{ fontWeight: "600" }}>Authors: Aswin Balaji</span>,
          Shruti Tandon, Norbert Marwan, Jürgen Kurths, R. I. Sujith
          <br />
          Abstract accepted at{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://netscix2025.iiti.ac.in/"
            sx={{ fontStyle: "italic" }}
          >
            NetSciX 2025
          </Link>
          <br />
          <span style={{ fontWeight: "600" }}>Keywords:</span> Nonlinear maps,
          Transition networks, Crises, Quasi-distance based measures
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Tab1Content;
