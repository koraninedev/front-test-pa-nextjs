import { UserDTO } from 'src/dto/user.dto';
import { user as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRespository;
    constructor(userRespository: Repository<UserEntity>);
    private users;
    findAll(): Promise<UserDTO[]>;
    findById(id: number): Promise<UserEntity>;
    createUser(createUserDto: UserDTO): Promise<UserEntity>;
    updateUser(id: number, updateUserDto: UserDTO): Promise<import("typeorm").UpdateResult>;
}
