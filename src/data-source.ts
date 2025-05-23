import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import dotenv from 'dotenv';
import { Revenue } from "./entities/revenue.entity";
import { Expense } from "./entities/expense.entity";

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        User,
        Revenue,
        Expense
    ],
    synchronize: true,
    logging: true,
});