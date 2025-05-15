import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

function Home(props) {

  return (
    <Box sx={{ display: 'flex', }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Typography paragraph>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1px'}}>
            <Card style={{margin:'20px', background: 'rgba(45, 153, 8, 1)', color: 'white', width:'300px', height: '150px'}}>
              <CardContent>
               
                <Typography variant="h5" component="h2">
                  <Link to='/houses' style={{textDecoration: 'none', color:'white'}}>House</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card style={{margin:'20px', background: 'rgba(240, 69, 151, 1)', color:'white',width:'300px', height: '150px'}}>
              <CardContent>
                
                <Typography variant="h5" component="h2">
                <Link to='/population' style={{textDecoration: 'none', color:'white'}}>Population</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card style={{margin:'20px', background:'rgba(254, 200, 10, 1)', color: 'white', width:'300px', height: '150px'}}>
              <CardContent>
               
                <Typography variant="h5" component="h2">
                <Link to='/youth' style={{textDecoration: 'none', color:'white'}}>Youth</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card style={{margin:'20px', background: 'rgba(40, 125, 105, 1)', color: 'white', width:'300px', height: '150px'}}>
              <CardContent>
                <Typography variant="h5" component="h2">
                <Link to='/zone' style={{textDecoration: 'none', color:'white'}}>Zone</Link>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Typography>
        <Typography paragraph>
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
