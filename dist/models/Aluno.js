"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Sobrenome deve ter entre 2 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'Sobrenome deve ter entre 5 e 255 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Already registered e-mail.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid e-mail.',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'Must be integer.',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'Must be integer or float.',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'Must be integer or float.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
