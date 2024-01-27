import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";

interface ILoadingCircleProps {}

const LoadingCircle: React.FC<ILoadingCircleProps> = () => {
  return (
    <Grid
      container
      justifyContent="center"
      height="100vh"
      alignContent="center"
    >
      <CircularProgress />
    </Grid>
  );
};

export default LoadingCircle;
