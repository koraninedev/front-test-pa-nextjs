import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill: string;

    @Column()
    percent: number;

    @Column()
    userid: number;
}