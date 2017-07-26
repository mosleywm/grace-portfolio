import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Grid from 'material-ui/Grid';
import Header from './components/layout/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid container>
          <Grid item xs={12}>
            <Header />
              <content>
                Here is Some Content
              </content>
              <footer>
                footer content
              </footer>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
