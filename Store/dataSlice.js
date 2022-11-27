import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const dataSlice = createSlice({
    name: 'formdata',
    initialState,
    reducers: {
        add(state, actions) {
            state.push(actions.payload);
        },
        remove(state, actions) {
            return state.filter((data) => data.id !== actions.payload);
        },
    },
});
export const { add, remove } = dataSlice.actions;
export default dataSlice.reducer;
