import {Router} from 'express'


class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/',(req,res)=> res.send('Vista Principal')); // se define ruta inicial de la aplicación
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;