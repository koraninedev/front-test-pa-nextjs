import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { SkillModule } from './skill/skill.module';
import { InterestsModule } from './interests/interests.module';
import { GuildModule } from './guild/guild.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'userinformations',
      entities: entities,
      synchronize: true,
    }),
    UserModule,
    ContactModule,
    EducationModule,
    ExperienceModule,
    SkillModule,
    InterestsModule,
    GuildModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
