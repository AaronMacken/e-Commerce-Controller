import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useInput } from "../services/useInputHook";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { heading, buttonText, signUp, errors, history, removeError } = props;

  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername
  } = useInput("");

  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");
  const {
    value: adminCode,
    bind: bindAdminCode,
    reset: resetAdminCode
  } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    const authType = signUp ? "signup" : "signin";
    let formState = { username, password, adminCode };
    props
      .onAuth(authType, formState)
      .then(() => {
        props.history.push("/products");
      })
      .catch(() => {
        resetUsername();
        resetPassword();
        resetAdminCode();
        return;
      });
  };

  // listen for a change in the route, if so -> use remove Error
  history.listen(() => {
    removeError();
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {heading}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            {...bindUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...bindPassword}
          />
          {signUp && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="adminCode"
              label="Admin Code"
              type="password"
              id="adminCode"
              {...bindAdminCode}
            />
          )}
          {errors.message && (
            <div style={{ color: "red" }}>{errors.message}</div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </Container>
  );
}