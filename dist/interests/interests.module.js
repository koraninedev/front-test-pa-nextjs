"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestsModule = void 0;
const common_1 = require("@nestjs/common");
const interests_controller_1 = require("./interests.controller");
const interests_service_1 = require("./interests.service");
const interests_1 = require("../typeorm/interests");
const typeorm_1 = require("@nestjs/typeorm");
let InterestsModule = class InterestsModule {
};
exports.InterestsModule = InterestsModule;
exports.InterestsModule = InterestsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([interests_1.interests])],
        controllers: [interests_controller_1.InterestsController],
        providers: [interests_service_1.InterestsService]
    })
], InterestsModule);
//# sourceMappingURL=interests.module.js.map