import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Login from './login';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { AppProvider } from '@toolpad/core';
import './../Toolpad.css';
import Register from './register';

const drawerWidth = 240;

const navItems = [
  { segment: 'home', title: 'Home' },
  { segment: 'register', title: 'Sign Up' },
  { segment: 'contact', title: 'Contact' },
  { segment: 'login', title: 'Sign In' },
];

// Route handler
function PageContent({ pathname }) {
  switch (pathname) {
    case '/login':
      return <Login />;
    case '/register':
      return <Register/>;
    default:
      return <Typography>try</Typography>;
  }
}

function LandingPage() {
  const router = useDemoRouter('/home');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        B I M S
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.segment} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => router.navigate(`/${item.segment}`)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <DemoProvider>
      <AppProvider navigation={navItems} router={router}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav" sx={{ backgroundColor: 'rgba(26, 43, 88, 1)'}}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                BIMS
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.segment}
                    sx={{ color: '#fff' }}
                    onClick={() => router.navigate(`/${item.segment}`)}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Box component="main" sx={{weight: 'vh-500' }}>
            <Toolbar />
            <center>
              <PageContent pathname={router.pathname} />
            </center>
          </Box>
        </Box>
      </AppProvider>
    </DemoProvider>
  );
}

export default LandingPage;
