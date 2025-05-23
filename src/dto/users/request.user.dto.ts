import { IsEmail, IsString, Length, Min } from "class-validator";

export class RequestUserDto {

    @IsString()
    @Length(3)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(6)
    password: string;

    @IsString()
    @Length(6)
    confirmPassword: string;
}