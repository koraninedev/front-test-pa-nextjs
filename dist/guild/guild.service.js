"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const guild_1 = require("../typeorm/guild");
const typeorm_2 = require("typeorm");
let GuildService = class GuildService {
    constructor(guildRespository) {
        this.guildRespository = guildRespository;
    }
    findAll() {
        return this.guildRespository.find();
    }
    async findById(id) {
        const user = await this.guildRespository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async findByUserId(userid) {
        const skills = await this.guildRespository.find({ where: { userid: userid } });
        if (!skills) {
            throw new common_1.NotFoundException(`User with ID ${userid} not found`);
        }
        return skills;
    }
    create(createGuildDTO) {
        const newUser = this.guildRespository.create(createGuildDTO);
        return this.guildRespository.save(newUser);
    }
    async update(id, updateGuildDTO) {
        return await this.guildRespository.update(id, updateGuildDTO);
    }
};
exports.GuildService = GuildService;
exports.GuildService = GuildService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(guild_1.guild)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuildService);
//# sourceMappingURL=guild.service.js.map