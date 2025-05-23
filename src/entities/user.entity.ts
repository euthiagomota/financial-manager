import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

}