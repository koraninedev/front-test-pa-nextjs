import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienceDTO } from 'src/dto/experience.dto';
import { experience as ExperienceEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExperienceService {
    constructor(
        @InjectRepository(ExperienceEntity) 
        private readonly educationRespository: Repository<ExperienceEntity>,
    ) {}

    findAll(): Promise<ExperienceDTO[]>{
        return this.educationRespository.find();
    }

    async findById(id: number): Promise<ExperienceDTO>{
        const user = await this.educationRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByUserId(userid: number): Promise<ExperienceDTO[]>{
        const educations = await this.educationRespository.find({ where: {userid: userid} });
        if (!educations) {
            throw new NotFoundException(`User with ID ${userid} not found`);
        }
        return educations;
    }

    create(createExperienceDTO: ExperienceDTO) {
        const newUser = this.educationRespository.create(createExperienceDTO);
        return this.educationRespository.save(newUser);
    }

    async updateEducation(id:number, updateExperienceDTO: ExperienceDTO) {
        return await this.educationRespository.update(id, updateExperienceDTO);
    }
}
