import React from "react";
import { Paper } from "@mui/material";
import CarouselPhoto from "../Components/CarouselPhoto";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProfessionalCard from "../Components/ResumeCards";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import resumeConfig from "../Components/Config/ResumeConfig";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: theme.spacing(2), // Add padding to the Paper component
}));

const lightTheme = createTheme({ palette: { mode: "light" } });
const Blog = () => {
  return (
    <div
      style={{
        height: "100vh",
        margin: "10px",
        marginTop: "72px",
      }}
    >
      <Grid container spacing={2}>
        {[lightTheme].map((theme, index) => (
          <Grid item xs={12} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  borderRadius: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {resumeConfig.map((e, i) => (
                  <Item elevation={4} key={i}>
                    <ProfessionalCard heading={e.heading} text={e.text} />
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ width: "100vw", paddingBottom: "10px" }}>
        <CarouselPhoto />
      </Paper>
    </div>
  );
};

export default Blog;
