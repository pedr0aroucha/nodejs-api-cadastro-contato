import { MigrationInterface, QueryRunner, getConnection } from 'typeorm';

import { readFileSync } from 'fs';

import { resolve } from 'path';

import '../index';

export class CreateContacts implements MigrationInterface {
	public async up(): Promise<void> {
		const queryRunnerMacapa: QueryRunner =
			getConnection('macapa').createQueryRunner();
		const queryRunnerVarejao: QueryRunner =
			getConnection('varejao').createQueryRunner();

		const queryVarejao = readFileSync(
			resolve(__dirname, '..', 'sql', 'create-table-varejao.sql'),
			'utf-8'
		);

		const queryMacapa = readFileSync(
			resolve(__dirname, '..', 'sql', 'create-table-macapa.sql'),
			'utf-8'
		);

		await queryRunnerMacapa.query(queryMacapa);
		await queryRunnerVarejao.query(queryVarejao);
	}

	public async down(): Promise<void> {
		const queryRunnerMacapa: QueryRunner =
			getConnection('macapa').createQueryRunner();
		const queryRunnerVarejao: QueryRunner =
			getConnection('varejao').createQueryRunner();

		const query = `DROP TABLE contacts;`;

		await queryRunnerMacapa.query(query);
		await queryRunnerVarejao.query(query);
	}
}
