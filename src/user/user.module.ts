import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
