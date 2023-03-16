import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthenticationService from '../../services/auth/auth';
import authTypes from '../../services/types/auth.types';

const service = new AuthenticationService();

const loginUserThunk = createAsyncThunk('feature/login/thunk',
    async (body: authTypes) => {
        try {
            return await service.login(body);
        } catch (error) {
            return null;
        }
    });
    
const createUserThunk = createAsyncThunk('feature/signup/thunk',
    async (body: authTypes) => {
        try {
            return await service.signup(body);
        } catch (error) {
            return null;
        }        
    });

export { loginUserThunk, createUserThunk }
