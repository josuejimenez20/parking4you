import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    execludeTimesData: []
};

export const execludeTimesReservationSlice = createSlice({
    name: 'execludeTimesReservationSlice',
    initialState,
    reducers: {
        fetchExecludeTimesReservation: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchExecludeTimesReservationSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.execludeTimesData = action.payload;
        },
        fetchExecludeTimesReservationFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchExecludeTimesReservation,
    fetchExecludeTimesReservationSuccess,
    fetchExecludeTimesReservationFailure
} = execludeTimesReservationSlice.actions;