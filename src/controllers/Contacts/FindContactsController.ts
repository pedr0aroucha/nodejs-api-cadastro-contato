import { Request, Response } from 'express';

import { ContactsServices } from '../../services/ContactsServices';

export class FindContactsController {
	async execute(request: Request, response: Response) {
		try {
			const contactsServices = new ContactsServices();

			const contacts = await contactsServices.findContacts(
				request.params.client as string
			);

			return response.json(contacts);
		} catch (error) {
			return response.status(400).json({ error: error.message });
		}
	}
}
