import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactDTO } from 'src/dto/contact.dto';
import { contact as ContactEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(ContactEntity) 
        private readonly contactRespository: Repository<ContactEntity>,
    ) {}

    private contacts: ContactDTO[] = [];

    findAll(): Promise<ContactDTO[]>{
        return this.contactRespository.find();
    }

    async findById(id: number): Promise<ContactEntity>{
        const user = await this.contactRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    createContact(createContactDTO: ContactDTO) {
        const newUser = this.contactRespository.create(createContactDTO);
        return this.contactRespository.save(newUser);
    }

    async updateContact(id:number, updateContactDTO: ContactDTO) {
        return await this.contactRespository.update(id, updateContactDTO);
    }
}
