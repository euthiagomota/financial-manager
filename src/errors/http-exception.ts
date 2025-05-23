import { HttpStatusCode } from "./enum/http-status-code";

export class HttpException extends Error {

    public readonly statusCode: HttpStatusCode;
    public readonly message: string;

    constructor(message: string, statusCode: HttpStatusCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}