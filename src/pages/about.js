import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
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
    'border-radius': '100px'
  },
  section: {
    'margin-bottom': '200px'
  },
  bio: {
    'max-width': '600px',
    'line-height': '1.75rem'
  }
}));

class About extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div id="about" className={classes.section}>
        <SectionHeader title="About" />
        <Grid container justify={"center"} align={"center"} direction={"row"}>
          <Grid item>
            <div className={classes.portraitContainer}>
              <img className={classes.portrait} src={headshot} alt={"Grace Pastore"} />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.bio}>
            An empathic creative, writer, marketer and project manager, with an eye for the big picture and an unwavering focus on tactical execution. Passionate learner, obsessive puzzle-solver, undaunted by deadlines.
          </Grid>
        </Grid>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
