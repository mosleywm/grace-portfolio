import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import SectionHeader from '../components/section-header';
import mailIcon from '../assets/mail.png';
import phoneIcon from '../assets/phone.png';

const styles = createStyleSheet(theme => ({
  section: {
    'max-width': '800px',
    margin: '0 auto 200px',
    'text-align': 'center'
  },
  content: {
    margin: '0 0 24px'
  },
  icon: {
    width: '20px',
    'margin-right': '8px'
  },
  cell: {
    display: 'inline-block',
    margin: 0
  }
}));

class Contact extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div id="contact" className={classes.section}>
        <SectionHeader title="Contact" />
        <div className={classes.content}>
          <img className={classes.icon} src={mailIcon} alt="email" />
          <p className={classes.cell}>pastore.grace@gmail.com</p>
        </div>
        <div className={classes.content}>
          <img className={classes.icon} src={phoneIcon} alt="phone" />
          <p className={classes.cell}>phone number on request</p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Contact);
