import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { Grid, Paper, Input, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#c0cbff40"
  },
  titleWrapper: {
    padding: theme.spacing(3)
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  gridItem: {
    margin: "auto"
  }
}));

export default function ProductForm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.titleWrapper}>
          <Typography
            component="h1"
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            New Product
          </Typography>
          <Typography
            display="block"
            variant="p"
            color="textSecondary"
            align="center"
          >
            Add item to online inventory
          </Typography>
        </div>
        <Container maxWidth="lg" className={classes.container}>
         <Paper>
             Form here
         </Paper>
        </Container>
      </main>
    </div>
  );
}
