
// selectors
//getSearchString musi zwracać wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji.
export const getSearchString = ({searchString}) => searchString;
// countVisibleCards– Musi ona wyszukać karty pasujące do frazy searchString, a następnie je policzyć
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
// countAllCards–Musi ona wyszukać karty pasujące do frazy searchString, a następnie je policzyć, oraz ma filtrować karty za pomocą filter
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
       
  }
}