"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildModule = void 0;
const common_1 = require("@nestjs/common");
const guild_controller_1 = require("./guild.controller");
const guild_service_1 = require("./guild.service");
const typeorm_1 = require("../typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let GuildModule = class GuildModule {
};
exports.GuildModule = GuildModule;
exports.GuildModule = GuildModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_2.TypeOrmModule.forFeature([typeorm_1.guild])],
        controllers: [guild_controller_1.GuildController],
        providers: [guild_service_1.GuildService]
    })
], GuildModule);
//# sourceMappingURL=guild.module.js.map