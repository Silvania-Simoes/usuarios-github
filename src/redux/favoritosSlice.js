import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'favoritos',
  initialState: {
    quantidade: 0,
  },
  reducers: {
    changeFavoritos(state, { payload }) {
      return {...state, quantidade: payload}
    }
  }
})

export const { changeFavoritos } = slice.actions

export const selectFavoritos = state => state.Favoritos

export default slice.reducer