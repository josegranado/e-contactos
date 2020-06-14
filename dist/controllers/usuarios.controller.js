"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.usuariosController = void 0;
const database_1 = require("../database");
const uuid = __importStar(require("uuid"));
class UsuariosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield database_1.pool.query('SELECT * FROM usuarios');
                return res.status(200).json(response.rows);
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    UsuarioPorId(req, res) {
        res.json({ text: 'Get One' + req.params.id });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellido, email, password } = req.body;
            const api_token = uuid.v4();
            try {
                const response = yield database_1.pool.query('INSERT INTO usuarios (nombre,apellido,email,password,api_token) VALUES ($1, $2, $3, $4, $5)', [nombre, apellido, email, password, api_token]);
                return res.status(200).json({
                    message: 'Usuario creado exitosamente'
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error.' });
            }
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const { nombre } = req.body;
            try {
                const response = yield database_1.pool.query('UPDATE agendas SET name = $1 WHERE id = $2', [name, id]);
                return res.status(200).json({
                    message: 'Usuario borrado exitosamente'
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error.' });
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const { nombre } = req.body;
            try {
                const response = yield database_1.pool.query('UPDATE agendas SET name = $1 WHERE id = $2', [name, id]);
                return res.status(200).json({
                    message: 'Usuario borrado exitosamente'
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Internal server error.' });
            }
        });
    }
}
exports.usuariosController = new UsuariosController();
