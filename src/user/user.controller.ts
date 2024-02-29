import { Body, Controller, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
import { create } from 'domain';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}
    
    @Get()
    getUserAll(): Promise<UserDTO[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.findById(Number(id));
    }

    @Post('create')
    createUser(@Body() createUserDto: UserDTO) {
        return this.userService.createUser(createUserDto);
    }

    @Patch('update/:id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: UserDTO) {
        return this.userService.updateUser(id, updateUserDto);
    }
}
