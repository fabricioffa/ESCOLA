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
      const users = await User.findall();
      res.json(users);
    } catch (e) {
      res.json(null);
    }
  }
  //  SHOW

  //  UPDATE

  //  DELETE

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
