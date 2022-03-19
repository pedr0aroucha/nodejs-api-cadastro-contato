import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('contacts')
export class ContactEntity {
	@PrimaryColumn()
	id: number;

	@Column({ name: 'nome' })
	name: string;

	@Column({ name: 'celular', unique: true })
	cellphone: string;
}
