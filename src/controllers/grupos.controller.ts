import { Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';
class GruposController
{
	public async listar (req: Request, res:Response): Promise<Response>
	{
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM grupos');
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async GrupoPorId (req:Request, res:Response): Promise<Response>
	{
		const id = parseInt(req.params.id)
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM grupos WHERE id = $1', [ id])
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async crear (req:Request, res: Response): Promise<Response>
	{
		const { nombre, agenda_id } = req.body;
		try
		{
			const response: QueryResult = await pool.query(
			'INSERT INTO grupos (nombre, id_agenda) VALUES ($1, $2)', 
			[ nombre, agenda_id ]);
			return res.status(200).json({
				message: 'Grupo creado exitosamente'
			})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async borrar (req: Request, res: Response):Promise<Response>
	{
		const id = parseInt(req.params.id);

		try
		{
			const response:QueryResult = await pool.query('DELETE FROM grupos WHERE id = $1', [id]);
			return res.status(200).json(
			{
				message: 'Grupo borrado extisotamente'
			})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'})
		}
	}
	public async actualizar (req: Request, res: Response): Promise<Response>
	{
		const id = parseInt(req.params.id);
		const { nombre } = req.body;
		
		try
		{
			const response: QueryResult = await pool.query('UPDATE grupos SET nombre = $1 WHERE id = $2', [nombre, id]);
			return res.status(200).json({ message: 'Grupo actualizado exitosamente'})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'})
		}

	}
}

export const gruposController = new GruposController();