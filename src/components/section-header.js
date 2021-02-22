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
    padding: 0,
  },
  legend: {
    margin: 'auto',
  },
  sectionTitle: {
    'display': 'inline-block',
    padding: '10px 20px',
    margin: '0px',
  },
  headerNotes: {
    'font-size': '11px',
    'text-align': 'center',
    margin: '0px',
  },
  sectionHeader: {
    'margin-bottom': '20px',
  }
}));

class SectionHeader extends Component {
  render() {
    const {classes, title, notes} = this.props;
    const {fieldset, legend, sectionHeader, sectionTitle, headerNotes} = classes;

    return (
      <div className={sectionHeader}>
        <fieldset className={fieldset}>
          <legend className={legend}>
              <h2 className={sectionTitle}>{title}</h2>
          </legend>
        </fieldset>
        {notes && <p className={headerNotes}>{notes}</p>}
      </div>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionHeader);
