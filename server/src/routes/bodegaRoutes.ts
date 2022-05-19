import {Router} from 'express'


class BodegaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',(req,res)=> res.send('Vista Bodega')); // se define ruta inicial de la aplicación
    }

}

const bodegaRoutes = new BodegaRoutes();
export default bodegaRoutes.router;