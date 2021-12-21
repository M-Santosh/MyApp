import React,{ useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";

export default function Signup() {
  const theme = createTheme();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Container  component={Paper} maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{mt:5}} component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 5 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e)=> setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    onChange={(e)=> setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChangeCapture={(e)=>setPassword(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Phone number"
                    label="Phone number"
                    type="number"
                    id="number"
                    onChange={(e)=>setPhone(e.target.value)}
                   
                  />
                  <Divider sx={{mt:2}}>Input value</Divider>
                  </Grid>
                 <Grid>
                 <Typography variant="h3">
                    <h6>Firstname: <span style={{color:"green"}}>{firstname}</span></h6>
                    <h6>Lastname: <span style={{color:"blue"}}>{lastname}</span></h6>
                    <h6>Email: <span style={{color:"violet"}}>{email}</span></h6>
                    <h6>Password: <span style={{color:"red"}}>{password}</span></h6>
                    <h6>Phone Number: <span style={{color:"darkblue"}}>{phone}</span></h6>
                  </Typography>
                 </Grid>
                </Grid>
                
      
              <Grid container justifyContent="flex-end">
                <Grid item>
                  
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

