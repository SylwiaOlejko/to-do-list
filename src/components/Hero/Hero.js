import React from 'react';

import styles from './Hero.scss';


class Hero extends React.Component{
    render (){
        return (
<header>
    
< main className = {styles.component}  >
    <img src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></img>
    <h2 className = {styles.subtitle}> Things to do </h2>
    <h2>{this.props.titleText}</h2>
    
    
</main>
</header>
        )
}
}
export default Hero;