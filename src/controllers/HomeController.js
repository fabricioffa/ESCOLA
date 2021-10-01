import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Pereira',
      email: 'pedropereira@email.com',
      idade: '23',
      peso: '80',
      altura: '1.8',
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
