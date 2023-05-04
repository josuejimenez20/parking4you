import { combineReducers } from "redux";

import { newReservationSlice } from "./newReservation";
import { execludeTimesReservationSlice } from "./execludeTimesReservation";
import { getReservationsByIdUserSlice } from "./getReservationsByIdUserSlices";
import { getAllReservationsSlice } from "./getAllReservations";
import { colorProcessReservationSlice } from "./colorProcessReservations";


export * from './newReservation';
export * from './execludeTimesReservation';
export * from './getReservationsByIdUserSlices';
export * from './getAllReservations';
export * from './colorProcessReservations';

export const ReservationsReducer = combineReducers({
    new: newReservationSlice.reducer,
    execludeTimes: execludeTimesReservationSlice.reducer,
    allById: getReservationsByIdUserSlice.reducer,
    all: getAllReservationsSlice.reducer,
    color: colorProcessReservationSlice.reducer
});