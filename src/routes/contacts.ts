import { Router } from 'express';

import { ContactsControllers } from '../controllers/ContactsControllers';

const routes = Router();

routes.get('/:client', new ContactsControllers().findContacts);
routes.post('/:client', new ContactsControllers().saveContacts);

export default routes;
