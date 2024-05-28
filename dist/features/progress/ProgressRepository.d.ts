export declare const getProgressRepository: () => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const addProgressRepository: ({ userId, date, value }: {
    userId: number;
    date: string;
    value: number;
}) => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
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
