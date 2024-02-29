import { GuildDTO } from 'src/dto/guild.dto';
import { guild as GuildEntity } from 'src/typeorm/guild';
import { Repository } from 'typeorm';
export declare class GuildService {
    private readonly guildRespository;
    constructor(guildRespository: Repository<GuildEntity>);
    findAll(): Promise<GuildDTO[]>;
    findById(id: number): Promise<GuildDTO>;
    findByUserId(userid: number): Promise<GuildDTO[]>;
    create(createGuildDTO: GuildDTO): Promise<GuildEntity>;
    update(id: number, updateGuildDTO: GuildDTO): Promise<import("typeorm").UpdateResult>;
}
