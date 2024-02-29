import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { InterestsDTO } from 'src/dto/interests.dto';

@Controller('interests')
export class InterestsController {
    constructor(private interestsService: InterestsService) {}

    @Get()
    getAll(): Promise<InterestsDTO[]> {
        return this.interestsService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return this.interestsService.findById(Number(id));
    }

    @Get('getbyuser/:userid')
    getByUserId(@Param('userid') userid: string){
        return this.interestsService.findByUserId(Number(userid));
    }

    @Post('create')
    create(@Body() createExperienceDTO: InterestsDTO) {
        return this.interestsService.create(createExperienceDTO);
    }
}
