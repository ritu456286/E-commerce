import { createSelector } from "@reduxjs/toolkit";

//input selector to select the currentUser from the store
const selectUSer = state => state.user;


//output selector 
export const selectCurrentUser = createSelector(
    [selectUSer],
    (user) => user.currentUser
);