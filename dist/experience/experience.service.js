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
exports.ExperienceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
let ExperienceService = class ExperienceService {
    constructor(educationRespository) {
        this.educationRespository = educationRespository;
    }
    findAll() {
        return this.educationRespository.find();
    }
    async findById(id) {
        const user = await this.educationRespository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async findByUserId(userid) {
        const educations = await this.educationRespository.find({ where: { userid: userid } });
        if (!educations) {
            throw new common_1.NotFoundException(`User with ID ${userid} not found`);
        }
        return educations;
    }
    create(createExperienceDTO) {
        const newUser = this.educationRespository.create(createExperienceDTO);
        return this.educationRespository.save(newUser);
    }
    async updateEducation(id, updateExperienceDTO) {
        return await this.educationRespository.update(id, updateExperienceDTO);
    }
};
exports.ExperienceService = ExperienceService;
exports.ExperienceService = ExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.experience)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], ExperienceService);
//# sourceMappingURL=experience.service.js.map