"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const agendas_routes_1 = __importDefault(require("./routes/agendas.routes"));
const contactos_routes_1 = __importDefault(require("./routes/contactos.routes"));
const grupos_routes_1 = __importDefault(require("./routes/grupos.routes"));
const imagenes_routes_1 = __importDefault(require("./routes/imagenes.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        //this.app.use(morgan('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/agendas', agendas_routes_1.default);
        this.app.use('/api/contactos', contactos_routes_1.default);
        this.app.use('/api/grupos', grupos_routes_1.default);
        this.app.use('/api/imagenes', imagenes_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
