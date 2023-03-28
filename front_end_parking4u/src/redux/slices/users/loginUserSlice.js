import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    userData: {}
};

export const loginUserSlice = createSlice({
    name: 'loginUserSlice',
    initialState,
    reducers: {
        fetchLoginUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchLoginUserSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.userData = action.payload;
        },
        fetchLoginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchLoginUser,
    fetchLoginUserSuccess,
    fetchLoginFailure
} = loginUserSlice.actions;