import React from 'react';
import './Time.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CommentIcon from '@material-ui/icons/Comment';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import BarChartTwoToneIcon from '@material-ui/icons/BarChartTwoTone';
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper : {
    margin: '0px'
  }
  ,
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const theme = createMuiTheme({
    palette: {
     
      secondary: {
        // This is green.A700 as hex.
        main: 'rgb(63, 226, 194)',
      },
    },
  });

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
      <div style={{ padding: '10%' }}>
          <ThemeProvider theme={theme}>          
          <h1 style={{color: 'black'}}>
              Our Process
          </h1>

          <Button color="primary"></Button>
          <Button color="primary"></Button>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        
        <TimelineSeparator>
          <TimelineDot>
            <LocalCafeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>

            <Typography className='paper--text--cont'><p>First thing's first</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            < CommentIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>
           
            <Typography className='paper--text--cont'><p>We'll discuss your functionality, and overall design</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            < BorderColorIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>
           
            <Typography className='paper--text--cont'><p>The creative process begins</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeTwoToneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>
           
            <Typography className='paper--text--cont'><p>Eat, sleep, code, repeat</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <BarChartTwoToneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>
           
            <Typography className='paper--text--cont'><p>Initial launch, and testing phase begins</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <CloudDownloadTwoToneIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
       
        </TimelineSeparator>
        <TimelineContent>
          <Paper data-aos="fade-in" elevation={3} className={classes.paper}>
            <Typography className='paper--text--cont'><p>We're ready for launch!</p></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          <EmojiEmotionsTwoToneIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>

      
      
      
      
    </Timeline>
    </ThemeProvider>
    
    </div>
    
  );
}