import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export class LoginController {
	async execute(req: Request, res: Response) {
		const { username } = req.body;

		const token = jwt.sign(username, process.env.TOKEN_SECRET);

		return res.json({ token });
	}
}
