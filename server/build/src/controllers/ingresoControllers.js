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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IngresoController {
    listIngreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingresos = yield database_1.default.query('SELECT * FROM ingresos');
            res.json(ingresos);
        });
    }
    getOneIngreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ingresos = yield database_1.default.query('SELECT * FROM ingresos WHERE id = ?', [id]);
            if (ingresos.length > 0) {
                return res.json(ingresos[0]);
            }
            else {
                res.status(404).json({ text: 'el ingreso no existe' });
            }
        });
    }
    createIngreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ingresos set ?', [req.body]);
            res.json({ message: 'ingreso creado' });
        });
    }
    deleteIngreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ingresos WHERE id = ?', [id]);
            res.json({ text: 'El ingreso fue eliminado' });
        });
    }
    updateIngreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE ingresos set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'El ingreso fue Actualizado' });
        });
    }
}
const ingresoController = new IngresoController();
exports.default = ingresoController;
