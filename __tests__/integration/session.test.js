import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/trucate';

describe('Session', () => {
  
  beforeEach(async () => {
    await truncate();
  });
  

  it('should return Validation fails', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
          cpf: '1061',
          password: 'segredo123'
      });

      expect(response.status).toBe(400);
  });

  it('should return access data', async () => {

      await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843680',
          password: 'segredo123'
      });

    const response = await request(app)
      .post('/sessions')
      .send({
          cpf: '10617797698',
          password: 'segredo123'
      });

      expect(response.status).toBe(200);
  });

  it('should return User not found', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
          cpf: '10617797698',
          password: 'segredo123'
      });

      expect(response.status).toBe(401);
  });

  it('should return Password does not match', async () => {
      await request(app)
      .post('/users')
      .send({
          name: 'Felipe Cunha',
          cpf: '10617797698',
          rg: '527843680',
          password: 'segredo111'
      });

    const response = await request(app)
      .post('/sessions')
      .send({
          cpf: '10617797698',
          password: 'segredo123'
      });

      expect(response.status).toBe(401);
  });
  
});