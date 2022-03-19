import { createConnections } from 'typeorm';
import path from 'path';
import { CreateContacts } from './migrations/Contacts';

let connections;

const entities = [path.resolve(__dirname, '../entities/*.ts')];

(async () => {
	try {
		connections = await createConnections([
			{
				name: 'macapa',
				username: process.env.MYSQL_USER,
				password: process.env.MYSQL_ROOT_PASSWORD,
				database: process.env.MYSQL_DATABASE,
				type: 'mysql',
				host: 'mysql',
				port: 3306,
				entities,
			},
			{
				name: 'varejao',
				username: process.env.POSTGRES_PASSWORD,
				password: process.env.POSTGRES_USER,
				database: process.env.POSTGRES_DB,
				type: 'postgres',
				host: 'postgresql',
				port: 5432,
				entities,
			},
		]);

		console.log('🏁 database connections created');

		new CreateContacts().up();
	} catch (error) {
		console.error(error.message);
		console.error('💥 error creating database connections');
	}
})();
