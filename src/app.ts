import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';

import './database/';

import contacts from './routes/contacts';
import login from './routes/login';

import { AuthenticateToken } from './middlewares/AuthenticateToken';

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
		this.app.use(new AuthenticateToken().execute);
	}

	routes() {
		this.app.use('/contacts', contacts);
		this.app.use('/login', login);
	}
}

export default new App().app;
