import {connect} from 'react-redux';
import Column from './Column';
import {connect} from 'react-redux';
import List from './List';
import getColumnsForColumn from '../../redux/columnRedux.js';
import createActionAddColumn from '../../redux/columnRedux.js';


export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

//ta funkcja dodaje propsy komponentu List, wykorzystując fragmenty stanu aplikacji z reduksowego magazynu
const mapStateToProps = (state, props) => {
  console.log(state, props);
  return ({
    cards: getCardsForColumn(state, props.id),
    

  }); 
};

//dodaje propsy komponentu, ale jej wartości nie są danymi ze stanu, ale junkcje wysyłające akdje do magazynu
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
