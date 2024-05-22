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
    image: File;
}

export interface LoginForm  {
    email: string;
    password:string;
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
