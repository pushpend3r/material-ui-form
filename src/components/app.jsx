import React from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const styles = useStyles();
  return (
    <>
      <Container maxWidth="sm" component="main" className={styles.paper}>
        <Typography variant="h5" color="initial">
          Get In Touch
        </Typography>
        <form className={styles.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneno"
                label="Phone No."
                id="phoneno"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                variant="outlined"
                fullWidth
                name="company"
                label="Company"
                id="company"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                variant="outlined"
                multiline
                fullWidth
                rows={4}
                name="comment"
                label="Comment"
                id="comment"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
