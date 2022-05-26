import {Router} from 'express'

import egresoController from '../controllers/egresoControllers';

class EgresoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', egresoController.listEgreso);
        this.router.get('/:id', egresoController.getOneEgreso);
        this.router.post('/', egresoController.createEgreso);
        this.router.delete('/:id',egresoController.deleteEgreso);
        this.router.put('/:id', egresoController.updateEgreso);

        
    }

}

const egresoRoutes= new EgresoRoutes();
export default egresoRoutes.router;