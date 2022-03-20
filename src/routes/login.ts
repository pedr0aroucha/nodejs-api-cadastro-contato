import { Router } from 'express';

import { LoginController } from '../controllers/LoginController';

const routes = Router();

routes.post('/', new LoginController().execute);

export default routes;
