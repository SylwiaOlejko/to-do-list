import React from 'react';

import styles from './List.scss';



class App extends React.Component {
  render() {
    return (
      <div id="List">
      < main className = {styles.component}>
        <h1 className = {styles.title}>My first React  </h1>
        <h2 className = {styles.subtitle}>Hello!!!</h2>
      </main>
      </div>
    )
  }
}

export default List;
