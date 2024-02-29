import { ContactService } from './contact.service';
import { ContactDTO } from 'src/dto/contact.dto';
export declare class ContactController {
    private userService;
    constructor(userService: ContactService);
    getUserAll(): Promise<ContactDTO[]>;
    getUserById(id: string): Promise<import("../typeorm").contact>;
    createContact(createContactDTO: ContactDTO): Promise<import("../typeorm").contact>;
    updateContact(id: number, updateContactDTO: ContactDTO): Promise<import("typeorm").UpdateResult>;
}
