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


// YOU TOGGLE FRUIT SELECTOR. IT IS "TRUE" THAT YOU SELECTED FRUIT TOGGLE, 
// BUT IT EVALUES TO FALSE AS THE CHECKED SETTING IS FALSE, WHICH THEN TURNS OFF THE VEG TOGGLE
// SAME BEHAVIOR IF YOU WOULD BE CHECKING ACTION.SHOWVEG IN REDUCER

  const handleChange = toggledSwitch => props.dispatch({ type: `TOGGLE_${toggledSwitch.target.value}` });

  // const handleChange = toggledSwitch => props.dispatch({ type: 'TOGGLE_SHOW_FRUIT', showFruit: true });

  return (
    <FormGroup className={classes.chipBar} row>
      <FormControlLabel
        control={
          <Switch
            checked={props.showFruit}
            onChange={handleChange}
            value="SHOW_FRUIT"
            color="primary"
          />
        }
        label={'Fruits'}
      />
      <FormControlLabel
        control={
          <Switch
            checked={props.showVeg}
            onChange={handleChange}
            value="SHOW_VEG"
            color="primary"
          />
        }
        label={'Vegetables'}
      />
    </FormGroup>
  );
}