import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { UsersReducer } from '../slices/users/indexUser';
import { ReservationsReducer } from '../slices/reservations/indexReservations';

const combineReducer = combineReducers({
    users: UsersReducer,
    reservations: ReservationsReducer,
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})