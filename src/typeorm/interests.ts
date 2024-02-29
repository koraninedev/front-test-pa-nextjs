import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class interests {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    interest: string;

    @Column()
    userid: number;
}