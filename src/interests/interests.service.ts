import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestsDTO } from 'src/dto/interests.dto';
import { interests as InterestsEntity } from 'src/typeorm/interests';
import { Repository } from 'typeorm';

@Injectable()
export class InterestsService {
    constructor(
        @InjectRepository(InterestsEntity) 
        private readonly interestsRespository: Repository<InterestsEntity>,
    ) {}

    findAll(): Promise<InterestsDTO[]>{
        return this.interestsRespository.find();
    }

    async findById(id: number): Promise<InterestsDTO>{
        const user = await this.interestsRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByUserId(userid: number): Promise<InterestsDTO[]>{
        const skills = await this.interestsRespository.find({ where: {userid: userid} });
        if (!skills) {
            throw new NotFoundException(`User with ID ${userid} not found`);
        }
        return skills;
    }

    create(createInterestsDTO: InterestsDTO) {
        const newUser = this.interestsRespository.create(createInterestsDTO);
        return this.interestsRespository.save(newUser);
    }

    async updateEducation(id:number, updateInterestsDTO: InterestsDTO) {
        return await this.interestsRespository.update(id, updateInterestsDTO);
    }
}
