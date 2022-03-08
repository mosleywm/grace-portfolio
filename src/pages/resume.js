import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import SectionHeader from '../components/section-header';

const styles = createStyleSheet(theme => ({
  section: {
    'margin-bottom': '200px',
    'text-align': 'center'
  },
  sectionSmall: {
    'margin-bottom': '40px'
  },
  textBold: {
    'font-weight': 'bold'
  },
  content: {
    'line-height': '1.75rem',
    'max-width': '800px',
    'margin': 'auto'
  },
  subheader: {
    'margin-bottom': '10px'
  }
}));

class Resume extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div id="resume" className={classes.section}>
        <SectionHeader title="Resum&eacute;" />
        <div className={classes.content}>
          <h3 className={classes.subheader}>Work Experience</h3>
          <div><span className={classes.textBold}>Senior Copywriter</span>, Wunderman Thompson, May 2021-Present</div>
          <div><span className={classes.textBold}>Marketing Manager</span>, Calico Energy, September 2019-April 2021</div>
          <div><span className={classes.textBold}>Copywriter</span>, Limeade, May 2018-September 2019</div>
          <div><span className={classes.textBold}>Marketing and Communications Manager</span>, Calico Energy, November 2016-April 2018</div>
          <div><span className={classes.textBold}>Copywriter</span>, Williams Helde Marketing Communications, November 2015-November 2016</div>
          <div><span className={classes.textBold}>Sales Operations and Content Specialist</span>, Array Health, September 2014- November 2015</div>
          <div><span className={classes.textBold}>Project Support Intern</span>, Array Health, June 2014-September 2014</div>
          <div><span className={classes.textBold}>Bookkeeper, Office Coordinator</span>, Blue Ridge Graphics, August 2013-February 2014</div>
          <h3 className={classes.subheader}>Education & Honors</h3>
          <div><span className={classes.textBold}>Bachelor of Arts</span>, Goucher College, May 2013</div>
          <div>History and American Studies double major. Cum Laude, with honors in History.</div>
          <div><span className={classes.textBold}>Burchenal Endowed Merit Scholarship for Excellence in History:</span> 2011, 2012, 2013</div>
          <div className={classes.sectionSmall}><span className={classes.textBold}>Goucher College Dean’s List:</span> 2011, 2012, 2013</div>
          <h3 className={classes.subheader}>Skills</h3>
          <div><span className={classes.textBold}>Short form copy</span> - video scripts, ad copy, social media posts, web copy</div>
          <div><span className={classes.textBold}>Long form copy</span> - eBooks, whitepapers, case studies, blog posts, articles, email sequences</div>
          <div><span className={classes.textBold}>Content strategy</span> - sales decks, outreach, campaign development, content and concept ideation, product and UX copy</div>
          <div><span className={classes.textBold}>Project management</span> - including RFP response management, end-to-end content development, marketing operations,  writing team mentorship</div>
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Resume);
