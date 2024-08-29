import React from "react";
import { Grid, Typography } from "@mui/material";

const Tab2Content = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={11}>
        <Typography variant="p" className="Text-Body">
          <span style={{ fontWeight: "600" }}>Physics:</span> Dynamical Systems,
          Complex Network
          <br />
          <br />
          <span style={{ fontWeight: "600" }}> Aerospace Engineering:{" "}</span>
          Fluid Mechanics, Vibrations, Aerospace Structures, Aerodynamics, Gas
          Dynamics, Flight Dynamics, Computational Fluid Dynamics, Acoustic
          Instabilities
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>Mathematics and Computing:{" "}</span>
          Scientific Computing, Parallel Scientific Computing, Probability and
          Statistics, Differential Equations, Multivariable Calculus, Series and
          Matrices, Complex Variables
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>Biology:{" "}</span> Computational
          System Biology, Computational Neuroscience, Life Sciences
          <br />
          <br /> <span style={{ fontWeight: "600" }}> Machine Learning:{" "}</span>
          Pattern Recognition and Machine Learning (IITM), Neural Networks and
          DL (Coursera), Supervised ML (Coursera) <br />
          <br />
          <span style={{ fontWeight: "600" }}>Technologies:{" "}</span> MATLAB,
          Python, C/C++, OpenMPI, OpenMP, Linux CLI, AutoCAD, Fusion360, GNU
          Octave, XFLR5 Frameworks
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Frameworks, Libraries & Project Management:{" "}
          </span>{" "}
          Matplotlib, SciPy, COBRA Toolbox, NumPy, NetworkX, OrdPy,
          scikit-learn, Pandas, Seaborn, LaTeX, Git
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Tab2Content;
