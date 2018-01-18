import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import headshot from '../assets/grace_headshot.jpg';
import SectionHeader from '../components/section-header';

const styles = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-items': 'center',
    'align-items': 'center',
    '@media(min-width: 420px)': {
      'flex-direction': 'row'
    }
  },
  portrait: {
    width: '100%',
    position: 'relative',
    top: '-25px'
  },
  portraitContainer: {
    flex: '0 0 auto',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    'border-radius': '100px',
    '@media(min-width: 420px)': {
      margin: '0 20px 20px 0'
    }
  },
  section: {
    'max-width': '800px',
    margin: '0 auto 200px'
  },
  bio: {
    'line-height': '1.75rem',
    'p': {
      margin: 0,
      'margin-bottom': '16px'
    }
  }
}));

class About extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div id="about" className={classes.section}>
        <SectionHeader title="About" />
        <div className={classes.container}>
          <div className={classes.portraitContainer}>
            <img className={classes.portrait} src={headshot} alt={"Grace Pastore"} />
          </div>
          <div className={classes.bio}>
            <p>Writer, editor and marketing professional based in Seattle, WA.</p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
