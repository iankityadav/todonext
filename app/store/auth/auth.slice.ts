import { User } from "@/app/models/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AuthState = {
    token: string;
    user?: User;
    isAuth: boolean;
}

const initialState: AuthState = {
    token: "",
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        logIn: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            state.isAuth = true
        },
        logOut: (state) => {
            state.token = ""
            state.isAuth = false
            state.user = undefined
        }
    }
})

export const { setToken, logIn, logOut } = authSlice.actions
export const authSliceReducer = authSlice.reducer