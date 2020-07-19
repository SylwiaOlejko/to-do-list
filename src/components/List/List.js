import React from 'react';
import styles from './List.scss';

import Hero from '../Hero/Hero';

import Column from '../Column/Column';

import PropTypes from 'prop-types';

import {settings} from '../../data/dataStore';

PropTypes.node.isRequired

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    
  }
  static defaultProps = {
    description: settings.defaultListDescription, 
  }
  render() {
    return (
      <section>
        <h2 className={styles.component}> Hakuna matata</h2>
      
      <main className={styles.component}>
        <h1 className={styles.title}>My first React list</h1>
        <Hero titleText={this.props.title} />
        
        <div className={styles.description}>
          {this.props.description}
          
        </div>
        <h2 className={styles.title}>{this.props.titleText}</h2>

        <Column title="Animals"/>
        <Column title="Plants"/>
        <Column title="Minerals"/>
       
      </main>
     
      </section>
    );
  }
}


  
export default List;