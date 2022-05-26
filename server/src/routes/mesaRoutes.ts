import {Router} from 'express'

import mesaController from '../controllers/mesaControllers';

class MesaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', mesaController.list);
        this.router.get('/:id', mesaController.getOne);
        this.router.post('/', mesaController.create);
        this.router.delete('/:id',mesaController.delete);
        this.router.put('/:id', mesaController.update);
    }

}

const mesaRoutes = new MesaRoutes();
export default mesaRoutes.router;