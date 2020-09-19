import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
    static propTypes = {
      children: PropTypes.string,
    }
    
    render() {
      
      return(
        <div className = {styles.component}>
        </div>
      );
    }
}
export default Container;