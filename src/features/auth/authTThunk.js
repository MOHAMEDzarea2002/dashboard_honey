import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser } from '../../services/authServices'

export const authLogin = createAsyncThunk('auth/setUser',
  async ({ email, password }, thunk) => {
    try {
      const {user} = await loginUser(email, password)

      return user
    } catch (error) {
      return thunk.rejectWithValue(error.message)
    }
  }

)
