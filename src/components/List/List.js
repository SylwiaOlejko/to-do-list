import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Card from '../Card/Card';
//import Creator from '../Creator/creator';


PropTypes.node.isRequired;


class List extends React.Component {
    

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.string
    }

    static defaultProps = {
      description: settings.defaultListDescription,
      description: settings.defaultListDescription, 
      description: settings.defaultListDescription,
    }

    

    render() {
      const {title, image, description, columns} = this.props;
      return (
        <section className={styles.component}>
        
          <Hero titleText={title} image={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          
          
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
            
        </section>
      );
    }
}
export default List;