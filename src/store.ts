import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import  productsReducer from "./features/productSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer
    },
    
})


// This takes the store.getState and returns it to generate (infer) the types of the state
export type RootState = ReturnType<typeof store.getState>;
//This generates the type of actions from the store.
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;