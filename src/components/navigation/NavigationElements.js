import React from 'react';
import { Grid, Link } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';


class NavigationElements extends React.Component {
  render() {
    return (
      <Grid
          container
          direction='row'
          spacing={1}
          justify="center"
          alignItems="center">
        <Grid item>
          <Link href="https://www.github.com/sparkier">
            <GitHub
                fontSize="inherit"
                style={{
                  width: 30,
                  height: 30
                }} />
          </Link>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationElements;
