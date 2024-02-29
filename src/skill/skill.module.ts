import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { skill } from 'src/typeorm/skill';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([skill])],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
