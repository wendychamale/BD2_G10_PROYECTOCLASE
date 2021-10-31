"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        this.router.get('/api/query1', indexController_1.indexController.consulta_1);
        this.router.get('/api/query2', indexController_1.indexController.consulta_2);
        this.router.get('/api/query3', indexController_1.indexController.consulta_3);
        this.router.get('/api/query4', indexController_1.indexController.consulta_4);
        this.router.get('/api/query5', indexController_1.indexController.consulta_5);
        this.router.get('/api/ranking', indexController_1.indexController.ranking);
        this.router;
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
