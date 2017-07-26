import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styles = createStyleSheet(theme => ({
  header: {
    height: '600px'
  }
}));

class Header extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Grid>
        <header className={classes.header}>
          <Grid container align={"stretch"}>
            <Grid item>
              <h1>Grace Pastore</h1>
            </Grid>
          </Grid>
        </header>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.class.isRequired
};

export default withStyles(styles)(Header);
