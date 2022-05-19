import {Router} from 'express'


class CajaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',(req,res)=> res.send('Vista Caja')); // se define ruta inicial de la aplicación
    }

}

const cajaRoutes = new CajaRoutes();
export default cajaRoutes.router;