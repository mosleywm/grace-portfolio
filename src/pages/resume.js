import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import SectionHeader from '../components/section-header';

const styles = createStyleSheet(theme => ({
  section: {
    'margin-bottom': '200px',
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
          <div><span className={classes.textBold}>Marketing and Communications Manager</span>, Calico Energy, November 2016-Present</div>
          <div><span className={classes.textBold}>Copywriter, Williams Helde Marketing Communications</span>, November 2015-November 2016</div>
          <div><span className={classes.textBold}>Sales Operations and Content Specialist</span>, Array Health, September 2014- November 2015</div>
          <div><span className={classes.textBold}>Project Support Intern</span>, Array Health, June 2014-September 2014</div>
          <div><span className={classes.textBold}>Bookkeeper</span>, Office Coordinator, Blue Ridge Graphics, August 2013-February 2014</div>
          <div className={classes.sectionSmall}><span className={classes.textBold}>Hostess</span>, Bang! Tapas restaurant, Charlottesville, VA, Summer 2009</div>
          <h3 className={classes.subheader}>Education & Honors</h3>
          <div><span className={classes.textBold}>Bachelor of Arts</span>, Goucher College, May 2013</div>
          <div>History and American Studies double major. Cum Laude, with honors in History.</div>
          <div><span className={classes.textBold}>Burchenal Endowed Merit Scholarship for Excellence in History:</span> 2011, 2012, 2013</div>
          <div className={classes.sectionSmall}><span className={classes.textBold}>Goucher College Dean’s List:</span> 2011, 2012, 2013</div>
          <h3 className={classes.subheader}>Skills</h3>
          <p>Strong writing and editing skills in a variety of genres, from ad copy to email blasts to extensive product collateral. Proficient in Axure RP, Quickbooks, Filemaker, Camtasia, Microsoft Word, Excel, PowerPoint and Outlook. Well-versed in Adobe Photoshop, Illustrator and InDesign. Adept understanding and application of social media tools. Highly adaptable to new tools and systems. Versatile and able to “switch hats” between a variety of audiences/internal stakeholders. Deadline-driven, detail-oriented, former Oxford Comma addict, team player.</p>
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Resume);
