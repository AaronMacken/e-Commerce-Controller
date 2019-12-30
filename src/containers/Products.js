import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Input, Typography } from "@material-ui/core";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/actions/products";

// style hooks
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

function Products(props) {
  // props coming from mapstatetoprops / mapdispatchtoprops
  const { fetchProducts, deleteProduct, products } = props;
  // hook for adding styles
  const classes = useStyles();
  // hook to make api request to get all products in the database
  useEffect(() => {
    fetchProducts();
  }, []);
  const productList = products.map(p => (
    <Grid item xs={12} className={classes.gridItem}>
      <Paper>
        <ProductItem
          img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
          price={p.price}
          title={p.title}
          key={p._id}
        />
      </Paper>
    </Grid>
  ));

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
          {/* Grid */}
          <Grid container spacing={3}>
            {/* Searchbar */}
            <Grid item xs={12}>
              <Input
                placeholder="Search Products"
                className={classes.searchBar}
              ></Input>
            </Grid>
            {/* product items */}
            {productList}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

// make messages held in state available as props
function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  Products
);
