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
class MesaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesas = yield database_1.default.query('SELECT * FROM MESAS');
            res.json(mesas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const mesas = yield database_1.default.query('SELECT * FROM MESAS WHERE id = ?', [id]);
            if (mesas.length > 0) {
                return res.json(mesas[0]);
            }
            else {
                res.status(404).json({ text: 'la mesa no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO mesas set ?', [req.body]);
            res.json({ message: 'mesa creada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM mesas WHERE id = ?', [id]);
            res.json({ text: 'La mesa fue eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE mesas set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'La mesa fue Actualizada' });
        });
    }
}
const mesaController = new MesaController();
exports.default = mesaController;
