"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Picture = require('../models/Picture'); var _Picture2 = _interopRequireDefault(_Picture);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
        include: {
          model: _Picture2.default,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoUpdated = await aluno.update(req.body);

      return res.json(alunoUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.json({ errors: ['Missing ID'] });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
        include: {
          model: _Picture2.default,
          attributes: ['filename', 'url'],
        },
      });

      if (!aluno) {
        return res.json({ errors: ['Aluno não existe'] });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.json({ errors: ['Missing ID'] });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.json({ errors: ['Aluno não existe'] });
      }

      await aluno.destroy();

      return res.json('Successfuly deleted');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new AlunoController();
