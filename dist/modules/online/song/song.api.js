"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const baseURL = 'http://www.nhaccuatui.com/bai-hat';
const suffixURL = '.html';
let SongAPI = class SongAPI {
    getURL(categoryURL, page) {
        const pageURL = page == 1 ? '' : `.${page}`;
        return `${baseURL}/${categoryURL}${pageURL}${suffixURL}`;
    }
};
SongAPI = __decorate([
    common_1.Component()
], SongAPI);
exports.SongAPI = SongAPI;
//# sourceMappingURL=song.api.js.map