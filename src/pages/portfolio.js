import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Project from '../components/project';
import SectionHeader from '../components/section-header';

const projectManifest = require('../assets/project-manifest.json');

const styles = createStyleSheet(theme => ({
  section: {
    'margin-bottom': '200px',
  },
  content: {
    'line-height': '1.75rem',
    'max-width': '800px',
    'margin': 'auto'
  }
}));

class Portfolio extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div id="portfolio" className={classes.section}>
        <SectionHeader title="Portfolio" notes="Some project notes contain links" />
        <div className={classes.content}>
          <Grid container justify="center" align="stretch" gutter={24}>
            {
              projectManifest.map((project, index) => {
                return (
                  <Grid key={index} item>
                    <Project project={project} />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
