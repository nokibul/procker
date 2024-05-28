export declare const getProgressService: () => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const addProgressService: ({ userId, date, value }: {
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
export declare const getProgressByUserService: (userId: number) => Promise<{
    id: number;
    userId: number;
    date: Date;
    value: number;
    createdAt: Date;
    updatedAt: Date;
}[]>;
