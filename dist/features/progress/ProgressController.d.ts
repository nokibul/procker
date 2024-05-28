/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export declare const getProgress: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export declare const addProgress: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export declare const getProgressByUser: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
