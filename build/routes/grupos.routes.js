"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupos_controller_1 = require("../controllers/grupos.controller");
class GruposRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', grupos_controller_1.gruposController.listar);
        this.router.get('/:id', grupos_controller_1.gruposController.GrupoPorId);
        this.router.post('/', grupos_controller_1.gruposController.crear);
        this.router.delete('/:id', grupos_controller_1.gruposController.borrar);
        this.router.put('/:id', grupos_controller_1.gruposController.actualizar);
    }
}
const gruposRoutes = new GruposRoutes();
exports.default = gruposRoutes.router;
