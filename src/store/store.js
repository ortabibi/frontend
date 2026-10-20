import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app.slice.js'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})
