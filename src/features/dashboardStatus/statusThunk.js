import { getDashboardStatus } from '../../services/statusDashboardServices';
import { createAsyncThunk } from '@reduxjs/toolkit';

export  const fetchStatus = createAsyncThunk('dashboard/fetchStatus',
  async(_,thunkAPi)=>{
    try{
      const stats = await getDashboardStatus()

      return stats.stats;
    }catch(error){
      thunkAPi.rejectWithValue(error.response?.data)
    }
  }
);
