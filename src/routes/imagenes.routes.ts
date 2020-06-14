import { Router} from 'express';
import { imagenesController } from '../controllers/imagenes.controller';
class ImagenesRoutes
{
	public router: Router = Router();
	constructor()
	{
		this.config()
	}
	config() : void
	{
		this.router.get('/', imagenesController.listar)
		this.router.get('/:id',  imagenesController.ImagenPorId)
		this.router.post('/', imagenesController.crear)
		this.router.delete('/:id', imagenesController.borrar)
		this.router.put('/:id', imagenesController.actualizar)
	}
}

const imagenesRoutes = new ImagenesRoutes();

export default imagenesRoutes.router;