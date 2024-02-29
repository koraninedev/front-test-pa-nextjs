"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("./typeorm");
const user_module_1 = require("./user/user.module");
const contact_module_1 = require("./contact/contact.module");
const education_module_1 = require("./education/education.module");
const experience_module_1 = require("./experience/experience.module");
const skill_module_1 = require("./skill/skill.module");
const interests_module_1 = require("./interests/interests.module");
const guild_module_1 = require("./guild/guild.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'userinformations',
                entities: typeorm_2.default,
                synchronize: true,
            }),
            user_module_1.UserModule,
            contact_module_1.ContactModule,
            education_module_1.EducationModule,
            experience_module_1.ExperienceModule,
            skill_module_1.SkillModule,
            interests_module_1.InterestsModule,
            guild_module_1.GuildModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map