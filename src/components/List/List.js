import React from 'react';

import styles from './List.scss';



import Hero from '../Hero/Hero';

class List extends React.Component {
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
      
     
      </main>
      </section>
    );
  }
}


  
export default List;