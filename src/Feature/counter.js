import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();


const tiers = [
  {
    title: 'Santosh',
    price: '2',
    description: [
      'Wish you happy Birthday',
    ],
    buttonText: 'Update Birthday year',
    buttonVariant: 'contained',
  },
  {
    title: 'John',
    price: '5',
    description: [
      'Many more returns of the day',
    ],
    buttonText: 'Birthday year',
    buttonVariant: 'contained',
   
  },
  {
    title: 'Dev',
    price: '3',
    description: [
     'Have a fabulous birthday',
    ],
    
  },
];

 
 const Counter = ()=> {

    const [count, setCount] = useState(1)
   
    const handleClick1 = () => {
        setCount(count + 1)
    }

  return (
    <React.Fragment>
         <ThemeProvider theme={theme}>
                <Grid container sx={{ height: "60vh" }}>
                  <Grid
                    item
                    mt={8}
                    ml={36}
                    xs={8}
                    sm={8}
                    md={8}
                    borderRadius={2}
                    component={Paper}
                    elevation={10}
                    square
                  >
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
     
    
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
          <Typography component="h2" align="center" variant="h3" color="text.primary">
                   Birthday Greetings
            </Typography>
      </Container>
      
      <Container maxWidth="md" component="main">
          
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
      
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? null : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                      
                    <Typography component="h2" variant="h3" color="text.primary">
                     {tier.price + count}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button onClick={handleClick1} fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
      </Container>
      </Grid>
      </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default Counter
