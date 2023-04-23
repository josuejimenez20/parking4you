import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorsChange: {
        login: true,
        bookButton: false,
        data: false,
        end: false
    }
};

export const colorProcessReservationSlice = createSlice({
    name: 'colorProcessReservationSlice',
    initialState,
    reducers: {
        changeToColors: (state, action) => {
            state.colorsChange = action.payload;
        },
    }
});



export const {
    changeToColors
} = colorProcessReservationSlice.actions;