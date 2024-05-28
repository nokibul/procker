/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
declare const server: import("http").Server<typeof IncomingMessage, typeof ServerResponse>;
export default server;
