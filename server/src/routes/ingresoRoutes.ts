import {Router} from 'express'

import ingresoController from '../controllers/ingresoControllers';

class CajaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', ingresoController.listIngreso);
        this.router.get('/:id', ingresoController.getOneIngreso);
        this.router.post('/', ingresoController.createIngreso);
        this.router.delete('/:id',ingresoController.deleteIngreso);
        this.router.put('/:id', ingresoController.updateIngreso);

        
    }

}

const cajaRoutes = new CajaRoutes();
export default cajaRoutes.router;