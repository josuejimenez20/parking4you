import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    error: null,
    success: null,
    allReservations: []
};

export const getAllReservationsSlice = createSlice({
    name: 'getAllReservationsSlice',
    initialState,
    reducers: {
        fetchgetAllReservationsSlice: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchgetAllReservationsSliceSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.allReservations = action.payload;
        },
        fetchgetAllReservationsSliceFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = null;
        },
    }
});

export const {
    fetchgetAllReservationsSlice,
    fetchgetAllReservationsSliceSuccess,
    fetchgetAllReservationsSliceFailure,
} = getAllReservationsSlice.actions;