import { createSlice } from '@reduxjs/toolkit'
import { fetchStatus } from './statusThunk'

const initialState = {
  statusOrders: null,
  pending: false,
  error: null,
};
const StatusSlice = createSlice({
  name: 'statusOrders',
  initialState,
  reducers: {

  }
  ,
  extraReducers: (build) => {
    build.addCase(fetchStatus.pending, (state) => {
      state.pending = true
      state.error = null
    }).addCase(fetchStatus.fulfilled, (state, action) => {
      state.pending = false
      state.statusOrders = action.payload
      state.error = false
    })
  }
}
)
export default StatusSlice.reducer
