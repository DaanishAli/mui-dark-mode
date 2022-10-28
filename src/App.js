import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';





import { ColorModeContext } from './store';


function App() {
  const { mode, toggleMode } = useContext(ColorModeContext)
  console.log(mode);
  return (

    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        // p: 3,
      }}
    >
      <Card sx={{ maxWidth: 345, bgcolor: 'background.default', }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] , }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.pexels.com/photos/3845156/pexels-photo-3845156.jpeg?cs=srgb&dl=pexels-anna-shvets-3845156.jpg&fm=jpg&_gl=1*1tz4xkd*_ga*MTcwMTc3OTE1Ni4xNjY2OTMyMDg2*_ga_8JE65Q40S6*MTY2NjkzMjA4OC4xLjEuMTY2NjkzMjExMy4wLjAuMA.."
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          </IconButton>
          <IconButton aria-label="share">
          </IconButton>

        </CardActions>

      </Card>
      <Button onClick={toggleMode}> change mode</Button>
    </Box>

  );
}

export default App;
