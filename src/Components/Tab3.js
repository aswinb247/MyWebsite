import React from "react";
import { Grid, Typography, Link } from "@mui/material";

const Tab3Content = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={11}>
        <Typography
          variant="h6"
          className="Heading"
          sx={{ textDecoration: "underline" }}
        >
          Sync and Seizure
        </Typography>
        <Typography variant="p" className="Text-Body">
          A course project for the Computational System Biology at IITM by{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://scholar.google.com/citations?user=qkn2yIIAAAAJ"
            sx={{ fontStyle: "italic" }}
          >
            Prof. Karthik Raman
          </Link>
          . We worked on characterizing the network topology of the connectome
          of C. elegans exhibited a chimera state when each neuron was modelled
          using the Hindmarsh-Rose equations. The final report can be found{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://drive.google.com/file/d/1ggfZXsiIoF6vIx1GQcR4EK_W548OS6ug/view?usp=sharing"
            sx={{ fontStyle: "italic" }}
          >
            here.
          </Link>{" "}
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
          Aerodynamic design of fixed-wing UAV
        </Typography>
        <Typography variant="p" className="Text-Body">
          A course project for the Computational System Biology at IITM by{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://scholar.google.com/citations?user=qkn2yIIAAAAJ"
            sx={{ fontStyle: "italic" }}
          >
            Prof. Karthik Raman
          </Link>
          . We worked on characterizing the network topology of the connectome
          of C. elegans exhibited a chimera state when each neuron was modelled
          using the Hindmarsh-Rose equations. The final report can be found{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://drive.google.com/file/d/1ggfZXsiIoF6vIx1GQcR4EK_W548OS6ug/view?usp=sharing"
            sx={{ fontStyle: "italic" }}
          >
            here.
          </Link>{" "}
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
          Structural design of fixed-wing UAV
        </Typography>
        <Typography variant="p" className="Text-Body">
          A course project for the Computational System Biology at IITM by{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://scholar.google.com/citations?user=qkn2yIIAAAAJ"
            sx={{ fontStyle: "italic" }}
          >
            Prof. Karthik Raman
          </Link>
          . We worked on characterizing the network topology of the connectome
          of C. elegans exhibited a chimera state when each neuron was modelled
          using the Hindmarsh-Rose equations. The final report can be found{" "}
          <Link
            underline="hover"
            target="_blank"
            rel="noopener"
            href="https://drive.google.com/file/d/1ggfZXsiIoF6vIx1GQcR4EK_W548OS6ug/view?usp=sharing"
            sx={{ fontStyle: "italic" }}
          >
            here.
          </Link>{" "}
          <br />
          <span style={{ fontWeight: "600" }}>Keywords:</span> Emergence of
          order, Transition Networks, Complexity, Network entropy, Fluctuations
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Tab3Content;
