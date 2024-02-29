import { GuildService } from './guild.service';
import { GuildDTO } from 'src/dto/guild.dto';
export declare class GuildController {
    private guildService;
    constructor(guildService: GuildService);
    getAll(): Promise<GuildDTO[]>;
    getById(id: string): Promise<GuildDTO>;
    getByUserId(userid: string): Promise<GuildDTO[]>;
    create(createGuildDTO: GuildDTO): Promise<import("../typeorm").guild>;
}
