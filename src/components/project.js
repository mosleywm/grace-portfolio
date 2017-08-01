import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia } from 'material-ui/Card';
import FullscreenDialog from './fullscreen-dialog'
import image from '../assets/projects/i1bio_homepage_161102_mb.png';

const styles = createStyleSheet(theme => ({
  thumbnail: {
    width: '100%',
  },
  cardContainer: {
    '&:hover': {
      opacity: '.5',
      cursor: 'pointer'
    },
    'max-width': '250px',
    margin: 'auto'
  },
  thumbnailContainer: {
    height: '200px',
    overflow: 'hidden'
  },
  projectTitle: {
    'text-align': 'center',
    background: '#cccccc',
    'line-height': '2rem',
    margin: '0'
  }
}));

class Project extends Component {
  state = {open: false};

  handleOpenDialog = () => {
    this.setState({open: true});
  }

  handleRequestClose = () => {
    this.setState({open: false});
  }

  render() {
    const classes = this.props.classes;

    return (
      <Card className={classes.cardContainer} onClick={this.handleOpenDialog}>
        <div className={classes.thumbnailContainer}>
          <CardMedia>
          {
          	//<img src={project.src} alt={project.title} />
          }
            <img className={classes.thumbnail} src={image} alt={"Project Title"} />
          </CardMedia>
        </div>
        <h3 className={classes.projectTitle}>Project Title</h3>
        <FullscreenDialog open={this.state.open} onRequestClose={this.handleRequestClose} />
      </Card>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
