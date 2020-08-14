import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async store (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required().min(11),
      rg: Yup.string().required().min(9),
      password: Yup.string().required().min(6)
    })

    if (!await schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const cpfExists = await User.findOne({ where: { cpf: req.body.cpf } })

    if (cpfExists) {
      return res.status(400).json({ error: 'CPF already exists.' })
    }

    const rgExists = await User.findOne({ where: { rg: req.body.rg } })

    if (rgExists) {
      return res.status(400).json({ error: 'RG already exists.' })
    }

    const { id, name } = await User.create(req.body)

    return res.json({
      id,
      name,
    })
  }
}

export default new UserController()
