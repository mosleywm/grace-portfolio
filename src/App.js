import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Title from './components/title';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import {SocialIcon} from 'react-social-icons';
import './App.css';

const styles = createStyleSheet(theme => ({
  header: {
    padding: '24px',
    background: '#751aff',
    background: '-webkit-linear-gradient(#751aff, #f3f3f3)',
    background: '-o-linear-gradient(#751aff, #f3f3f3)',
    background: '-moz-linear-gradient(#751aff, #f3f3f3)',
    background: 'linear-gradient(#751aff, #f3f3f3)',
  },
  main: {
    padding: '0 24px'
  },
  footer: {
    background: '#2e2e2e',
    color: '#f3f3f3',
    padding: '0 24px'
  },
  content: {
    'min-height': '80px'
  },
  listItem: {
    'border-right': '1px solid #f3f3f3',
    'padding-right': '16px'
  },
  iconContainer: {
    float: 'right',
    height: '30px',
    '&.social-icon': {
      'margin-left': '8px'
    }
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
            <Contact />
          </main>
          <footer className={classes.footer}>
            <Grid className={classes.content} container align={'center'}>
              <Grid item xs={6}>
                <div>&copy; 2021</div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.iconContainer}>
                  <SocialIcon url="https://www.linkedin.com/in/grace-pastore-b9182487/" style={{ height: 25, width: 25, marginRight: '8px' }} />
                  <SocialIcon url="https://www.instagram.com/gracepastore/" style={{ height: 25, width: 25 }} />
                </div>
              </Grid>
            </Grid>
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
