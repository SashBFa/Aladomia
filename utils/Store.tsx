import React, { useReducer, createContext, Dispatch } from "react";

interface cartItemsProps {
  name: string;
  slug: string;
  countInStock: number;
  quantity: number;
}

interface stateProps {
  cart: {
    cartItems: cartItemsProps[];
  };
}

interface actionProps {
  type: string;
  payload: any;
}

interface IContextProps {
  state: stateProps;
  dispatch: Dispatch<actionProps>;
}

interface storeProviderProps {
  children: JSX.Element;
}

interface existItemProps {
  name: string;
  slug: string;
}

export const Store = createContext({} as IContextProps);

const initialState: stateProps = {
  cart: { cartItems: [] },
};

const reducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: existItemProps) => item.slug === newItem.slug
      );
      //console.log(state.cart.cartItems);

      const cartItems = existItem
        ? state.cart.cartItems.map((item: existItemProps) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};

export function StoreProvider({ children }: storeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
