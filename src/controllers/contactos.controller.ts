import { Request, Response} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';
class ContactosController
{
	public async listar (req: Request, res:Response): Promise<Response>
	{
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM contactos');
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async ContactoPorId (req:Request, res:Response): Promise<Response>
	{
		const id = parseInt(req.params.id)
		try
		{
			const response: QueryResult = await pool.query('SELECT * FROM contactos WHERE id = $1', [ id])
			return res.status(200).json(response.rows)
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'});
		}
	}
	public async crear (req:Request, res: Response): Promise<Response>
	{
		const { nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id } = req.body;
		try
		{
			const response: QueryResult = await pool.query(
			'INSERT INTO contactos (nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', 
			[ nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id ]);
			return res.status(200).json({
				message: 'Contacto creado exitosamente'
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
			const response:QueryResult = await pool.query('DELETE FROM contactos WHERE id = $1', [id]);
			return res.status(200).json(
			{
				message: 'Contacto borrado extisotamente'
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
			const response: QueryResult = await pool.query('UPDATE contactos SET nombre = $1 WHERE id = $2', [nombre, id]);
			return res.status(200).json({ message: 'Contacto actualizado exitosamente'})
		}
		catch(e)
		{
			return res.status(500).json({ message: 'Internal server error'})
		}

	}
}

export const contactosController = new ContactosController();