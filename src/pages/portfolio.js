import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Project from '../components/project';
import SectionHeader from '../components/section-header';

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
        <SectionHeader title="Portfolio" />
        <div className={classes.content}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Project />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Project />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Project />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Project />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Project />
            </Grid>
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
