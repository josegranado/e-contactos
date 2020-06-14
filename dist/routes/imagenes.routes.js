"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenes_controller_1 = require("../controllers/imagenes.controller");
class ImagenesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', imagenes_controller_1.imagenesController.listar);
        this.router.get('/:id', imagenes_controller_1.imagenesController.ImagenPorId);
        this.router.post('/', imagenes_controller_1.imagenesController.crear);
        this.router.delete('/:id', imagenes_controller_1.imagenesController.borrar);
        this.router.put('/:id', imagenes_controller_1.imagenesController.actualizar);
    }
}
const imagenesRoutes = new ImagenesRoutes();
exports.default = imagenesRoutes.router;
