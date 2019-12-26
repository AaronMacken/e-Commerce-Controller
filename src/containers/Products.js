import React from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Input, Typography } from "@material-ui/core";
import ProductItem from "./ProductItem";

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
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  titleWrapper: {
    padding: theme.spacing(3)
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  searchBar: {
    width: "100%"
  },
  gridItem: {
    margin: "auto"
  }
}));

export default function Products() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <main className={classes.content}>
        {/* AppBarSpacer div class for top margin */}
        <div className={classes.appBarSpacer} />
        <div className={classes.titleWrapper}>
          <Typography
            component="h1"
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            Products
          </Typography>
          <Typography
            display="block"
            variant="p"
            color="textSecondary"
            align="center"
          >
            See products, edit & delete
          </Typography>
        </div>

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* grid items */}
            <Grid item xs={12}>
              <Input
                placeholder="Search Products"
                className={classes.searchBar}
              ></Input>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
              <Paper>
                <ProductItem
                  img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                  price={14.99}
                  title="CBD Oil Product 1"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper>
                <ProductItem
                  img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                  price={20.99}
                  title="CBD Oil Product 2"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper>
                <ProductItem
                  img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                  price={4.99}
                  title="CBD Oil Product 3"
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
