import { InterestsService } from './interests.service';
import { InterestsDTO } from 'src/dto/interests.dto';
export declare class InterestsController {
    private interestsService;
    constructor(interestsService: InterestsService);
    getAll(): Promise<InterestsDTO[]>;
    getById(id: string): Promise<InterestsDTO>;
    getByUserId(userid: string): Promise<InterestsDTO[]>;
    create(createExperienceDTO: InterestsDTO): Promise<import("../typeorm").interests>;
}
