import { createSelector } from "@reduxjs/toolkit"; //reselect library is already included in this reduxjs toolkit. 


//input selectors
const selectDirectory = state => state.directory;

//output selectors
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);