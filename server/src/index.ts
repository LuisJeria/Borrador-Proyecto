import express, {Application,json} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/IndexRoutes';
import ingresoRoutes from './routes/ingresoRoutes';
import reservaRoutes from './routes/reservaRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import bodegaRoutes from './routes/bodegaRoutes';
import mesaRoutes from './routes/mesaRoutes';
import egresoRoutes from './routes/egresoRoutes';

//Clase que inicializa express para configurar la REST API
class RestaurantServer{

    public app: Application;

    constructor(){

        this.app = express();
        this.config();
        this.routes();
    }
    //define el puerto del servidor
    config(): void{
        this.app.set('port',process.env.Port || 3030);
        this.app.use(morgan('dev')); //monitorea las peticiones al servidor
        this.app.use(cors());
        this.app.use(json());
        this.app.use(express.urlencoded({extended: false}));
    }
    //Define las rutas del servidor
    routes(): void{
        this.app.use('/', indexRoutes);//Ruta Principal
        this.app.use('/api/caja/ingreso', ingresoRoutes);//ruta al API de caja
        this.app.use('/api/caja/egreso', egresoRoutes);//ruta al API de caja
        this.app.use('/api/pedido', pedidoRoutes);//ruta al API de caja
        this.app.use('/api/reserva', reservaRoutes);//ruta al API de caja
        this.app.use('/api/bodega', bodegaRoutes);//ruta al API de caja
        this.app.use('/api/mesa', mesaRoutes);//ruta al API de caja
    }
    
    //Inicializa el servidor
    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}

const restaurantServer = new RestaurantServer();

restaurantServer.start();