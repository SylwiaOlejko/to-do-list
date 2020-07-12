import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Test from '../Test/Test';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <Test tekst="abc" liczba="1"/>
        <Test tekst="cde" liczba="3"/>
        <Test tekst="efg" liczba="4"/>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]} />
      </main>
    );
    
  }
}

export default App;