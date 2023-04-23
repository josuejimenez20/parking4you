import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: null,
    userReservations: []
};

export const getReservationsByIdUserSlice = createSlice({
    name: 'getReservationsByIdUserSlice',
    initialState,
    reducers: {
        fetchgetReservationsByIdUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchgetReservationsByIdUserSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.userReservations = action.payload;
        },
        fetchgetReservationsByIdUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = null;
        },
    }
});

export const {
    fetchgetReservationsByIdUser,
    fetchgetReservationsByIdUserSuccess,
    fetchgetReservationsByIdUserFailure,
} = getReservationsByIdUserSlice.actions;