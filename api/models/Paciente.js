/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: { type: 'string', required: true },
    dataNascimento: { type: 'string', required: true },
    cpf: { type: 'string', required: true },
    endereco: { type: 'json', required: true },
    situacao: { type: 'boolean', required: true },
    consultas: { collection: 'consulta', via: 'paciente' }

  },

};

