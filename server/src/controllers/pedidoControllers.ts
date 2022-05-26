import {Request,Response} from 'express';

import pool from '../database';

class PedidoController{

    public async listPedido (req: Request,res: Response){
        const pedidos = await pool.query('SELECT * FROM pedidos');
        res.json(pedidos);
    } 
    
    public async getPedidoMesa(req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const pedidos = await pool.query('SELECT * FROM egresos WHERE id = ?',[id]);//cambiar el script por una busqueda por usuario
        if(pedidos.length > 0){
            return res.json(pedidos[0]);
        }else{
            res.status(404).json({text: 'el pedido no existe'});
        }
    } 
    
    public async createPedido (req: Request,res: Response): Promise<void>{
        await pool.query('INSERT INTO pedidos set ?',[req.body]);
        res.json({message: 'Pedido creado'});
    }
    
    public async deletePedido(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('DELETE FROM pedidos WHERE id = ?',[id]);
        res.json({text: 'El egreso fue eliminado'});
    }
    
    public async updatePedido(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE pedidos set ? WHERE id = ?',[req.body,id]);
        res.json({text: 'El pedido fue Actualizado'});
        }

}

const pedidoController = new PedidoController();
export default pedidoController;