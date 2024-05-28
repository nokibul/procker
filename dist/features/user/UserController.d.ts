/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export declare const getAllUsersCtrl: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export declare const createOneUserCtrl: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export declare const getProgressByUser: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
