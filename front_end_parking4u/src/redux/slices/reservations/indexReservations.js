import { combineReducers } from "redux";

import { newReservationSlice } from "./newReservation";
import { execludeTimesReservationSlice } from "./execludeTimesReservation";
import { colorProcessReservationSlice } from "./colorProcessReservations";
import { getReservationsByIdUserSlice } from "./getReservationsByIdUserSlices";


export * from './newReservation';
export * from './execludeTimesReservation';
export * from './getReservationsByIdUserSlices';
export * from './colorProcessReservations';

export const ReservationsReducer = combineReducers({
    new: newReservationSlice.reducer,
    execludeTimes: execludeTimesReservationSlice.reducer,
    allById: getReservationsByIdUserSlice.reducer,
    color: colorProcessReservationSlice.reducer
});