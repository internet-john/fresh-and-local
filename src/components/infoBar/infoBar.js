import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import { toggleProduceFilter } from '../../redux/actions';

const useStyles = makeStyles({
  chipBar: {
    marginBottom: '20px',
  },
  winter: {
    backgroundColor: '#C4FAF8',
    margin: '10px 20px 10px 0',
  },
  spring: {
    backgroundColor: '#FBE4FF',
    margin: '10px 20px 10px 0',
  },
  summer: {
    backgroundColor: '#F9CC6C',
    margin: '10px 20px 10px 0',
  },
  fall: {
    backgroundColor: '#EBE6CA',
    margin: '10px 20px 10px 0',
  },
});

const InfoBar = () => {
  const classes = useStyles();
  const { showFruit, showVeg } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = toggledSwitch =>
    dispatch(
      toggleProduceFilter(
        toggledSwitch.target.value,
        toggledSwitch.target.checked
      )
    );
  return (
    <FormGroup
      className={classes.chipBar}
      row
      data-automation-id="freshlocal__infobar"
    >
      <FormControlLabel
        control={
          <Switch
            checked={showFruit}
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
            checked={showVeg}
            onChange={handleChange}
            value="SHOW_VEG"
            color="primary"
          />
        }
        label={'Vegetables'}
      />
    </FormGroup>
  );
};

export default InfoBar;
