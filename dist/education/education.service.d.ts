import { EducationDTO } from 'src/dto/education.dto';
import { education as EducationEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class EducationService {
    private readonly educationRespository;
    constructor(educationRespository: Repository<EducationEntity>);
    findAll(): Promise<EducationDTO[]>;
    findById(id: number): Promise<EducationDTO>;
    findByUserId(userid: number): Promise<EducationDTO[]>;
    createEducation(createEducationDTO: EducationDTO): Promise<EducationEntity>;
    updateEducation(id: number, updateEducationDTO: EducationDTO): Promise<import("typeorm").UpdateResult>;
}
