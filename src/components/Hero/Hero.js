import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ titleText, imageSrc }) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default Hero;
