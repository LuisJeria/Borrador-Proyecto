import {Request,Response} from 'express';

import pool from '../database';

class EgresoController{

    public async listEgreso (req: Request,res: Response){
        const egresos = await pool.query('SELECT * FROM egresos');
        res.json(egresos);
    } 
    
    public async getOneEgreso (req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const egresos = await pool.query('SELECT * FROM egresos WHERE id = ?',[id]);
        if(egresos.length > 0){
            return res.json(egresos[0]);
        }else{
            res.status(404).json({text: 'el egreso no existe'});
        }
    } 
    
    public async createEgreso (req: Request,res: Response): Promise<void>{
        await pool.query('INSERT INTO egresos set ?',[req.body]);
        res.json({message: 'egreso creado'});
    }
    
    public async deleteEgreso(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM egresos WHERE id = ?',[id]);
        res.json({text: 'El egreso fue eliminado'});
    }
    
    public async updateEgreso(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE egresos set ? WHERE id = ?',[req.body,id]);
        res.json({text: 'El egreso fue Actualizado'});
        }

}

const egresoController = new EgresoController();
export default egresoController;