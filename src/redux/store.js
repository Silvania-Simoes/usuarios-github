import { configureStore } from '@reduxjs/toolkit';
import favoritosReducer from './favoritosSlice';
import userGitHubReducer from './userGitHubSlice';

export default configureStore({
  reducer:{
    userGitHub: userGitHubReducer,
    favoritos: favoritosReducer,
  }
})