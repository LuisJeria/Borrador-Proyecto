"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const ingresoRoutes_1 = __importDefault(require("./routes/ingresoRoutes"));
const reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
const pedidoRoutes_1 = __importDefault(require("./routes/pedidoRoutes"));
const bodegaRoutes_1 = __importDefault(require("./routes/bodegaRoutes"));
const mesaRoutes_1 = __importDefault(require("./routes/mesaRoutes"));
const egresoRoutes_1 = __importDefault(require("./routes/egresoRoutes"));
//Clase que inicializa express para configurar la REST API
class RestaurantServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //define el puerto del servidor
    config() {
        this.app.set('port', process.env.Port || 3030);
        this.app.use((0, morgan_1.default)('dev')); //monitorea las peticiones al servidor
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_1.json)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Define las rutas del servidor
    routes() {
        this.app.use('/', IndexRoutes_1.default); //Ruta Principal
        this.app.use('/api/caja/ingreso', ingresoRoutes_1.default); //ruta al API de caja
        this.app.use('/api/caja/egreso', egresoRoutes_1.default); //ruta al API de caja
        this.app.use('/api/pedido', pedidoRoutes_1.default); //ruta al API de caja
        this.app.use('/api/reserva', reservaRoutes_1.default); //ruta al API de caja
        this.app.use('/api/bodega', bodegaRoutes_1.default); //ruta al API de caja
        this.app.use('/api/mesa', mesaRoutes_1.default); //ruta al API de caja
    }
    //Inicializa el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}
const restaurantServer = new RestaurantServer();
restaurantServer.start();
