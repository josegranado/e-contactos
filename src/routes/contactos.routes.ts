import { Router} from 'express';
import { contactosController } from '../controllers/contactos.controller';
class AgendasRoutes
{
	public router: Router = Router();
	constructor()
	{
		this.config()
	}
	config() : void
	{
		this.router.get('/', contactosController.listar)
		this.router.get('/:id',  contactosController.ContactoPorId)
		this.router.post('/', contactosController.crear)
		this.router.delete('/:id', contactosController.borrar)
		this.router.put('/:id', contactosController.actualizar)
	}
}

const agendasRoutes = new AgendasRoutes();

export default agendasRoutes.router;