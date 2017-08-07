import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import headshot from '../assets/grace_headshot.jpg';
import SectionHeader from '../components/section-header';

const styles = createStyleSheet(theme => ({
  portrait: {
    width: '100%',
    position: 'relative',
    top: '-25px'
  },
  portraitContainer: {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    'border-radius': '100px',
    margin: 'auto',
    '@media(min-width: 420px)': {
      float: 'left',
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
        <div className={classes.portraitContainer}>
          <img className={classes.portrait} src={headshot} alt={"Grace Pastore"} />
        </div>
        <div className={classes.bio}>
          <p>I've been a writer for as long as I can remember - but not always in the classic sense. I wasn't penning novellas at age eight (maybe a terrible poem or two). Instead, writing has always been an intrinsic part of how I problem-solve and communicate - my constant obsession, a running commentary of my personal and professional development. The common thread was, and continues to be, curiosity.</p>
          <p>Regardless of the product I'm selling, the idea I'm pitching or the answer I'm formulating, I've found that curiosity is more than a bonus, but a requirement for versatile writing and quality project management. In each of my jobs, from the more tactically-focused to the creative, I've delivered polished finished products, but I've never done so alone. I ask questions, set meetings, contribute to design, document processes and solicit feedback. All take curiosity.</p>
          <p>My professional experience, in both technical and creative settings, has given me a respect for the analytical side of writing and marketing, as well as a reverence for the aesthetics. I plan to keep learning, asking questions and extending myself to produce compelling writing and optimal outcomes. So, hi! I'm Grace - a Virginia-native and a enthusiastic baker, artist, sardonic British comedy addict and writer.</p>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
