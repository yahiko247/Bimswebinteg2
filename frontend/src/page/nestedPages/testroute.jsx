import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HouseIcon from '@mui/icons-material/House';
import MailIcon from '@mui/icons-material/Mail';
import GavelIcon from '@mui/icons-material/Gavel';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Zone from './zone';
import HousePage from './house';
import Population from './population';
import Youth from './youth';

function NavigationList() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Define pages to be rendered
  const pages = [
   <HousePage/>,
    <Population/>,
    <Youth/>,
    <Zone/>,
  ];

  return (
    <div>
      <List style={{ color: 'black' }}>
        {['Home', 'Brg Certificate', 'Brg Official', 'Brg Indigency'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <HouseIcon style={{ color: 'black' }} />
                ) : index === 1 ? (
                  <MailIcon style={{ color: 'black' }} />
                ) : index === 2 ? (
                  <GavelIcon style={{ color: 'black' }} />
                ) : (
                  <InsertDriveFileIcon style={{ color: 'black' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Render the selected page */}
      {pages[selectedIndex]}
    </div>
  );
}

export default NavigationList;
