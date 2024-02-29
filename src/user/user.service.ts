import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { user as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRespository: Repository<UserEntity>,
    ) {}

    private users: UserDTO[] = [];

    findAll(): Promise<UserDTO[]>{
        return this.userRespository.find();
    }

    async findById(id: number): Promise<UserEntity>{
        const user = await this.userRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    createUser(createUserDto: UserDTO) {
        const newUser = this.userRespository.create(createUserDto);
        return this.userRespository.save(newUser);
    }

    async updateUser(id:number, updateUserDto: UserDTO) {
        return await this.userRespository.update(id, updateUserDto);
    }
}
