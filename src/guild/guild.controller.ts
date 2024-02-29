import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { GuildService } from './guild.service';
import { GuildDTO } from 'src/dto/guild.dto';

@Controller('guild')
export class GuildController {
    constructor(private guildService: GuildService) {}

    @Get()
    getAll(): Promise<GuildDTO[]> {
        return this.guildService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return this.guildService.findById(Number(id));
    }

    @Get('getbyuser/:userid')
    getByUserId(@Param('userid') userid: string){
        return this.guildService.findByUserId(Number(userid));
    }

    @Post('create')
    create(@Body() createGuildDTO: GuildDTO) {
        return this.guildService.create(createGuildDTO);
    }
}
