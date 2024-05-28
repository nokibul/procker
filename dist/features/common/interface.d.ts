/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
type RouteHandler = (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export interface RouteMap {
    [path: string]: {
        [method: string]: RouteHandler;
    };
}
export {};
