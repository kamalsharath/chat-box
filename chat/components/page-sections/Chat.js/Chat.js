/* Common Imports */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Component Imports */
import { Typography } from "@material-ui/core";

/* Data Imports */

const useStyles = makeStyles((theme) => ({
  megaContainer: {
    /* XXS breakpoint */
    [theme.breakpoints.down(theme.breakpoints.values.xs + 280)]: {
      padding: "0rem 0.5rem 1rem 0.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0rem 1.5rem 1rem 1.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0rem 3rem 1rem 3rem",
    },
    [theme.breakpoints.only("md")]: {
      padding: "0rem 4rem 1rem 4rem",
    },
    [theme.breakpoints.only("lg")]: {
      padding: "0rem 4rem 1rem 4rem",
    },
    /* XLG breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.lg + 48)]: {
      padding: "0rem 5rem 1rem 5rem",
    },
    /* Full HD breakpoint */
    [theme.breakpoints.up("xl")]: {
      padding: "0rem 23rem 1rem 23rem",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      padding: "0rem 36rem 1rem 36rem",
    },
    /* XXXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
      padding: "0rem 72rem 1rem 72rem",
    },
    margin: "0rem 0rem 6rem 0rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0rem 0rem 3rem 0rem",
    },
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    justifyContent: "space-between",
    alignItems: "center",
    height: "calc(100vh - 4rem)",
    width: "100%",
    gap: "3rem",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heading: {
    width: "100%",
    margin: "0rem 0rem 0.5rem 0rem",
    color: "#4A225B",
    fontWeight: 400,
    background: "-webkit-linear-gradient(180deg, #74378E 0%, #502761 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fillColor": "transparent",
    fontSize: "2.5rem",
    lineHeight: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      lineHeight: "2.125rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.75rem",
      lineHeight: "2.125rem",
    },
  },
  subHeading: {
    margin: "0.5rem 0rem 0.5rem 0rem",
    width: "100%",
    color: "#202020",
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1.625rem",
    },
  },
  illustrationSizer: {
    objectFit: "cover",
    /* XXS breakpoint */
    [theme.breakpoints.down(theme.breakpoints.values.xs + 280)]: {
      height: "200px",
      width: "260px",
    },
    [theme.breakpoints.only("xs")]: {
      height: "260px",
      width: "350px",
    },
    [theme.breakpoints.only("sm")]: {
      height: "400px",
      width: "600px",
    },
    [theme.breakpoints.only("md")]: {
      height: "350px",
      width: "450px",
    },
    [theme.breakpoints.only("lg")]: {
      height: "400px",
      width: "500px",
    },
    [theme.breakpoints.only("xl")]: {
      height: "400px",
      width: "500px",
    },
    /* XXL breakpoint */
    [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
      height: "450px",
      width: "600px",
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
      height: "450px",
      width: "600px",
    },
  },
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.megaContainer}>
        <div className={classes.sectionContainer}>
          <div className={classes.text}>
            <Typography variant="h1" className={classes.heading}>
              Chat with your friends
            </Typography>
            <Typography variant="h2" className={classes.subHeading}>
              Chat with your friends and get to know each other.
            </Typography>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionOne;
