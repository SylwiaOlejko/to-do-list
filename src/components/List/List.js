import React from 'react';

import styles from './List.scss';

import Hero from '../Hero/Hero';

import PropTypes from 'prop-types';

import Column from '../Column/Column';

PropTypes.node.isRequired

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section>
        <h2 className={styles.component}> Hakuna matata</h2>
      
      <main className={styles.component}>
        <h1 className={styles.title}>My first React list</h1>
        <Hero titleText={this.props.title} />
        
        <div className={styles.description}>
          {this.props.children}
        </div>
        <h2 className={styles.title}>{this.props.titleText}</h2>
    
      <table className={styles.component}>

        <div className={styles.component}>
        <Column titleText={this.props.title}/>
        <tr>
        <td className={styles.column}> Animals</td>
        <td className={styles.column}> Plants</td>
        <td className={styles.column}> Minerals</td>
       
        </tr>
         </div>
      </table>
        
      </main>
     
      </section>
    );
  }
}


  
export default List;