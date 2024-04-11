import {createSlice} from '@reduxjs/toolkit'

const initialState = {

    resumeId : localStorage.getItem('ResumeId') || null,
    userProfile : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.resumeId = action.payload.resumeId || state.resumeId,
            state.userProfile = action.payload.userRole ||state.userProfile
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;