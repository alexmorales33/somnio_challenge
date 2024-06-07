import { combineReducers, configureStore } from '@reduxjs/toolkit'
import exampleReducer from './reducers/exampleReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    example: exampleReducer,
    user: userReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
