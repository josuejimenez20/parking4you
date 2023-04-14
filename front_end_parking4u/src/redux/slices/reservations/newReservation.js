import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: null,
    reservationData: {},
    preReservationData: {}
};

export const newReservationSlice = createSlice({
    name: 'newReservationSlice',
    initialState,
    reducers: {
        fetchNewReservation: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchNewReservationSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.reservationData = action.payload;
        },
        fetchReservationFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = null;
        },
        fetchPreReservation: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = null;
            state.preReservationData = action.payload;
        },
    }
});

export const {
    fetchNewReservation,
    fetchNewReservationSuccess,
    fetchReservationFailure,
    fetchPreReservation
} = newReservationSlice.actions;