import { combineReducers } from "redux";

import { newReservationSlice } from "./newReservation";
import { execludeTimesReservationSlice } from "./execludeTimesReservation";


export * from './newReservation';
export * from './execludeTimesReservation';

export const ReservationsReducer = combineReducers({
    new: newReservationSlice.reducer,
    execludeTimes: execludeTimesReservationSlice.reducer
});