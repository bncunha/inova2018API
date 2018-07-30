/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: { type: 'string' },
    dataNascimento: { type: 'string' },
    cpf: { type: 'string' },
    endereco: { type: 'json' },
    situacao: { type: 'boolean' },
    consultas: { collection: 'consulta', via: 'paciente' }

  },

};

