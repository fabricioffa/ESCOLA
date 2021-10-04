"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // POST
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
  //  INDEX

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(users);
    } catch (e) {
      res.json(null);
    }
  }
  //  SHOW

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  //  UPDATE

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.json({
          errors: ['O usuário não existe'],
        });
      }

      const { id, nome, email } = await user.update(req.body);

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  //  DELETE

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

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

exports. default = new UserController();

/*
index --> lista todos os usuários --> GET
store/create --> cria um usuário --> POST
delete --> apaga um usuário --> DELETE
show --> mostra um usuário --> GET
update --> atualiza um usuário --> PATCH ou PUT
*/
