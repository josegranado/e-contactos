"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactosController = void 0;
const database_1 = require("../database");
class ContactosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM contactos');
                return res.status(200).json(response.rows);
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    ContactoPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM contactos WHERE id = $1', [id]);
                return res.status(200).json(response.rows);
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO contactos (nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [nombre, apellido, email, numero_celular, numero_trabajo, direccion, agenda_id, grupo_id]);
                return res.status(200).json({
                    message: 'Contacto creado exitosamente'
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('DELETE FROM contactos WHERE id = $1', [id]);
                return res.status(200).json({
                    message: 'Contacto borrado extisotamente'
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const { nombre } = req.body;
            try {
                const response = yield database_1.pool.query('UPDATE contactos SET nombre = $1 WHERE id = $2', [nombre, id]);
                return res.status(200).json({ message: 'Contacto actualizado exitosamente' });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.contactosController = new ContactosController();
