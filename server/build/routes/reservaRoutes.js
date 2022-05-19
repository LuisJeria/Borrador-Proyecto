"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ReservaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Vista Reserva')); // se define ruta inicial de la aplicación
    }
}
const reservaRoutes = new ReservaRoutes();
exports.default = reservaRoutes.router;
