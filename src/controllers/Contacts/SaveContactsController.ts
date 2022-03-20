import { Request, Response } from 'express';

import { mask } from '../../helpers/mask';

import { ContactsServices } from '../../services/ContactsServices';

export class SaveContactsController {
	async execute(request: Request, response: Response) {
		try {
			const contactsServices = new ContactsServices();

			const { contacts } = request.body;
			const { client } = request.params;

			const allCreated = [];

			for await (const contact of contacts) {
				if (client === 'macapa')
					Reflect.defineProperty(contact, 'cellphone', {
						value: mask(contact.cellphone, '+## (##) ####-####'),
						enumerable: true,
						writable: true,
						configurable: true,
					});

				const created = await contactsServices.saveContacts(
					client,
					contact
				);

				allCreated.push(created);
			}

			return response.status(201).json(allCreated);
		} catch (error) {
			return response.status(400).json({ error: error.message });
		}
	}
}
