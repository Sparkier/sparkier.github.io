import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// Main component of the Application that displays all content dependant on the Controls State
class Main extends React.Component {
  // Render the Main Content and call other Elements
  render() {
    return (
      <Grid
          container
          direction='column'
          spacing={1}
          justify="top"
          alignItems="center"
          className="mainContent">
        <Grid item className="mainItem">
          <Typography variant="h6" align="center">
            Alex Bäuerle
          </Typography>
        </Grid>
        <Grid item className="mainItem">
          <Typography align="center">
            I am a Ph. D. student at Ulm University. When I am not in front of my
            computer, you will probably find me in the mountains.
          </Typography>
        </Grid>
        <Grid item className="mainItem">
          <Typography align="center">
            My research is on visualization and explainability for neural
            networks.
            In this context, I am always interested in new methods to better
            understand neural networks.
            I try to help developers in this area with techniques that helps
            them communicate and develop new approaches.
            For consumers of AI-powered applications, I work on visualizations
            that help them understand the decision that these algorithms make.
            If you are interested in my research, check out my scholar account.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
