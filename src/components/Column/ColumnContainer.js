import {connect} from 'react-redux';
import Column from './Column';

export const getColumnsForColumn = ({columns}, columnId) => columns.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    columns: getColumnsForColumn(state, props.id),
    

  }); 
};

export default connect(mapStateToProps)(Column);