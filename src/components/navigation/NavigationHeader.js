import React from 'react';
import { Grid, Avatar, Box } from '@material-ui/core';
import NavigationElements from './NavigationElements';

class NavigationHeader extends React.Component {
  render() {
    return (
      <Grid
          container
          direction='column'
          spacing={1}
          justify="center"
          alignItems="center"
          className="navigationHead">
        <Grid item>
          <Box
            borderRadius="50%"
            borderColor="#000000"
            border={0.5}
            style={{
              width: 151,
              height: 151
            }}>
              <Avatar
                alt="Alex Bäuerle"
                src={process.env.PUBLIC_URL + "alex.jpg"}
                style={{
                  width: 150,
                  height: 150
                }} />
          </Box>
        </Grid>
        <Grid item>
          <NavigationElements/>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationHeader;