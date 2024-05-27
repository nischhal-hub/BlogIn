import { ReactNode } from "react";


export type TFormFields = {
    title?: string;
    overview?: string;
    image?: any;
}

export interface ILoginForm  {
    email?: string;
    password:string;
}

export interface IStorageItem {
    id:string;
    name:string;
    avatar:string;
    role:string;
}

export type TchildrenProp = {
    children?: ReactNode;
}


// type Block = {
//     id?: string;
//     type?: 'header' | 'paragraph' | 'list' | 'image' | '';
//     data?: {
//         text?: string;
//         level??: number;
//     };
// };
