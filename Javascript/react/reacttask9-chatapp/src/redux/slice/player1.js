import { createSlice } from '@reduxjs/toolkit'
const state = { results: [] }

export const Player1Slice = createSlice({
    name: 'player1',
    initialState: state,
    reducers: {
        setPlayer1: (state, action) => {
            state.results.push(action.payload);
        },

    }
})

export const { setPlayer1 } = Player1Slice.actions;

export const SelectPlayer1 = store => store.player1.results;

export default Player1Slice.reducer;