import { 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from "typeorm";
import { User } from "./user.entity";

@Entity('expenses')
export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('decimal', { precision: 10, scale: 2 })
    value: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ nullable: false })
    date: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}