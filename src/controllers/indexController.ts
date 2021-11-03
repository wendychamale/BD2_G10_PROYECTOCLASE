import { Request, Response } from 'express';
import pool from '../database/database';

class IndexController {

    public index(req:Request, res:Response){
        console.log('Describe mano');
        res.json("Test!!!");
    }

    public async consulta_1(req:Request, res:Response):Promise<void>{
        const consulta1 = await pool.query('Select *from proyecto.consulta1');
        res.json(consulta1);
    }

    public async consulta_2(req:Request, res:Response):Promise<void>{
        const consulta2 = await pool.query('Select *from proyecto.consulta2');
        res.json(consulta2);
    }

    public async consulta_3(req:Request, res:Response):Promise<void>{
        const consulta3 = await pool.query('Select *from proyecto.consulta3');
        res.json(consulta3);
    }

    public async consulta_4(req:Request, res:Response):Promise<void>{
        const consulta4 = await pool.query('Select *from proyecto.consulta4');
        res.json(consulta4);
    }

    public async consulta_5(req:Request, res:Response):Promise<void>{
        console.log("prueba 5"); 
        res.json(true);
    }

    public async ranking(req:Request, res:Response):Promise<void>{
        const ranking = await pool.query('Select *from proyecto.tabla');
        let data = JSON.stringify(ranking);
        let obje = JSON.parse(data);
        let cont = 1;
        for(let i in obje){
            obje[i].posicion = cont;
            cont++;
            if(cont == 17){ cont = 1;}
        }
        res.json(obje);
    }

    public async login(req:Request, res:Response):Promise<void>{
        const respuesta = await pool.query('Select *from proyecto.Usuario u'
                        +' where u.correo = ?'
                        +' and u.pass = ?', [req.body.correo, req.body.pass]);
        if(respuesta.length == 0){
            res.send(false);
        }else{
            res.send(true);
        }
        console.log(respuesta);
    }

    public async registrarUsuario(req:Request, res:Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO proyecto.Usuario set ?',[req.body]);
        res.send(true);
    }
}

export const indexController = new IndexController();