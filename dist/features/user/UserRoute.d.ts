/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export declare const routeHandler: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
