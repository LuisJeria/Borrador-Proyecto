import {Router} from 'express'

import {indexController} from '../controllers/indexControllers';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',indexController.index); // se define ruta inicial de la aplicación
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;