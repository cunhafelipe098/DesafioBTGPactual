 
import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async store (req, res) {
    
    const user = await User.create(req.body)
    return res.json({
      id,
      name,
      email,
      provider
    })
  }
}

export default new UserController()
