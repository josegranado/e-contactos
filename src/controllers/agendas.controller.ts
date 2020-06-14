import { Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';
class AgendasController
{
	public async listar (req: Request, res:Response): Promise<Response>
	{
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM agendas');
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async UsuarioPorId (req:Request, res:Response): Promise<Response>
	{
		const id = parseInt(req.params.id)
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM agendas WHERE id = $1', [ id])
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async crear (req:Request, res: Response): Promise<Response>
	{
		const { nombre } = req.body;
		try
		{
			const response: QueryResult = await pool.query(
			'INSERT INTO agendas (nombre) VALUES ($1)', 
			[ nombre ]);
			return res.status(200).json({
				message: 'Agenda creado exitosamente'
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
			const response:QueryResult = await pool.query('DELETE FROM agendas WHERE id = $1', [id]);
			return res.status(200).json(
			{
				message: 'Agenda borrada exitosamente'
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
			const response: QueryResult = await pool.query('UPDATE agendas SET nombre = $1 WHERE id = $2', [nombre, id]);
			return res.status(200).json({ message: 'Agenda actualizada exitosamente'})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'})
		}

	}
}

export const agendasController = new AgendasController();