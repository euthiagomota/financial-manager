import { IsDate, IsNumber, IsString } from "class-validator";
import { User } from "../../entities/user.entity";

export class ResponseRevenueDto {

    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsNumber()
    value: number;

    user: User;

    @IsDate()
    date: Date;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}