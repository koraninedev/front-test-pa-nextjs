import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillDTO } from 'src/dto/skill.dto';
import { skill as SkillEntity } from 'src/typeorm/skill';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity) 
        private readonly skillRespository: Repository<SkillEntity>,
    ) {}

    findAll(): Promise<SkillDTO[]>{
        return this.skillRespository.find();
    }

    async findById(id: number): Promise<SkillDTO>{
        const user = await this.skillRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByUserId(userid: number): Promise<SkillDTO[]>{
        const skills = await this.skillRespository.find({ where: {userid: userid} });
        if (!skills) {
            throw new NotFoundException(`User with ID ${userid} not found`);
        }
        return skills;
    }

    create(createSkillDTO: SkillDTO) {
        const newUser = this.skillRespository.create(createSkillDTO);
        return this.skillRespository.save(newUser);
    }

    async updateEducation(id:number, updateSkillDTO: SkillDTO) {
        return await this.skillRespository.update(id, updateSkillDTO);
    }
}
