import express, { Application } from 'express';

import cors from 'cors';

import agendasRoutes from './routes/agendas.routes';
import contactosRoutes from './routes/contactos.routes';
import gruposRoutes from './routes/grupos.routes';
import imagenesRoutes from './routes/imagenes.routes';
class Server
{
	public app: Application;
	constructor()
	{
		this.app = express();
		this.config();
		this.routes();
	}
	config (): void
	{
		this.app.set('port', process.env.PORT || 4000);
		//this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false}));
		this.app.use(express.static('public'))
	}
	routes() : void
	{
		this.app.use('/api/agendas', agendasRoutes);
		this.app.use('/api/contactos', contactosRoutes);
		this.app.use('/api/grupos', gruposRoutes);
		this.app.use('/api/imagenes', imagenesRoutes );
		this.app.all('*', (req: any, res: any) => {
     		res.status(200).sendFile('index.html', { root: './public'});
		});
	}

	start(): void
	{
		this.app.listen(this.app.get('port'), () =>
		{
			console.log('Server on port', this.app.get('port'))
		})
	}
}

const server = new Server();
server.start();