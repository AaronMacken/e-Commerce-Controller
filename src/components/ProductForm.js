import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { Grid, Paper, Typography, Container, Box } from "@material-ui/core";

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
        <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.formPaper}>
            <Formik
              initialValues={{
                email: "",
                password: "",
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
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className={classes.formColumn}>
                  <Box className={classes.inputWrapper}>
                    <label htmlFor="productName" className={classes.myLabel}>
                      Product
                    </label>
                    <Field
                      className={classes.myInput}
                      type="text"
                      name="productName"
                      placeholder="Cool Beans Dude"
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
                      placeholder="9.99"
                      step="0.01"
                      min="0"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className={classes.errors}
                    />
                  </Box>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.submitButton}
                  >
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
