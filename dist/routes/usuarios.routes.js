"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarios_controller_1.usuariosController.listar);
        this.router.get('/:id', usuarios_controller_1.usuariosController.UsuarioPorId);
        this.router.post('/', usuarios_controller_1.usuariosController.crear);
        this.router.delete('/:id', usuarios_controller_1.usuariosController.borrar);
        this.router.put('/:id', usuarios_controller_1.usuariosController.actualizar);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
