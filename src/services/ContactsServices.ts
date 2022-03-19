import { getConnection } from 'typeorm';

import { ContactEntity } from '../entities/ContactEntity';

export class ContactsServices {
	async findContacts(client: string): Promise<ContactEntity[]> {
		const connection = await getConnection(client);

		const contactsRepository = connection.getRepository(ContactEntity);

		const contacts = await contactsRepository.find();

		return contacts;
	}

	async saveContacts(
		client: string,
		contact: ContactEntity
	): Promise<ContactEntity> {
		const connection = await getConnection(client);

		const contactsRepository = connection.getRepository(ContactEntity);

		const newContacts = await contactsRepository.save(contact);

		return newContacts;
	}
}
