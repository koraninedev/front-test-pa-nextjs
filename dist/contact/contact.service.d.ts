import { ContactDTO } from 'src/dto/contact.dto';
import { contact as ContactEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class ContactService {
    private readonly contactRespository;
    constructor(contactRespository: Repository<ContactEntity>);
    private contacts;
    findAll(): Promise<ContactDTO[]>;
    findById(id: number): Promise<ContactEntity>;
    createContact(createContactDTO: ContactDTO): Promise<ContactEntity>;
    updateContact(id: number, updateContactDTO: ContactDTO): Promise<import("typeorm").UpdateResult>;
}
