import {Router} from 'express';
import indexController from './app/controllers/indexController';

const routes = new Router();

routes.get('/', indexController.index);
routes.get('/users', indexController.list);

export default routes;