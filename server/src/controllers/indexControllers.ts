import {Request,Response} from 'express';

class IndexController{

    public index (req: Request,res: Response){
        res.json({text: 'la consulta esta en api/mesa/'});
    }
}

export const indexController = new IndexController();
