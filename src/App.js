import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Title from './components/title';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import './App.css';

const styles = createStyleSheet(theme => ({
  header: {
    padding: '24px',
    background: '#6600cc',
    background: '-webkit-linear-gradient(#6600cc, #f3f3f3)',
    background: '-o-linear-gradient(#6600cc, #f3f3f3)',
    background: '-moz-linear-gradient(#6600cc, #f3f3f3)',
    background: 'linear-gradient(#6600cc, #f3f3f3)',
  },
  main: {
    padding: '0 24px'
  },
  footer: {
    background: '#2e2e2e',
    color: '#f3f3f3',
    padding: '0 24px'
  }
}));

class App extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <MuiThemeProvider>
        <div>
          <header className={classes.header}>
            <Title />
          </header>
          <main className={classes.main}>
            <About />
            <Resume />
            <Portfolio />
          </main>
          <footer className={classes.footer}>
            <Contact />
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
