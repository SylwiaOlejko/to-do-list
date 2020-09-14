// selectors 
//getSearchString musi zwracać wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji.
export const getSearchString = ({cards}, listId) => cards.filter(searchString=> card.listId == listId);// eslint-disable-line

// countVisibleCards– Musi ona wyszukać karty pasujące do frazy searchString, a następnie je policzyć

export const countVisibleCards = ({cards}) => cards.filter(searchString => new RegExp(searchString, 'i').test(card.title)).length;// eslint-disable-line
 

// countAllCards–Musi ona wyszukać karty pasujące do frazy searchString, a następnie je policzyć, oraz ma filtrować karty za pomocą filter
export const countAllCards = ({cards}) => cards.length;// eslint-disable-line

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
