"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const egresoControllers_1 = __importDefault(require("../controllers/egresoControllers"));
class EgresoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', egresoControllers_1.default.listEgreso);
        this.router.get('/:id', egresoControllers_1.default.getOneEgreso);
        this.router.post('/', egresoControllers_1.default.createEgreso);
        this.router.delete('/:id', egresoControllers_1.default.deleteEgreso);
        this.router.put('/:id', egresoControllers_1.default.updateEgreso);
    }
}
const egresoRoutes = new EgresoRoutes();
exports.default = egresoRoutes.router;
