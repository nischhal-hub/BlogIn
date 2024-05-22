import { ReactNode } from "react";

export type ItemProps = {
    id: string;
    title: string;
    image: string;
    authorName: string;
    createdAt: string;
}

export type FormFields = {
    title: string;
    overview: string;
    image: any;
}

export interface LoginForm  {
    email: string;
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
export type childrenProp = {
    children: ReactNode;
}
// type Block = {
//     id: string;
//     type: 'header' | 'paragraph' | 'list' | 'image' | '';
//     data: {
//         text: string;
//         level?: number;
//     };
// };
