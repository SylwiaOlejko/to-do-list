import React from 'react';

import styles from './Card.scss';

class Card extends React.Component {



     
    render() {
    //dodanie restrukturyzacji propsa title//
        const {title}= this.props;
        console.log(title);
    return (
        <div className={styles.component}> {this.props.title},
            
        </div> 
        
    );
    }
};



export default Card; 