"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactos_controller_1 = require("../controllers/contactos.controller");
class AgendasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contactos_controller_1.contactosController.listar);
        this.router.get('/:id', contactos_controller_1.contactosController.ContactoPorId);
        this.router.post('/', contactos_controller_1.contactosController.crear);
        this.router.delete('/:id', contactos_controller_1.contactosController.borrar);
        this.router.put('/:id', contactos_controller_1.contactosController.actualizar);
    }
}
const agendasRoutes = new AgendasRoutes();
exports.default = agendasRoutes.router;
