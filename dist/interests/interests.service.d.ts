import { InterestsDTO } from 'src/dto/interests.dto';
import { interests as InterestsEntity } from 'src/typeorm/interests';
import { Repository } from 'typeorm';
export declare class InterestsService {
    private readonly interestsRespository;
    constructor(interestsRespository: Repository<InterestsEntity>);
    findAll(): Promise<InterestsDTO[]>;
    findById(id: number): Promise<InterestsDTO>;
    findByUserId(userid: number): Promise<InterestsDTO[]>;
    create(createInterestsDTO: InterestsDTO): Promise<InterestsEntity>;
    updateEducation(id: number, updateInterestsDTO: InterestsDTO): Promise<import("typeorm").UpdateResult>;
}
