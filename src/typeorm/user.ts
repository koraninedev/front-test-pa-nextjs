import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    nickname: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    position: string;

    @Column()
    nationality: string;

    @Column()
    telephonenumber: number;

    @Column()
    startingdate: Date;
}
