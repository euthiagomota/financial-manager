import { IsDate, IsNumber, IsString } from "class-validator";

export class RequestRevenueDto {

    @IsString()
    title: string;

    @IsNumber()
    value: number;

    @IsDate()
    date: Date;
}