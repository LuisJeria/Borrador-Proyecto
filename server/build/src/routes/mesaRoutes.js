"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mesaControllers_1 = __importDefault(require("../controllers/mesaControllers"));
class MesaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', mesaControllers_1.default.list);
        this.router.get('/:id', mesaControllers_1.default.getOne);
        this.router.post('/', mesaControllers_1.default.create);
        this.router.delete('/:id', mesaControllers_1.default.delete);
        this.router.put('/:id', mesaControllers_1.default.update);
    }
}
const mesaRoutes = new MesaRoutes();
exports.default = mesaRoutes.router;
