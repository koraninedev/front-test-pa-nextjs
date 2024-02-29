import { ExperienceService } from './experience.service';
import { ExperienceDTO } from 'src/dto/experience.dto';
export declare class ExperienceController {
    private experienceService;
    constructor(experienceService: ExperienceService);
    getAll(): Promise<ExperienceDTO[]>;
    getEducationById(id: string): Promise<ExperienceDTO>;
    getByUserId(userid: string): Promise<ExperienceDTO[]>;
    createContact(createExperienceDTO: ExperienceDTO): Promise<import("../typeorm").experience>;
}
