import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from '../actions/clear';
import { RootState } from '../reducers';
// import type { LoginResponse } from '../api/login';

export type Auth = {
  isLogin: boolean;
};

const initialState: Auth = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear: () => initialState,
    // logined: (state, action: PayloadAction<LoginResponse>) => {
    //   state.isLogin = true;
    //   state.needOriginalPassword = action.payload.need_original_password;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(clear, () => initialState);
  },
});

const stateSelector = (state: RootState) => state.auth;

export const selectors = {
  authSelector: stateSelector,
};

export const { actions } = authSlice;
export default authSlice.reducer;
