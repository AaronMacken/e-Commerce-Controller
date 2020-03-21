import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Paper, Typography, Container, Box, MenuItem, Select } from "@material-ui/core";
import { createProduct, updateProduct } from "../store/actions/products";
import { connect } from "react-redux";
import Thumb from "./Thumb";

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
    "&:hover": {
      borderBottom: "none"
    },
    "&:focus": {
      outlineColor: "rgba(0, 20, 255)"
    }
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column"
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
    updateFormData,
    updateProduct
  } = props;

  const path = props.match.params.product_id;
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (updateFormData) {
      setTitle(`${props.updateFormData[0]}`)
      setPrice(`${props.updateFormData[1]}`)
      setDescription(`${props.updateFormData[3]}`)
    }
  }, [updateFormData, props.updateFormData])

  const fileChangedHandler = event => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (updateFormData) {
      updateProduct(path, {
        title: title,
        price: price,
        description: description,
        category: category
      });
    } else {
      const formData = new FormData();
      formData.append("productImage", image);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      createProduct(formData);
    }
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    history.push("/products");
  };

  // Conditional variables for form values and titles
  let formTitle = updateFormData ? "Edit Product" : "New Product";
  let formSubTitle = updateFormData
    ? "Modify product data"
    : "Add item to online inventory";
  let productNamePH = updateFormData
    ? `"${updateFormData[0]}"`
    : `"Cool Beans Dude"`;
  let productPricePH = updateFormData ? `$${updateFormData[1]}` : `$9.99`;

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
  ) : (
      <img
        src={`${updateFormData[2]}`}
        alt={`${updateFormData[0]}`}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  let descriptionPH = updateFormData ? `${updateFormData[3]}` : `Details about the product`

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
                  Price
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

              <Box className={classes.inputWrapper}>
                <label htmlFor="description" className={classes.myLabel}>
                  Product
                </label>


                <textarea name="description"
                  placeholder={descriptionPH}
                  className={classes.myInput}
                  onChange={e => {
                    setDescription(e.target.value)
                  }}
                  value={description}
                >
                </textarea>
              </Box>

              <Box className={classes.inputWrapper}>
                <label htmlFor="category" className={classes.myLabel}>
                  Category
                </label>

                <Select
                  labelId="category"
                  id="category-select"
                  value={category}
                  onChange={e => {
                    setCategory(e.target.value)
                  }}>
                  <MenuItem value={"Edibles"}>Edibles</MenuItem>
                  <MenuItem value={"Pet Edibles"}>Pet Edibles</MenuItem>
                  <MenuItem value={"Topicals"}>Topicals</MenuItem>
                  <MenuItem value={"Flowers"}>Flowers</MenuItem>
                  <MenuItem value={"Tinctures"}>Tinctures</MenuItem>
                  <MenuItem value={"Cartridges"}>Cartridges</MenuItem>
                  <MenuItem value={"Misc"}>Miscellaneous</MenuItem>
                </Select>
              </Box>

              {imageUpload}
              <Thumb file={image} />
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


export default connect(null, {
  createProduct,
  updateProduct
})(ProductForm);
