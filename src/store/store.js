
import { configureStore } from '@reduxjs/toolkit';
import prisonReducer from './prisonSlice';

export default configureStore({
  reducer: {
    prison: prisonReducer
  }
});
