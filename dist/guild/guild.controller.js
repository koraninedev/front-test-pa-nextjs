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
exports.GuildController = void 0;
const common_1 = require("@nestjs/common");
const guild_service_1 = require("./guild.service");
let GuildController = class GuildController {
    constructor(guildService) {
        this.guildService = guildService;
    }
    getAll() {
        return this.guildService.findAll();
    }
    getById(id) {
        return this.guildService.findById(Number(id));
    }
    getByUserId(userid) {
        return this.guildService.findByUserId(Number(userid));
    }
    create(createGuildDTO) {
        return this.guildService.create(createGuildDTO);
    }
};
exports.GuildController = GuildController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuildController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuildController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('getbyuser/:userid'),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuildController.prototype, "getByUserId", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GuildController.prototype, "create", null);
exports.GuildController = GuildController = __decorate([
    (0, common_1.Controller)('guild'),
    __metadata("design:paramtypes", [guild_service_1.GuildService])
], GuildController);
//# sourceMappingURL=guild.controller.js.map