import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'userGitHub',
  initialState: {
    user: []
  },
  reducers: {
    changeuserGitHub(state, { payload }) {
      return {...state, user: payload}
    }
  }
})

export const { changeuserGitHub } = slice.actions

export const selectuserGitHub = state => state.userGitHub

export default slice.reducer