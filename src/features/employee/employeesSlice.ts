import { createSlice } from '@reduxjs/toolkit';
import { InitialStateEmployee } from './../../types';
import { employeesApi } from '../../app/services/empoyeesApi';
import { RootState } from '../../app/store';

const initialState: InitialStateEmployee = {
  employees: null,
}

const slice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(employeesApi.endpoints.getAllEmloyees.matchFulfilled, (state, action) => {
      state.employees = action.payload
    })
   
  }
})

export default slice.reducer

export const selectEmployees = (state: RootState) => state.employeesSlice