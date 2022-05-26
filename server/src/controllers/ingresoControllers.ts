import {Request,Response} from 'express';

import pool from '../database';

class IngresoController{

    public async listIngreso (req: Request,res: Response){
        const ingresos = await pool.query('SELECT * FROM ingresos');
        res.json(ingresos);
    } 
    
    public async getOneIngreso (req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const ingresos = await pool.query('SELECT * FROM ingresos WHERE id = ?',[id]);
        if(ingresos.length > 0){
            return res.json(ingresos[0]);
        }else{
            res.status(404).json({text: 'el ingreso no existe'});
        }
    } 
    
    public async createIngreso (req: Request,res: Response): Promise<void>{
        await pool.query('INSERT INTO ingresos set ?',[req.body]);
        res.json({message: 'ingreso creado'});
    }
    
    public async deleteIngreso(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM ingresos WHERE id = ?',[id]);
        res.json({text: 'El ingreso fue eliminado'});
    }
    
    public async updateIngreso(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE ingresos set ? WHERE id = ?',[req.body,id]);
        res.json({text: 'El ingreso fue Actualizado'});
        }

}

const ingresoController = new IngresoController();
export default ingresoController;

