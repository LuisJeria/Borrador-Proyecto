"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoControllers_1 = __importDefault(require("../controllers/pedidoControllers"));
class PedidoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pedidoControllers_1.default.listPedido);
        this.router.get('/:id', pedidoControllers_1.default.getPedidoMesa);
        this.router.post('/', pedidoControllers_1.default.createPedido);
        this.router.delete('/:id', pedidoControllers_1.default.deletePedido);
        this.router.put('/:id', pedidoControllers_1.default.updatePedido);
    }
}
const pedidoRoutes = new PedidoRoutes();
exports.default = pedidoRoutes.router;
