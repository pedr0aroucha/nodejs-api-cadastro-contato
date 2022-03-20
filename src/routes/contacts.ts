import { Router } from 'express';

import { FindContactsController } from '../controllers/Contacts/FindContactsController';
import { SaveContactsController } from '../controllers/Contacts/SaveContactsController';

const routes = Router();

routes.get('/:client', new FindContactsController().execute);
routes.post('/:client', new SaveContactsController().execute);

export default routes;
