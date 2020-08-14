import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/trucate';

describe('document', () => {
  
  beforeEach(async () => {
    await truncate();
  });
  

  it('should return success', async () => {

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
      
    const res = await request(app)
      .post('/createDocument')
      .set('Authorization', `Bearer ${response.body.token}`)
      .send({
        name: 'Felipe Cunha',
        cpf: '10617797698',
        rg: '527843680',
        password: 'segredo123'
      });
  
      expect(res.status).toBe(200);
  });  
});