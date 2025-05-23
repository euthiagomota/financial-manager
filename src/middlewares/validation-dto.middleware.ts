import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, RequestHandler, Response } from "express";

export function validateDto(dtoClass: any): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        const instance = plainToInstance(dtoClass, req.body);
        const errors = await validate(instance, { whitelist: true, forbidNonWhitelisted: true });

        if (errors.length > 0) {
            res.status(400).json({
                message: 'Validation failed',
                errors: errors.map(err => ({
                    property: err.property,
                    constraints: err.constraints
                }))
            });
            return;
        }

        req.body = instance;
        next();
    };
}