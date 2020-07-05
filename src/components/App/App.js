import React from 'react';

import styles from './App.scss';

import list from './List.js';


class App extends React.Component {
  render() {
    return (
      <div id="app">
      < main className = {styles.component}  >
      < List/>
        <h1 className = {styles.title}>My first React  </h1>
        <h2 className = {styles.subtitle}>Hello World!!!</h2>
        
      </main>
      
      </div>
    )
  }
}

export default App;
