import { Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';
class ImagenesController
{
	public async listar (req: Request, res:Response): Promise<Response>
	{
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM imagenes');
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async ImagenPorId (req:Request, res:Response): Promise<Response>
	{
		const id = parseInt(req.params.id)
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM imagenes WHERE id = $1', [ id])
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async crear (req:Request, res: Response): Promise<Response>
	{
		const { nombre, link, contacto_id } = req.body;
		try
		{
			const response: QueryResult = await pool.query(
			'INSERT INTO imagenes (nombre, link, contacto_id ) VALUES ($1, $2, $3)', 
			[ nombre, link, contacto_id ]);
			return res.status(200).json({
				message: 'Imagen creada exitosamente'
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
			const response:QueryResult = await pool.query('DELETE FROM imagenes WHERE id = $1', [id]);
			return res.status(200).json(
			{
				message: 'Imagen borrada extisotamente'
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
			const response: QueryResult = await pool.query('UPDATE imagenes SET nombre = $1 WHERE id = $2', [nombre, id]);
			return res.status(200).json({ message: 'Imagen actualizada exitosamente'})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'})
		}

	}
}

export const imagenesController = new ImagenesController();