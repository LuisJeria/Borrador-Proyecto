import {Router} from 'express'

import pedidoController from '../controllers/pedidoControllers';

class PedidoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', pedidoController.listPedido);
        this.router.get('/:id', pedidoController.getPedidoMesa);
        this.router.post('/', pedidoController.createPedido);
        this.router.delete('/:id',pedidoController.deletePedido);
        this.router.put('/:id', pedidoController.updatePedido);
    }

}

const pedidoRoutes = new PedidoRoutes();
export default pedidoRoutes.router;