import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import homepageReducer from './reducers/homepage.reducer';
 
export const store = configureStore({
    reducer: {
        homepage: homepageReducer
      },
    middleware: [thunk, logger],
})

export type RootState = ReturnType<typeof store.getState>;