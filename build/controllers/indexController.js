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
exports.indexController = void 0;
const database_1 = __importDefault(require("../database/database"));
class IndexController {
    index(req, res) {
        console.log('Describe mano');
        res.json("Test!!!");
    }
    consulta_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta1 = yield database_1.default.query('Select *from proyecto.consulta1');
            res.json(consulta1);
        });
    }
    consulta_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta2 = yield database_1.default.query('Select *from proyecto.consulta2');
            res.json(consulta2);
        });
    }
    consulta_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta3 = yield database_1.default.query('Select *from proyecto.consulta3');
            res.json(consulta3);
        });
    }
    consulta_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta4 = yield database_1.default.query('Select *from proyecto.consulta4');
            res.json(consulta4);
        });
    }
    consulta_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("prueba 5");
            res.json(true);
        });
    }
    ranking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ranking = yield database_1.default.query('Select *from proyecto.tabla');
            let data = JSON.stringify(ranking);
            let obje = JSON.parse(data);
            let cont = 1;
            for (let i in obje) {
                obje[i].posicion = cont;
                cont++;
                if (cont == 17) {
                    cont = 1;
                }
            }
            res.json(obje);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('Select *from proyecto.Usuario u'
                + ' where u.correo = ?'
                + ' and u.pass = ?', [req.body.correo, req.body.pass]);
            if (respuesta.length == 0) {
                res.send(false);
            }
            else {
                res.send(true);
            }
            console.log(respuesta);
        });
    }
    registrarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO proyecto.Usuario set ?', [req.body]);
            res.send(true);
        });
    }
}
exports.indexController = new IndexController();
