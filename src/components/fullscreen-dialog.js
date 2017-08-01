import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Dialog, {DialogContent} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import image from '../assets/projects/i1bio_homepage_161102_mb.png';

const styles = createStyleSheet(theme => ({
  image: {
    width: '100%'
  }
}));

class FullscreenDialog extends Component {
  render() {
    const {classes, ...other} = this.props;

    return (
      <Dialog
	    fullscreen
		onRequestClose={this.props.handleRequestClose}
		transition={<Slide direction="up" />}
		{...other}>
		<DialogContent>
		  <img className={classes.image} src={image} alt="Project Title" />
		</DialogContent>
	</Dialog>
	);
  }
}

FullscreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullscreenDialog);
