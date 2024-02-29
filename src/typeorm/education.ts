import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class education {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    university: string;

    @Column()
    userid: number;
}