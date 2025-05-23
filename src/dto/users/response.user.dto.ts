import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class ResponseUserDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsDate()
    createdAt: Date;

}