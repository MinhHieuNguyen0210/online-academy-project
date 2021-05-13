import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Link } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
import "./styles.scss";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    flex: "1",
    margin: "0 15px",
  },
  category: {
    flex: "1",
    margin: "0 15px",
  },
  search: {
    flex: "7",
    position: "relative",
    borderRadius: "100px",
    border: "solid 1px #9B998A",
    backgroundColor: "#F8F8F8",
    margin: "0 10px",

    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: "40px",
  },
  signin: {
    margin: "0 10px",
  },
  signup: {},
  cart: {
    flex: "1",
    margin: "0 10px",
    width: "50px",
  },
  teachon: {
    flex: "1",
  },
  sign: {
    display: "flex",
  },
}));

function Header(props) {
  const classes = useStyles();
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <div className={classes.logo}>
            <Link
              underline="none"
              color="inherit"
              component="button"
              variant="body2"
            >
              Online Academy
            </Link>
          </div>
          <div className={classes.category}>
            <Link
              underline="none"
              color="inherit"
              component="button"
              variant="body2"
            >
              Category
            </Link>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              color="secondary"
              placeholder="Search for anything"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.teachon}>
            <Link
              underline="none"
              color="inherit"
              component="button"
              variant="body2"
            >
              Tech on Odemy
            </Link>
          </div>
          <div className={classes.teachon}>
            <Link
              underline="none"
              color="inherit"
              component="button"
              variant="body2"
            >
              Tech on Odemy
            </Link>
          </div>
          <Link
            underline="none"
            color="inherit"
            component="button"
            variant="body2"
          >
            <Icon className="fas fa-shopping-cart" color="primary" />
          </Link>

          <div className={classes.sign}>
            <div className={classes.signin}>
              <Button variant="outlined">Sign in</Button>
            </div>
            <div className={classes.signup}>
              <Button variant="outlined">Sign up</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
