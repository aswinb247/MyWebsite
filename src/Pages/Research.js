import * as React from "react";
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../css/Research.css";
import Tab1 from "../Components/Tab1";
import Tab2 from "../Components/Tab2";
import Tab3 from "../Components/Tab3";

const Research = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="research-home">
      <Grid container justifyContent="center"  spacing={2}>
        <Grid item xs={10}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                >
                  <Tab label="RESEARCH " value="1" />
                  <Tab label=" PROJECTS WORK" value="2" />
                  <Tab label=" RELEVANT SKILLS" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Tab1 />
              </TabPanel>
              <TabPanel value="2">
                <Tab3 />
              </TabPanel>
              <TabPanel value="3">
                <Tab2 />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Research;
