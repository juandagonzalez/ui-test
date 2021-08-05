import { useState } from "react";

import Votescard from "./components/VotesCard";
import Voteslist from "./components/VotesList";

import HorizontalScroll from "react-scroll-horizontal";

import Grid from "@material-ui/core/Grid";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useCelebrities } from "./contexts/CelebritiesContext";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scroll: {
    width: "500px",
    height: "400px",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  grid: {
    width: "100%",
    justifyContent: "center",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  toggleGrid: {
    position: "absolute",
    paddingBottom: "10px",
    padding: "5px",
    background: "white",
    border: "3px solid black",
    right: 0,
    top: "10px",
    display: "inline",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [listOrGrid, setListOrGrid] = useState("Grid");

  const { celebrities } = useCelebrities();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <div
        style={{
          paddingBlock: "20px",
        }}
      >
        <p
          style={{
            fontWeight: "light",
            fontSize: "1.5rem",
            display: "inline",
          }}
        >
          Previous Rulings
        </p>
        <button
          className={classes.toggleGrid}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <div
            style={{
              display: "inline",
              margin: "auto",
              fontSize: "1.2rem",
              paddingInline: "20px",
            }}
          >
            {listOrGrid}
          </div>
          <div style={{ display: "inline" }}>
            <ArrowDropDownIcon />
          </div>
        </button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
        style={{ marginTop: "35px" }}
      >
        <MenuItem
          style={{
            padding: "5px",
            background: "white",
            border: "3px solid black",
            margin: "auto",
            fontSize: "1.2rem",
            paddingInline: "30px",
          }}
          onClick={() => {
            setAnchorEl(null);
            setListOrGrid("Grid");
          }}
        >
          Grid
        </MenuItem>
        <MenuItem
          style={{
            padding: "5px",
            background: "white",
            border: "3px solid black",
            margin: "auto",
            fontSize: "1.2rem",
            paddingInline: "30px",
          }}
          onClick={() => {
            setAnchorEl(null);
            setListOrGrid("List");
          }}
        >
          List
        </MenuItem>
      </Menu>
      <div className={classes.scroll}>
        <HorizontalScroll reverseScroll={true}>
          {celebrities &&
            celebrities.map((celebrity) => {
              return (
                <div
                  style={{ marginRight: "15px", width: "400px" }}
                  key={celebrity.id}
                >
                  <Votescard
                    celebId={celebrity.id}
                    celebrity={celebrity.data}
                  />
                </div>
              );
            })}
        </HorizontalScroll>
      </div>

      {listOrGrid === "Grid" ? (
        <Grid container spacing={3} className={classes.grid}>
          {celebrities &&
            celebrities.map((celebrity) => {
              return (
                <Grid item key={celebrity.id}>
                  <Votescard
                    celebId={celebrity.id}
                    celebrity={celebrity.data}
                  />
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <>
          {celebrities &&
            celebrities.map((celebrity) => {
              return (
                <div style={{ marginBottom: "10px" }} key={celebrity.id}>
                  <Voteslist
                    celebId={celebrity.id}
                    celebrity={celebrity.data}
                  />
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default App;
