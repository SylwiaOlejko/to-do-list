import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
class Column extends React.Component{
    
    state = {
        cards: this.props.cards || [],
      }

      addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                icon: 'list-alt'
               
              }
            ]
          }
        ));
      }
    
    render() {
        return (
            <main className={styles.component}>

                <h3 className={styles.title}>
                    <span className={styles.icon}>
                    <Icon name={this.props.icon}/>

                    </span>
                    {this.props.title}
                </h3>

                
                {this.state.cards.map(({key, ...cardProps}) => (
                    <Card key={key} {...cardProps} />
                ))}
                <div className={styles.creator}>
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                </div>
       
            </main>
        )
       
};
}
export default Column;