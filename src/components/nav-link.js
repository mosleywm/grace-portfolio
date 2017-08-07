import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(this.props.targetId);

    // Smooth scroll taken from https://stackoverflow.com/questions/12199363/scrollto-with-animation
    const initialY = document.body.scrollTop,
        y = target.offsetTop,
        baseY = (initialY + y) * 0.5,
        difference = initialY - baseY,
        startTime = performance.now();

    function step() {
        var normalizedTime = (performance.now() - startTime) / 1000;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  render() {
    const {targetId, title} = this.props;

    return (
      <a onClick={this.handleOnClick} href={targetId}>{title}</a>
    );
  }
}

NavLink.propTypes = {
  targetId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavLink;
