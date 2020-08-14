import jwt from 'jsonwebtoken'
import * as Yup from 'yup'

import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
  async store (req, res) {
    const schema = Yup.object().shape({
      cpf: Yup.string().required().min(11),
      password: Yup.string().required()
    })

    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { cpf, password } = req.body

    const user = await User.findOne({ where: { cpf } })

    if (!user) {
     
      return res.status(401).json({ error: 'User not found' })
    }

    if (!await user.checkPassword(password)) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
        cpf
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn
      })
    })
  }
}

export default new SessionController()