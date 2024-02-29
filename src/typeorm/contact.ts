import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    subdistrict: string;

    @Column()
    district: string;

    @Column()
    province: string;

    @Column()
    portalcode: number;

    @Column()
    facebook: string;

    @Column()
    lineid: string;

    @Column()
    instagram: string;
}
