import { Gender } from '../enums/gender';

export interface myForm {
    name: string;
    email: string;
    phone: string;
    gender: Gender;
    facebookURL: string;
    note?: string;
}
