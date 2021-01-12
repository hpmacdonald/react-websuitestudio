import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#149a80',
      background: '#fcfdfd',
    },
  },
}));

export default function GitHubButton() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Button href='https://github.com/hpmacdonald' variant="contained" >
          GitHub &nbsp;<i class="fab fa-github"></i>
      </Button>
    </div>
  );
}