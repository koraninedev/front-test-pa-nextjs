import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserAll(): Promise<UserDTO[]>;
    getUserById(id: string): Promise<import("../typeorm").user>;
    createUser(createUserDto: UserDTO): Promise<import("../typeorm").user>;
    updateUser(id: number, updateUserDto: UserDTO): Promise<import("typeorm").UpdateResult>;
}
