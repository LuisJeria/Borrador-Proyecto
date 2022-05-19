"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PedidoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Vista Pedido')); // se define ruta inicial de la aplicación
    }
}
const pedidoRoutes = new PedidoRoutes();
exports.default = pedidoRoutes.router;
