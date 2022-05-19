import {Router} from 'express'


class ReservaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',(req,res)=> res.send('Vista Reserva')); // se define ruta inicial de la aplicación
    }

}

const reservaRoutes = new ReservaRoutes();
export default reservaRoutes.router;