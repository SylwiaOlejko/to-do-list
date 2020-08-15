import React from 'react';
import styles from './App.scss';
import List from '../ListContainer.js/List';
//import Test from '../Test/Test';
import PropTypes from 'prop-lists';

class App extends React.Component {

  static propTypes = {
    title: PropTypes.array,
    subtitle: PropTypes.array,
  }

  render() {
    const {title, subtitle} = this.lists;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        
        {/*<List {...listData} />*/}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;