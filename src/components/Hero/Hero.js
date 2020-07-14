import React from 'react';



import styles from './Hero.scss';

import PropTypes from 'prop-types';

PropTypes.node.isRequired

class Hero extends React.Component{

    static propTypes = {
        titleText: PropTypes.node,
      };

    render (){
        return (
<header>
    <h1 className={styles.title}></h1>
    < main className = {styles.component}>
       
        <img src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></img>
        <h2 className = {styles.title}> Things to do </h2> 
        
    </main>
</header>
        )
}
}
export default Hero;