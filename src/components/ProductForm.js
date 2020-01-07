import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import { Paper, Typography, Container, Box } from "@material-ui/core";
import { createProduct, updateProduct } from "../store/actions/products";
import { removeError } from "../store/actions/error";
import { connect } from "react-redux";

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
  formPaper: {
    padding: theme.spacing(3)
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: theme.spacing(2)
  },
  myLabel: {
    fontWeight: "bold",
    marginTop: "1rem",
    marginLeft: ".5rem",
    fontSize: "1.25rem"
  },
  myInput: {
    padding: ".65rem .5rem",
    fontSize: "1rem",
    border: "2px solid #f5f5f5",
    backgroundColor: "rgb(247, 250, 252)",
    color: "var(--gray-800)",
    borderRadius: "10px",
    marginTop: ".5rem",
    "&:focus": {
      outlineColor: "rgba(0, 20, 255)"
    }
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  errors: {
    color: "red",
    marginLeft: ".5rem"
  },
  submitButton: {
    padding: ".5rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "10px",
    backgroundColor: "#3f51b5",
    width: "100%",
    margin: "auto",
    marginTop: "1rem",
    color: "#fff",
    border: "none",
    fontWeight: "bold"
  }
}));

function ProductForm(props) {
  const {
    history,
    createProduct,
    removeError,
    errors,
    updateFormData,
    updateProduct
  } = props;

  const path = props.match.params.product_id;
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();

  const fileChangedHandler = event => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (updateFormData) {
      updateProduct(path, {
        title: title,
        price: price
      });
    } else {
      const formData = new FormData();
      formData.append("productImage", image);
      formData.append("title", title);
      formData.append("price", price);
      createProduct(formData);
    }
    setTitle("");
    setPrice("");
    history.push("/products");
  };

  // listen for a change in the route, if so -> use remove Error
  history.listen(() => {
    removeError();
  });

  // Conditional variables for form values and titles
  let formTitle = updateFormData ? "Edit Product" : "New Product";
  let formSubTitle = updateFormData
    ? "Modify product data"
    : "Add item to online inventory";
  let productNamePH = updateFormData
    ? `Current Product Name: ${updateFormData[0]}`
    : "Cool Beans Dude";
  let productPricePH = updateFormData
    ? `Current Product Price: ${updateFormData[1]}`
    : "9.99";

  let imageUpload = !updateFormData ? (
    <Box className={classes.inputWrapper}>
      <label htmlFor="productImage" className={classes.myLabel}>
        Image
      </label>
      <input
        name="productImage"
        type="file"
        className={classes.myInput}
        onChange={fileChangedHandler}
        required
      />
    </Box>
  ) : null;

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
            {formTitle}
          </Typography>
          <Typography
            display="block"
            variant="body1"
            color="textSecondary"
            align="center"
          >
            {formSubTitle}
          </Typography>
        </div>
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.formPaper}>
            <form className={classes.formColumn} onSubmit={handleSubmit}>
              <Box className={classes.inputWrapper}>
                <label htmlFor="productName" className={classes.myLabel}>
                  Product
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder={productNamePH}
                  className={classes.myInput}
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                  required
                />
              </Box>

              <Box className={classes.inputWrapper}>
                <label htmlFor="price" className={classes.myLabel}>
                  Product
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={e => {
                    setPrice(e.target.value);
                  }}
                  className={classes.myInput}
                  placeholder={productPricePH}
                  required
                />
              </Box>

              {imageUpload}
              <button type="submit" className={classes.submitButton}>
                Submit
              </button>
            </form>
          </Paper>
        </Container>
      </main>
    </div>
  );
}

// make messages held in state available as props
function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, {
  createProduct,
  removeError,
  updateProduct
})(ProductForm);
