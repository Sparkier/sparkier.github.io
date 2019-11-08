import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
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
          <Avatar
              alt="Alex Bäuerle"
              src={process.env.PUBLIC_URL + "alex.jpg"}
              style={{
                width: 150,
                height: 150
              }} />
        </Grid>
        <Grid item>
          <NavigationElements/>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationHeader;
