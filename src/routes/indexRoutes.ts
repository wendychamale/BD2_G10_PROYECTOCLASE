import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
        this.router.get('/api/query1', indexController.consulta_1);
        this.router.get('/api/query2', indexController.consulta_2);
        this.router.get('/api/query3', indexController.consulta_3);
        this.router.get('/api/query4', indexController.consulta_4);
        this.router.get('/api/query5', indexController.consulta_5);
        this.router.get('/api/ranking', indexController.ranking);

        this.router
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
