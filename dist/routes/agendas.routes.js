"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendas_controller_1 = require("../controllers/agendas.controller");
class AgendasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', agendas_controller_1.agendasController.listar);
        this.router.get('/:id', agendas_controller_1.agendasController.UsuarioPorId);
        this.router.post('/', agendas_controller_1.agendasController.crear);
        this.router.delete('/:id', agendas_controller_1.agendasController.borrar);
        this.router.put('/:id', agendas_controller_1.agendasController.actualizar);
    }
}
const agendasRoutes = new AgendasRoutes();
exports.default = agendasRoutes.router;
