import { ExperienceDTO } from 'src/dto/experience.dto';
import { experience as ExperienceEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class ExperienceService {
    private readonly educationRespository;
    constructor(educationRespository: Repository<ExperienceEntity>);
    findAll(): Promise<ExperienceDTO[]>;
    findById(id: number): Promise<ExperienceDTO>;
    findByUserId(userid: number): Promise<ExperienceDTO[]>;
    create(createExperienceDTO: ExperienceDTO): Promise<ExperienceEntity>;
    updateEducation(id: number, updateExperienceDTO: ExperienceDTO): Promise<import("typeorm").UpdateResult>;
}
