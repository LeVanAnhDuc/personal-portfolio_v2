import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

interface IInitialStateLogin {
    nameUser: string;
}

const initialState: IInitialStateLogin = {
    nameUser: '',
};
const nameUser = localStorage.getItem('nameUser');

if (nameUser) {
    initialState.nameUser = JSON.parse(nameUser);
}

export const contactSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsContact: (state, action: PayloadAction<string>) => {
            state.nameUser = action.payload;
            localStorage.setItem('nameUser', JSON.stringify(action.payload));
        },
    },
});

export const { setIsContact } = contactSlice.actions;

export const selectnameUser = (state: RootState) => state.contact.nameUser;

export default contactSlice.reducer;
