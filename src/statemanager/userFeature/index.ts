import { createSlice } from "@reduxjs/toolkit";
import IUserState from "../StatesTypes";
import {loginUserThunk} from './thunk';

interface loginDetails extends IUserState{
    username: string,
    password: string
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username:"",
        password:"",
        loading: "idle"
    } as loginDetails,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(loginUserThunk.fulfilled,(state,{payload})=>{
            state.loading = 'succeeded';
        }).addCase(loginUserThunk.pending,(state,action)=>{
            
        }).addCase(loginUserThunk.rejected,(state,action)=>{
            
        })
    },

})

export default userSlice;