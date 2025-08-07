import { createContext, useContext, useReducer } from "react";

const totalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <totalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </totalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(totalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
