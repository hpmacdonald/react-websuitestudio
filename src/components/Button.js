import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#fff',
      background: '#2c3e4e'
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className='custom--button' variant="contained" >
        <Link to="/projects" >
          projects &nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </Link>
      </Button>
    </div>
  );
}