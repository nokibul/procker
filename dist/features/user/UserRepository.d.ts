export declare const getProgressRepository: () => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const createOneUserRepository: ({ name, email }: {
    name: string;
    email: string;
}) => Promise<{
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getProgressByUserRepository: (userId: number) => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
