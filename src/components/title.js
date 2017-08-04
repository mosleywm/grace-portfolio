import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import NavLink from '../components/nav-link';

const styles = createStyleSheet(theme => ({
  gridContainer: {
    height: '600px'
  },
  bordered: {
    border: '4px solid #f3f3f3',
    padding: '20px',
    margin: 0,
    'margin-bottom': '10px'
  }
}));

class Title extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Grid className={classes.gridContainer} container align={"center"} justify={"center"}>
        <Grid item>
          <h1 className={classes.bordered}>Grace Pastore</h1>
          <Grid container justify={"space-between"}>
            <Grid item>
              <NavLink title="About" targetId="about" />
            </Grid>
            <Grid item>
              <NavLink title="Resum&eacute;" targetId="resume" />
            </Grid>
            <Grid item>
              <NavLink title="Portfolio" targetId="portfolio" />
            </Grid>
            <Grid item>
              <NavLink title="Contact" targetId="contact" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
