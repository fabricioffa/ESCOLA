import jwt from 'jsonwebtoken';
import User from '../models/User';

require('dotenv').config();

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ['Credenciais inválidas'] });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400)
          .json({ errors: ['E-mail não cadastrado'] });
      }

      if (!await user.passwordIsValid(password)) {
        return res.status(401)
          .json({ errors: ['Senha inválida'] });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_LIFESPAN,
      });

      return res.send({ token });
    } catch (e) {
      return console.error(e);
    }
  }
}

export default new TokenController();
