import {connect} from 'react-redux';
import Container from './Container';
import {

  getContainerString,
  countVisibleCards,
  countAllCards,
  createAction_changeContainerString,
} from '../../redux/searchContainerRedux';

const mapStateToProps = (children) => ({
  //props zawierający aktualną frazę wyszukiwania, pobraną ze stanu aplikacji
  searchContainer: getContainerString(children),
  //zawiera liczbę kart widocznych po przefiltrowaniu
  countVisible: countVisibleCards(children),
  //zawiera liczbe wszystkich kart
  countAll: countAllCards(children),
});

const mapDispatchToProps = (dispatch) => ({
  //dispatcher wysyłajacy akcję, która ma na celu zmianę containerString w stanie aplikacji
  changeContainerString: newSearchString => dispatch(createAction_changeContainerString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
