export declare const createOneUserService: ({ name, email }: {
    name: string;
    email: string;
}) => Promise<{
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}>;
