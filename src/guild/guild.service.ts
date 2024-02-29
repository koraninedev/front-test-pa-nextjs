import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuildDTO } from 'src/dto/guild.dto';
import { guild as GuildEntity } from 'src/typeorm/guild';
import { Repository } from 'typeorm';

@Injectable()
export class GuildService {
    constructor(
        @InjectRepository(GuildEntity) 
        private readonly guildRespository: Repository<GuildEntity>,
    ) {}

    findAll(): Promise<GuildDTO[]>{
        return this.guildRespository.find();
    }

    async findById(id: number): Promise<GuildDTO>{
        const user = await this.guildRespository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async findByUserId(userid: number): Promise<GuildDTO[]>{
        const skills = await this.guildRespository.find({ where: {userid: userid} });
        if (!skills) {
            throw new NotFoundException(`User with ID ${userid} not found`);
        }
        return skills;
    }

    create(createGuildDTO: GuildDTO) {
        const newUser = this.guildRespository.create(createGuildDTO);
        return this.guildRespository.save(newUser);
    }

    async update(id:number, updateGuildDTO: GuildDTO) {
        return await this.guildRespository.update(id, updateGuildDTO);
    }
}
