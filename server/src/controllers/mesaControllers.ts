import {Request,Response} from 'express';

import pool from '../database';

class MesaController{

    
     public async list (req: Request,res: Response){
        const mesas = await pool.query('SELECT * FROM MESAS');
        res.json(mesas);
    } 
    
    public async getOne (req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const mesas = await pool.query('SELECT * FROM MESAS WHERE id = ?',[id]);
        if(mesas.length > 0){
            return res.json(mesas[0]);
        }else{
            res.status(404).json({text: 'la mesa no existe'});
        }
    } 
    
    public async create (req: Request,res: Response): Promise<void>{
        await pool.query('INSERT INTO mesas set ?',[req.body]);
        res.json({message: 'mesa creada'});
    }
    
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM mesas WHERE id = ?',[id]);
        res.json({text: 'La mesa fue eliminada'});
    }
    
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE mesas set ? WHERE id = ?',[req.body,id]);
        res.json({text: 'La mesa fue Actualizada'});
        }
    }

const mesaController = new MesaController();
export default mesaController;