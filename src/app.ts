import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';

import './database/';

import contacts from './routes/contacts';

class App {
	app: Express;

	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
	}

	routes() {
		this.app.use('/contacts', contacts);
	}
}

export default new App().app;
