import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [, setIsSubmitting] = React.useState(false);
  const [, setStateMessage] = React.useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_wl73u18",
        "template_vjijtek",
        e.target,
        "X25RWO3ZLOExV6uHd"
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      minHeight={"100vh"}
      bgcolor={"#d9d9d9"}
    >
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography
            variant="h4"
            className="Heading"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Get In Touch !
          </Typography>
          <form onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="Text-Body"
                  name="name"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="Text-Body"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  className="Text-Body"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  className="Text-Body"
                  name="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  className="Text-Body"
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Contact;
