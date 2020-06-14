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
exports.agendasController = void 0;
const database_1 = require("../database");
class AgendasController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM agendas');
                return res.status(200).json(response.rows);
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    UsuarioPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const response = yield database_1.pool.query('SELECT * FROM agendas WHERE id = $1', [id]);
                return res.status(200).json(response.rows);
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.body;
            try {
                const response = yield database_1.pool.query('INSERT INTO agendas (nombre) VALUES ($1)', [nombre]);
                return res.status(200).json({
                    message: 'Agenda creado exitosamente'
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
                const response = yield database_1.pool.query('DELETE FROM agendas WHERE id = $1', [id]);
                return res.status(200).json({
                    message: 'Agenda borrada exitosamente'
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
                const response = yield database_1.pool.query('UPDATE agendas SET nombre = $1 WHERE id = $2', [nombre, id]);
                return res.status(200).json({ message: 'Agenda actualizada exitosamente' });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.agendasController = new AgendasController();
