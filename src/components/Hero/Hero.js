import React from 'react';

import styles from './Hero.scss';

import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';

PropTypes.node.isRequired

const Hero = (props) => {

return (
<header>
    <h1 className={styles.title}></h1>
    
    < main className = {styles.component}>
       
        <img src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></img>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        
    </main>
</header>
        )

}
export default Hero;