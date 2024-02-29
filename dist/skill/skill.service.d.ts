import { SkillDTO } from 'src/dto/skill.dto';
import { skill as SkillEntity } from 'src/typeorm/skill';
import { Repository } from 'typeorm';
export declare class SkillService {
    private readonly skillRespository;
    constructor(skillRespository: Repository<SkillEntity>);
    findAll(): Promise<SkillDTO[]>;
    findById(id: number): Promise<SkillDTO>;
    findByUserId(userid: number): Promise<SkillDTO[]>;
    create(createSkillDTO: SkillDTO): Promise<SkillEntity>;
    updateEducation(id: number, updateSkillDTO: SkillDTO): Promise<import("typeorm").UpdateResult>;
}
