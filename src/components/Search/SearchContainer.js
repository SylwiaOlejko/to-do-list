import {connect} from 'react-redux';
import Search from './Search';
import {
  
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  //props zawierający aktualną frazę wyszukiwania, pobraną ze stanu aplikacji
  searchString: getSearchString(state),
  //zawiera liczbę kart widocznych po przefiltrowaniu
  countVisible: countVisibleCards(state),
  //zawiera liczbe wszystkich kart
  countAll: countAllCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  //dispatcher wysyłajacy akcję, która ma na celu zmianę searchString w stanie aplikacji
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
