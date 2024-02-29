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
exports.InterestsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interests_1 = require("../typeorm/interests");
const typeorm_2 = require("typeorm");
let InterestsService = class InterestsService {
    constructor(interestsRespository) {
        this.interestsRespository = interestsRespository;
    }
    findAll() {
        return this.interestsRespository.find();
    }
    async findById(id) {
        const user = await this.interestsRespository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async findByUserId(userid) {
        const skills = await this.interestsRespository.find({ where: { userid: userid } });
        if (!skills) {
            throw new common_1.NotFoundException(`User with ID ${userid} not found`);
        }
        return skills;
    }
    create(createInterestsDTO) {
        const newUser = this.interestsRespository.create(createInterestsDTO);
        return this.interestsRespository.save(newUser);
    }
    async updateEducation(id, updateInterestsDTO) {
        return await this.interestsRespository.update(id, updateInterestsDTO);
    }
};
exports.InterestsService = InterestsService;
exports.InterestsService = InterestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(interests_1.interests)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InterestsService);
//# sourceMappingURL=interests.service.js.map