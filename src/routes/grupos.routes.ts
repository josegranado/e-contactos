import { Router} from 'express';
import { gruposController } from '../controllers/grupos.controller';
class GruposRoutes
{
	public router: Router = Router();
	constructor()
	{
		this.config()
	}
	config() : void
	{
		this.router.get('/', gruposController.listar)
		this.router.get('/:id',  gruposController.GrupoPorId)
		this.router.post('/', gruposController.crear)
		this.router.delete('/:id', gruposController.borrar)
		this.router.put('/:id', gruposController.actualizar)
	}
}

const gruposRoutes = new GruposRoutes();

export default gruposRoutes.router;