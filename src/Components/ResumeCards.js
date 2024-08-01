import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '20px auto',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none', // Remove the elevation by setting boxShadow to 'none'
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.primary,
}));

const ProfessionalCard = ({ heading, text }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledHeading variant="h5" component="div">
          {heading}
        </StyledHeading>
        <StyledText variant="body2" component="p">
          {text}
        </StyledText>
      </CardContent>
    </StyledCard>
  );
};

export default ProfessionalCard;
