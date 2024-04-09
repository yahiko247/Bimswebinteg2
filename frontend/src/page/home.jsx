import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HouseIcon from '@mui/icons-material/House';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SourceIcon from '@mui/icons-material/Source';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import GavelIcon from '@mui/icons-material/Gavel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import BrgCertPage from './brgCertPage';
import BrgOfficialPage from './brgOfficial';






const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleIndexPage = () => {
    setSelectedIndex(index);
  };

  const pages = [
    BrgCertPage,
    BrgOfficialPage
  ];


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawer = (
    <div>
     <div className='text-center' style={{marginTop: '20px'}}>
      <strong><h5 style={{color:'white'}}>B I M S</h5></strong>
     </div>
      <List style={{color:'white', fontSize: '5px'}}>
        {['Home', 'Brg Certificate', 'Brg Officials', 'Brg Indigency'].map((text, index) => (
          <ListItem 
          key={text} 
          disablePadding
          selected={selectedIndex === index}
          onClick={() => handleIndexPage(index)}
          >
            <ListItemButton>
              <ListItemIcon>
              {index === 0 ? <HouseIcon style={{color: 'white'}} /> : index === 1 ? <MailIcon style={{color:'white'}}/> : index === 2 ? <GavelIcon style={{color:'white'}}/> : <InsertDriveFileIcon style={{color:'white'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       {pages[selectedIndex]}
      
      <List style={{color: "white", fontSize:'5px'}}>
        {['Brg Clearance', 'Residents Record', 'Request Documents'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ?  <FileCopyIcon style={{color: 'white'}}/> : index ===1 ? <FileOpenIcon style={{color:'white'}}/> : <SourceIcon style={{color:'white'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'rgba(26, 43, 88, 1);' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <h7>Dashboard</h7>
        <Typography paragraph>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
            <Card style={{margin:'20px', background: 'rgba(45, 153, 8, 1)', color: 'white', width:'300px', height: '150px'}}>
              <CardContent>
               
                <Typography variant="h5" component="h2">
                  <Link to='/house' style={{textDecoration: 'none', color:'white'}}>House</Link>
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

Home.propTypes = {
  
  window: PropTypes.func,
};

export default Home;
