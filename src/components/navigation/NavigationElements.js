import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { School, GitHub, Twitter, Language } from '@material-ui/icons';


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
          <Link href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao">
            <School
                fontSize="inherit"
                style={{
                  width: 30,
                  height: 30
                }} />
          </Link>
        </Grid>
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
          <Link href="https://www.twitter.com/a13xba">
            <Twitter
                fontSize="inherit"
                style={{
                  width: 30,
                  height: 30
                }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="http://uni-ulm.de/?alex-baeuerle">
            <Language
                fontSize="inherit"
                style={{
                  width: 30,
                  height: 30
                }} />
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default NavigationElements;
