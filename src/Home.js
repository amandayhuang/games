import "./App.css";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <p className="title">mini games to play by yourself or with others</p>
      <Link to="/height">
        <p variant="outlined" className="title game">
          {" "}
          guess the famous person's height{" "}
          <ArrowForwardIosIcon className="arrow" />
        </p>
      </Link>
    </Box>
  );
};

export default Home;
