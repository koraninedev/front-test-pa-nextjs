import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { education } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([education])],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
