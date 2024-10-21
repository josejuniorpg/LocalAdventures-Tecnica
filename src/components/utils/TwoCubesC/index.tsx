import React from 'react';
import classes from './TwoCubesC.module.css';

export const TwoCubesC = () => (
  <div className={classes.cubeContainer}>
    <div className={classes.bigCube}></div>
    <div className={classes.smallCube}>
      <div className={classes.yellowCube}></div>
      <div className={classes.orangeCube}></div>
      <div className={classes.redCube}>
        <div className={classes.plusSign}></div>
      </div>
      <div className={classes.darkOrangeCube}></div>
    </div>
  </div>
);