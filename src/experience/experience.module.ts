import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { experience } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([experience])],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
