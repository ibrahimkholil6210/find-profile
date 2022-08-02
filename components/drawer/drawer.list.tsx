import { Box, ListItem } from "@mui/material";
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from "react";

type Anchor = 'left';
const codingPlatforms = [
  {
    name: 'HackerRank',
    icon: '/icons/hackerrank.png'
  },
  {
    name: 'Leetcode',
    icon: '/icons/leetcode.png'
  },
  {
    name: 'Codepen',
    icon: '/icons/codepen.svg'
  }
]

const otherPlatforms = [
  {
    name: 'Github',
    icon: '/icons/github.svg'
  },
  {
    name: 'Linkedin',
    icon: '/icons/linkedin.svg'
  },

]

const ShowFromList = ({ codingPlatforms }: { codingPlatforms: any[] }) => {
  return <> {
    codingPlatforms.map(({ name, icon }, index) => (
      <ListItem key={name} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <img src={icon} alt={name} height={40} width={40} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    ))
  }
  </>
}

const drawerList = ({ toggleDrawer }: { toggleDrawer: (bol: boolean) => any }) => {

  return <Box sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <ShowFromList codingPlatforms={otherPlatforms} />
    <Divider />
    <ShowFromList codingPlatforms={codingPlatforms} />
  </ Box>

};
export default drawerList