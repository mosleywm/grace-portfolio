import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = createStyleSheet(theme => ({
  content: {
    'min-height': '80px'
},
  listItem: {
    'border-right': '1px solid #f3f3f3',
    'padding-right': '16px'
  }
}));

class Contact extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Grid id="contact" className={classes.content} container justify={'center'} align={'center'}>
        <Grid item>
          <div className={classes.listItem}>pastore.grace@gmail.com</div>
        </Grid>
        <Grid item>
          <div className={classes.listItem}>phone number on request</div>
        </Grid>
        <Grid item>
          <div>&copy; 2017</div>
        </Grid>
      </Grid>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Contact);
