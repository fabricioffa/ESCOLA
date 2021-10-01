import User from '../models/User';

class UserController {
  // POST
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({ novoUser });
    } catch (e) {
      return res.status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
  //  INDEX

  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (e) {
      res.json(null);
    }
  }
  //  SHOW

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  //  UPDATE

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.json({
          errors: ['O usuário não existe'],
        });
      }

      const userUpdated = await user.update(req.body);

      return res.json(userUpdated);
    } catch (e) {
      return res.status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  //  DELETE

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.json({
          errors: ['O usuário não existe'],
        });
      }

      await user.destroy();

      return res.send('Usuário removido com sucesso');
    } catch (e) {
      return res.status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  //  SHOW
}

export default new UserController();

/*
index --> lista todos os usuários --> GET
store/create --> cria um usuário --> POST
delete --> apaga um usuário --> DELETE
show --> mostra um usuário --> GET
update --> atualiza um usuário --> PATCH ou PUT
*/
