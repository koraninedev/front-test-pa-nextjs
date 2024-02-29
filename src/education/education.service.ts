import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationDTO } from 'src/dto/education.dto';
import { education as EducationEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(EducationEntity) 
        private readonly educationRespository: Repository<EducationEntity>,
    ) {}

    findAll(): Promise<EducationDTO[]>{
        return this.educationRespository.find();
    }

    async findById(id: number): Promise<EducationDTO>{
        const user = await this.educationRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByUserId(userid: number): Promise<EducationDTO[]>{
        const educations = await this.educationRespository.find({ where: {userid: userid} });
        if (!educations) {
            throw new NotFoundException(`User with ID ${userid} not found`);
        }
        return educations;
    }

    createEducation(createEducationDTO: EducationDTO) {
        const newUser = this.educationRespository.create(createEducationDTO);
        return this.educationRespository.save(newUser);
    }

    async updateEducation(id:number, updateEducationDTO: EducationDTO) {
        return await this.educationRespository.update(id, updateEducationDTO);
    }
}
