import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterSlice from './counter';
import privacySlice from './privacy';

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
});

export default counterStore;



// const INITIAL_VALUE = {
//     counter: 0,
//     privacy: false

// }
// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if (action.type === "INCREMENT") {
//         return { ...store, counter: store.counter + 1 }
//     } else if (action.type === "DECREMENT") {
//         return { ...store, counter: store.counter - 1 }
//     } else if (action.type === "ADDITION") {
//         return { ...store, counter: store.counter + Number(action.payload.number) }
//     } else if (action.type === "SUBTRACTION") {
//         return { ...store, counter: store.counter - Number(action.payload.number) }
//     } else if (action.type === "PRIVACY_TOGGLE") {
//         return { ...store, privacy: !store.privacy }
//     }
//     return store;
// }