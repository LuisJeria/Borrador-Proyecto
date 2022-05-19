import {Router} from 'express'


class PedidoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',(req,res)=> res.send('Vista Pedido')); // se define ruta inicial de la aplicación
    }

}

const pedidoRoutes = new PedidoRoutes();
export default pedidoRoutes.router;