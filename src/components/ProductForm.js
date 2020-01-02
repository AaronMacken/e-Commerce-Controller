import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { Paper, Typography, Container, Box } from "@material-ui/core";
import { createProduct } from "../store/actions/products";
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
  const { history, createProduct, removeError, errors, formData } = props;
  const path = props.match.params.product_id;
  const classes = useStyles();

  // listen for a change in the route, if so -> use remove Error
  history.listen(() => {
    removeError();
  });


  // Conditional variables for form values and titles
  let formTitle = formData ? "Edit Product" : "New Product";
  let formSubTitle = formData
    ? "Modify product data"
    : "Add item to online inventory";
  let productNamePH = formData ? `Current Product Name: ${formData[0]}` : 'Cool Beans Dude';
  let productPricePH = formData ? `Current Product Price: ${formData[1]}` : '9.99';

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
            variant="p"
            color="textSecondary"
            align="center"
          >
            {formSubTitle}
          </Typography>
        </div>
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.formPaper}>
            <Formik
              initialValues={{
                productName: "",
                price: null
              }}
              validationSchema={Yup.object({
                productName: Yup.string().required("Required"),
                price: Yup.number()
                  .required("Required")
                  .typeError("You must enter a number")
                  .positive("Must be a positive number")
              })}
              onSubmit={(values, { resetForm }) => {
                createProduct({
                  title: values.productName,
                  price: values.price
                });
                resetForm({});
                history.push("/products");
              }}
            >
              {() => (
                <Form className={classes.formColumn}>
                  <Box className={classes.inputWrapper}>
                    <label htmlFor="productName" className={classes.myLabel}>
                      Product
                    </label>
                    <Field
                      className={classes.myInput}
                      type="text"
                      name="productName"
                      placeholder={productNamePH}
                    />
                    <ErrorMessage
                      name="productName"
                      component="div"
                      className={classes.errors}
                    />
                  </Box>

                  <Box className={classes.inputWrapper}>
                    <label htmlFor="price" className={classes.myLabel}>
                      Price
                    </label>
                    <Field
                      className={classes.myInput}
                      type="number"
                      name="price"
                      placeholder={productPricePH}
                      step="0.01"
                      min="0"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className={classes.errors}
                    />
                  </Box>
                  {errors.message && (
                    <div style={{ color: "red" }}>{errors.message}</div>
                  )}
                  <button type="submit" className={classes.submitButton}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
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

export default connect(mapStateToProps, { createProduct, removeError })(
  ProductForm
);
