import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExampleState {
  value: string
}

const initialState: ExampleState = {
  value: 'Hardcoded Value'
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload
    }
  }
})

export const { setValue } = exampleSlice.actions
export default exampleSlice.reducer
