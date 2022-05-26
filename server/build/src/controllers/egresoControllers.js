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
class EgresoController {
    listEgreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const egresos = yield database_1.default.query('SELECT * FROM egresos');
            res.json(egresos);
        });
    }
    getOneEgreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const egresos = yield database_1.default.query('SELECT * FROM egresos WHERE id = ?', [id]);
            if (egresos.length > 0) {
                return res.json(egresos[0]);
            }
            else {
                res.status(404).json({ text: 'el egreso no existe' });
            }
        });
    }
    createEgreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO egresos set ?', [req.body]);
            res.json({ message: 'egreso creado' });
        });
    }
    deleteEgreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM egresos WHERE id = ?', [id]);
            res.json({ text: 'El egreso fue eliminado' });
        });
    }
    updateEgreso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE egresos set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'El egreso fue Actualizado' });
        });
    }
}
const egresoController = new EgresoController();
exports.default = egresoController;
