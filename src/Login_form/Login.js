import React from "react";
import './App.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (  
        <div className="container">
          <div className="row">
            <div className="mt-5 col align-self-center">
                
              <ThemeProvider theme={theme}>
                <Grid container sx={{ height: "80vh" }}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={12}
                    borderRadius={2}
                    component={Paper}
                    elevation={10}
                    square
                  >
                    <Box
                      sx={{
                        my: 8,
                        mx: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography component="h1" variant="h5">
                        Sign in
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          id="input1"
                          margin="normal"
                          required
                          style={{ width: 500 }}
                          id="email"
                          label="Email Address"
                          name="email"
                          type="email"
                          // autoComplete="email"
                          autoFocus
                        />
                        <div>
                          <TextField
                            margin="normal"
                            required
                            style={{ width: 500 }}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                          />
                        </div>
                        <div>
                          <FormControlLabel
                            control={
                              <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                          />
                        </div>
                        <Button
                          type="submit"
                            id="center"
                          style={{ width: 300 }}
                          variant="contained"
                          sx={{ mt: 2, mb: 2 }}
                        >
                          Sign In
                        </Button>
                        <Grid container>
                          <Grid item>
                            <Link href="#" id="forgot" variant="body2">
                              {"Forgot password?"}
                            </Link>
                          </Grid>
                          <Grid item xs>
                            <Link href="#" id="dont" variant="body2">
                              {"Don't have an account? Sign Up"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </div>
          </div>
        </div>
  );
}
