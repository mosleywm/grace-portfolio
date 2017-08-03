import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia } from 'material-ui/Card';
import Lightbox from 'react-image-lightbox';

const imgBasePath = 'http://www.gracepastore.com/images/';

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
    height: '100%'
  },
  thumbnailContainer: {
    height: '200px',
    overflow: 'hidden'
  },
  projectSubheader: {
    'text-align': 'center',
    background: '#cccccc',
    'line-height': '2rem',
    height: '100%',
    padding: '5px'
  },
  projectTitle: {
    margin: 0
  },
  projectCompany: {
    'font-weight': 'bold'
  }
}));

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0
    };

    this.handleOpenRequest = () => {
        this.setState({isOpen: true});
    };

    this.handleCloseRequest = () => {
        this.setState({isOpen: false});
    };

    this.handleMovePrevRequest = this.handleMovePrevRequest.bind(this);
    this.handleMoveNextRequest = this.handleMoveNextRequest.bind(this);
  }

  handleMovePrevRequest = () => {
    this.setState({
      photoIndex: (this.state.photoIndex + this.props.project.images.length - 1) % this.props.project.images.length
    });
  }

  handleMoveNextRequest = () => {
    this.setState({
      photoIndex: (this.state.photoIndex + 1) % this.props.project.images.length
    });
  }

  render() {
    const {classes, project} = this.props;
    const {photoIndex, isOpen} = this.state;
    const nextSrc = project.images.length > 1 ? imgBasePath + project.images[(photoIndex + 1) % project.images.length] : '';
    const prevSrc = project.images.length > 1 ? imgBasePath + project.images[(photoIndex + project.images.length - 1) % project.images.length] : '';

    return (
      <Card className={classes.cardContainer} onClick={this.handleOpenRequest}>
        <div className={classes.thumbnailContainer}>
          <CardMedia>
            <img className={classes.thumbnail} src={imgBasePath + project.images[0]} alt={"Project Title"} />
          </CardMedia>
        </div>
        <div className={classes.projectSubheader}>
          <h3 className={classes.projectTitle}>{project.project}</h3>
          <div className={classes.projectCompany}>({project.company})</div>
        </div>
        { isOpen &&
          <Lightbox
            mainSrc={imgBasePath + project.images[photoIndex]}
            nextSrc={nextSrc}
            prevSrc={prevSrc}
            imageCaption={project.note}
            onMovePrevRequest={this.handleMovePrevRequest}
            onMoveNextRequest={this.handleMoveNextRequest}
            onCloseRequest={this.handleCloseRequest} />
        }
      </Card>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
