import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class guild {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    guild: string;

    @Column()
    userid: number;
}