import { IncomingMessage } from "http";

export const getRequestBody: any = (req: IncomingMessage) => {
        let body = '';
        req.on('data', chunk => {
        body += chunk.toString();
        return JSON.parse(body);
    });
}
