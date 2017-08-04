import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styles = createStyleSheet(theme => ({
  fieldset: {
    margin: 'auto',
    width: '50%',
    'max-width': '600px',
    border: 'none',
    'border-top': '3px solid #751aff',
    padding: 0
  },
  legend: {
    margin: 'auto'
  },
  sectionHeader: {
    'display': 'inline-block',
    padding: '10px 20px'
  }
}));

class SectionHeader extends Component {
  render() {
    const {classes, title} = this.props;

    return (
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>
          <h2 className={classes.sectionHeader}>{title}</h2>
        </legend>
      </fieldset>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionHeader);
