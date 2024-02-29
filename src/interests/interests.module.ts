import { Module } from '@nestjs/common';
import { InterestsController } from './interests.controller';
import { InterestsService } from './interests.service';
import { interests } from 'src/typeorm/interests';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([interests])],
  controllers: [InterestsController],
  providers: [InterestsService]
})
export class InterestsModule {}
