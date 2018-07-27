/**
 * Profissional.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {type: 'string', required: true},
    dataNascimento: {type: 'string', required: true},
    cpf: {type: 'string', unique: true, required: true},
    rg: {type: 'string'},
    numeroCRM: {type: 'string', unique: true, required: true},
    dataInsricaoCRM: {type: 'string', required: true},
    periodoValidadeCRM: {type: 'number', required: true},
    endereco: {type: 'json', required: true},
    // especialidades: {type: 'string', unique: true, required: true},
    // areasDeAtuacao: {type: 'string', unique: true, required: true},
    // consultas: {type: 'string', unique: true, required: true},
    consultorio: {model: 'consultorio'}

  },

};

