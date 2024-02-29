import { EducationService } from './education.service';
import { EducationDTO } from 'src/dto/education.dto';
export declare class EducationController {
    private educationService;
    constructor(educationService: EducationService);
    getUserAll(): Promise<EducationDTO[]>;
    getEducationById(id: string): Promise<EducationDTO>;
    getEducationByUserId(userid: string): Promise<EducationDTO[]>;
    createContact(createEducationDTO: EducationDTO): Promise<import("../typeorm").education>;
    updateContact(id: number, updateEducationDTO: EducationDTO): Promise<import("typeorm").UpdateResult>;
}
