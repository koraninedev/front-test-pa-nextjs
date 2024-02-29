import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class experience {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    experience: string;

    @Column()
    userid: number;
}