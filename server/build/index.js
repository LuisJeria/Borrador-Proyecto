"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const cajaRoutes_1 = __importDefault(require("./routes/cajaRoutes"));
const reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
const pedidoRoutes_1 = __importDefault(require("./routes/pedidoRoutes"));
const bodegaRoutes_1 = __importDefault(require("./routes/bodegaRoutes"));
//Clase que inicializa express para configurar la REST API
class RestaurantServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //define el puerto del servidor
    config() {
        this.app.set('port', process.env.Port || 3000);
        this.app.use((0, morgan_1.default)('dev')); //monitorea las peticiones al servidor
    }
    //Define las rutas del servidor
    routes() {
        this.app.use(IndexRoutes_1.default); //Ruta Principal
        this.app.use('/api/caja', cajaRoutes_1.default); //ruta al API de caja
        this.app.use('/api/pedido', pedidoRoutes_1.default); //ruta al API de caja
        this.app.use('/api/reserva', reservaRoutes_1.default); //ruta al API de caja
        this.app.use('/api/bodega', bodegaRoutes_1.default); //ruta al API de caja
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
