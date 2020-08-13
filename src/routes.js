import { Router } from 'express';

import User from './app/models/User'

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'felipe',
    cpf: 'defdrf',
    rg: 'defcrv',
    password_hash: '555655' 
  })

  return res.json(user);
})

export default routes;
