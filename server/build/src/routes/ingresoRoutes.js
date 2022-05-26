"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingresoControllers_1 = __importDefault(require("../controllers/ingresoControllers"));
class CajaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingresoControllers_1.default.listIngreso);
        this.router.get('/:id', ingresoControllers_1.default.getOneIngreso);
        this.router.post('/', ingresoControllers_1.default.createIngreso);
        this.router.delete('/:id', ingresoControllers_1.default.deleteIngreso);
        this.router.put('/:id', ingresoControllers_1.default.updateIngreso);
    }
}
const cajaRoutes = new CajaRoutes();
exports.default = cajaRoutes.router;
