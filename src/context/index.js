import React, { useReducer, createContext } from 'react';

const initialState = {
  sTerm: null,
  LIST_OF_ITEMS: [
    { id: 1, name: 'Tea' },
    { id: 2, name: 'Ice Tea' },
    { id: 3, name: 'Coffee' },
    { id: 4, name: 'Cold Coffee' },
    { id: 5, name: 'Ice Cream' },
    { id: 6, name: 'Ice Cube' },
    { id: 7, name: 'Sandwitch' },
    { id: 8, name: 'Pizza' },
    { id: 9, name: 'Burger' },
    { id: 10, name: 'Milkshakes' },
  ],
  matchingItems: [],
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'USER_ENTRY': {
      const searchTerm = action.payload;
      let matchingItems = [];
      state.LIST_OF_ITEMS.forEach((value) => {
        if (
          value.name
            .replace(/ +/g, '')
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          matchingItems.push(value);
        }
      });
      console.log('mI: ', matchingItems);
      return { ...state, sTerm: action.payload, matchingItems };
    }
  }
};

const Provider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
