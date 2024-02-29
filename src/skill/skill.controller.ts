import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillDTO } from 'src/dto/skill.dto';

@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService) {}

    @Get()
    getAll(): Promise<SkillDTO[]> {
        return this.skillService.findAll();
    }

    @Get(':id')
    getEducationById(@Param('id') id: string){
        return this.skillService.findById(Number(id));
    }

    @Get('getbyuser/:userid')
    getByUserId(@Param('userid') userid: string){
        return this.skillService.findByUserId(Number(userid));
    }

    @Post('create')
    createContact(@Body() createExperienceDTO: SkillDTO) {
        return this.skillService.create(createExperienceDTO);
    }
}
