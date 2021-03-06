"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const song_controller_1 = require("./song.controller");
const song_service_1 = require("./song.service");
const song_repository_1 = require("../../song/song.repository");
const song_api_1 = require("./song.api");
const song_loader_1 = require("./song.loader");
let SongsModule = class SongsModule {
};
SongsModule = __decorate([
    common_1.Shared(),
    common_1.Module({
        controllers: [song_controller_1.SongController],
        components: [song_service_1.SongService, song_repository_1.SongRepository, song_api_1.SongAPI, song_loader_1.SongLoader]
    })
], SongsModule);
exports.SongsModule = SongsModule;
//# sourceMappingURL=song.module.js.map