import React from "react";
import Chip from '@material-ui/core/Chip';
import { Typography } from "@material-ui/core";

const ChipBar = (props) => { 
  return (
    <>
      <Typography component="div" style={{paddingBottom: '10px'}}>
        <Chip label={props.season} />
        <Chip label="Vegetables" onDelete={props.onDelete} />
        <Chip label="Fruits" onDelete={props.onDelete} />
      </Typography>
    </>
  );
};

export default ChipBar;
