import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceDTO } from 'src/dto/experience.dto';

@Controller('experience')
export class ExperienceController {
    constructor(private experienceService: ExperienceService) {}

    @Get()
    getAll(): Promise<ExperienceDTO[]> {
        return this.experienceService.findAll();
    }

    @Get(':id')
    getEducationById(@Param('id') id: string){
        return this.experienceService.findById(Number(id));
    }

    @Get('getbyuser/:userid')
    getByUserId(@Param('userid') userid: string){
        return this.experienceService.findByUserId(Number(userid));
    }

    @Post('create')
    createContact(@Body() createExperienceDTO: ExperienceDTO) {
        return this.experienceService.create(createExperienceDTO);
    }
}
