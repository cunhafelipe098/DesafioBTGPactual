import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize
      }
    )

    return this;
  }
}

export default User;