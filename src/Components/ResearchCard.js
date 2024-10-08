import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ResearchCard = ({ imageUrl, title, body, href }) => {
  return (
    <Card>
       <CardMedia
        component="img"
        alt={title}
        height="200"
        width="200"
        image={`/MyWebsite/researchimg/${imageUrl}`}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={href}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ResearchCard;
