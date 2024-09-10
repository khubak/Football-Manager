import {configureStore} from '@reduxjs/toolkit'
import teamsReducer from './slices/teams'

export default configureStore({
    reducer: {
        teams: teamsReducer
    },
})