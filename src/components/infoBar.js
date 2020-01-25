import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chipBar: {
    marginBottom: '20px'
  },
  winter: {
    backgroundColor: '#C4FAF8',
    margin: '10px 20px 10px 0'
  },
  spring: {
    backgroundColor: '#FBE4FF',
    margin: '10px 20px 10px 0'
  },
  summer: {
    backgroundColor: '#F9CC6C',
    margin: '10px 20px 10px 0'
  },
  fall: {
    backgroundColor: '#EBE6CA',
    margin: '10px 20px 10px 0'
  }
});

export default function InfoBar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    displayFruit: true,
    displayVeg: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup className={classes.chipBar} row>
      <FormControlLabel
        control={
          <Switch
            checked={state.displayFruit}
            onChange={handleChange('displayFruit')}
            value="displayFruit"
            color="primary"
          />
        }
        label={'Fruits'}
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.displayVeg}
            onChange={handleChange('displayVeg')}
            value="displayVeg"
            color="primary"
          />
        }
        label={'Vegetables'}
      />
    </FormGroup>
  );
}