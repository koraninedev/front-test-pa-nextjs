import { SkillService } from './skill.service';
import { SkillDTO } from 'src/dto/skill.dto';
export declare class SkillController {
    private skillService;
    constructor(skillService: SkillService);
    getAll(): Promise<SkillDTO[]>;
    getEducationById(id: string): Promise<SkillDTO>;
    getByUserId(userid: string): Promise<SkillDTO[]>;
    createContact(createExperienceDTO: SkillDTO): Promise<import("../typeorm").skill>;
}
