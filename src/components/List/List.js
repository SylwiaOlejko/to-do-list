import React from 'react';

import styles from './List.scss';

import PropTypes from 'prop-types'
const Hero = props => (

class List extends React.Component {
  render() {

    <section>
        <h2 className={styles.component}> Hakuna matata</h2>
    </section>

    return () => {

      <main className={styles.component}>
        <h1 className={styles.title}>My first React list</h1>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <h2 className={styles.title}>{props.titleText}</h2>
      
     
      </main>
    };
  }
}
)
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
export default List;