import { configureStore } from '@reduxjs/toolkit'
import { Datareducer } from './Slice'

export const store = configureStore({
   reducer: Datareducer
})
