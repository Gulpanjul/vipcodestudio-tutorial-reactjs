import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const AddToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(AddToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(AddToCart({ id: 1, qty: 20 }));
store.dispatch(AddToCart({ id: 2, qty: 10 }));

store.dispatch(login());
