import { Router} from 'express';
import { agendasController } from '../controllers/agendas.controller';
class AgendasRoutes
{
	public router: Router = Router();
	constructor()
	{
		this.config()
	}
	config() : void
	{
		this.router.get('/', agendasController.listar)
		this.router.get('/:id',  agendasController.UsuarioPorId)
		this.router.post('/', agendasController.crear)
		this.router.delete('/:id', agendasController.borrar)
		this.router.put('/:id', agendasController.actualizar)
	}
}

const agendasRoutes = new AgendasRoutes();

export default agendasRoutes.router;