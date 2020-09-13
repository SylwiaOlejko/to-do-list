import shortid from 'shortid';

// wykorzystujemy do przefiltrowania kolumn zawierających odpowiedni parametr listId
export const getColumnsForList = ({cards}, listId) => cards.filter(card => card.listId == listId);

// zapisujemy nazwę właściwości stanu, na której tworzymy akcje
const reducerName = 'cards';
//służy do zmiany nazwy akcji na dłuższy identyfikator, składający się z trzech członków

const createActionName = name => `app/${reducerName}/${name}`;

//dzieki temu, nazwa akcji zapisana w stałej ADD_COLUMN przyjmuje wartość 'app/columns/ADD_COLUMN'
export const ADD_CARD = createActionName('ADD_CARD');

// kreator akcji,w payload znajduja sie wszystkie parametry potrzebne do stworzenia nowej kolumny
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {

  //sprawdzamy tu typ akcji, jeśli nie będzie pasował do żadnego wyrażenia po "case", to wykona sie blok kodu rozpoczynający się od "default", czyli zwrócony zostanie argument "statePart"
  switch (action.type) {
    //akcja tego typu, zwraca nową tablicę, w której znajdzie sie rozpakowany dotychczas stan, oraz dodany nowy obiekt
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}