"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CajaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Vista Caja')); // se define ruta inicial de la aplicación
    }
}
const cajaRoutes = new CajaRoutes();
exports.default = cajaRoutes.router;
