import { ReactNode } from "react";


export type FormFields = {
    title?: string;
    overview?: string;
    image?: any;
}

export interface LoginForm  {
    email?: string;
    password:string;
}
export interface RegisterForm {
    name:string;
    email:string;
    password:string;
    phoneNumber:string;
    role:string;
    avatar:any;
}
export interface StorageItem {
    id:string;
    name:string;
    avatar:string;
    role:string;
}

export interface PostData {
    formData: FormData;
    authId:string|undefined;
}
export type childrenProp = {
    children?: ReactNode;
}

//*Login data type
export type LoginData = {
    email: string;
    password: string;
}

// type Block = {
//     id?: string;
//     type?: 'header' | 'paragraph' | 'list' | 'image' | '';
//     data?: {
//         text?: string;
//         level??: number;
//     };
// };
