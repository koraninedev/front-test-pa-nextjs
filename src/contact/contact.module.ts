import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact } from 'src/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([contact])],
    controllers: [ContactController],
    providers: [ContactService]
})
export class ContactModule {}
