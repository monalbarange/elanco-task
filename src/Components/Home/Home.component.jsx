import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { style } from "./Home.css";
import { styled } from "@mui/material/styles";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    border: "1px solid blue",
    height: "50vh",
    width: "30vw",
    margin: "20% 5%",
    boxShadow: "5px 6px 10px 4px lightgrey",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={style.container}>
      <Typography variant="h3" sx={style.heading}>
        Welcome to the Home Page
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: -2 }}
      >
        <Grid item xs={6}>
          <Item sx={style.appItem}>
            <Link to="/applications" sx={style.link} style={{textDecoration: "none"}}>
              <Typography variant="h4" sx={style.headText}>
                Applications
              </Typography>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={style.resItem}>
            <Link to="/resources" sx={style.link} style={{textDecoration: "none"}}>
              <Typography variant="h4" sx={style.headText}>
                Resources
              </Typography>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
