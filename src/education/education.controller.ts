import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationDTO } from 'src/dto/education.dto';

@Controller('education')
export class EducationController {
    constructor(private educationService: EducationService) {}

    @Get()
    getUserAll(): Promise<EducationDTO[]> {
        return this.educationService.findAll();
    }

    @Get(':id')
    getEducationById(@Param('id') id: string){
        return this.educationService.findById(Number(id));
    }

    @Get('getbyuser/:userid')
    getEducationByUserId(@Param('userid') userid: string){
        return this.educationService.findByUserId(Number(userid));
    }

    @Post('create')
    createContact(@Body() createEducationDTO: EducationDTO) {
        return this.educationService.createEducation(createEducationDTO);
    }

    @Patch('update/:id')
    updateContact(@Param('id') id: number, @Body() updateEducationDTO: EducationDTO) {
        return this.educationService.updateEducation(id, updateEducationDTO);
    }
}
