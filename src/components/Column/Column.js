import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component{
    
    state = {
      cards: this.props.cards || [],
    }
    
    render() {

      const {title, icon} = this.props;
      const {cards} = this.state;

      console.log(cards);
      return (
        <section>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={this.props.icon}/>

            </span>
            {this.props.title}
          </h3>

          {/* <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div> */}


          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>

        </section>
      )
       
};
}
export default Column;