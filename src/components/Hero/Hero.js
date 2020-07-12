import React from 'react';

import styles from './App.scss';
import { ProgressPlugin } from 'webpack';


<header>
< main className = {styles.component}  >
    <img src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></img>
    <h2 className = {styles.subtitle}> Things to do </h2>
    <h2>{ProgressPlugin.titleText}</h2>
    
    <List title={['Things to do ', <sup>soon!</sup>]}>
        <p>I'm planning on doing all these things sooner, rather than later!</p>
    </List>
</main>
</header>


class Hero extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  render() {
    Hero.propTypes = {
        titleText: PropTypes.node,
      };
    }
