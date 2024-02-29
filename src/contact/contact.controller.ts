import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDTO } from 'src/dto/contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private userService: ContactService) {}

    @Get()
    getUserAll(): Promise<ContactDTO[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.findById(Number(id));
    }

    @Post('create')
    createContact(@Body() createContactDTO: ContactDTO) {
        return this.userService.createContact(createContactDTO);
    }

    @Patch('update/:id')
    updateContact(@Param('id') id: number, @Body() updateContactDTO: ContactDTO) {
        return this.userService.updateContact(id, updateContactDTO);
    }
}
