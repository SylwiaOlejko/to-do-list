import React from 'react';
import styles from './List.scss';

import Hero from '../Hero/Hero';

import Column from '../Column/Column';

import PropTypes from 'prop-types';

import {settings} from '../../data/dataStore';

//import Creator from '../Creator/creator';

PropTypes.node.isRequired;

class List extends React.Component {
    state = {
      columns: this.prop.columns || [],
    }
  


    
  static defaultProps = {
    description: settings.defaultListDescription, 
  }

  /*addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }*/

  render() {
    const {title, image, description} = this.columns;

     
    return (
      <section>
        <h2 className={styles.component}> Hakuna matata</h2>
      
        <main className={styles.component}>
          <h1 className={styles.title}>My first React list</h1>
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <h2 className={styles.title}>{this.props.titleText}</h2>
        
        
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}

          {/*<div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>*/}
       
       
        </main>
     
      </section>
    );
  }
}


  
export default List;