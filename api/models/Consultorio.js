/**
 * Consultorio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    razaoSocial: {type: 'string', unique: true, required: true},
    nomeFantasia: {type: 'string', required: true},
    cnpj: {type: 'string', unique: true, required: true},
    endereco: {type: 'json'},
    emails: {type: 'json', columnType: 'array'},
    telefones: {type: 'json', columnType: 'array'},
    profissionais: {collection: 'profissional', via: 'consultorio'}
  },

};

