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
    cpf: {type: 'string', required: true},
    rg: {type: 'string'},
    numeroCRM: {type: 'string', required: true},
    dataInsricaoCRM: {type: 'string', required: true},
    periodoValidadeCRM: {type: 'number', required: true},
    endereco: {type: 'json', required: true},
    especialidades: {collection: 'especialidade', via: 'profissionais'},
    areasDeAtuacao: {collection: 'areadeatuacao', via: 'profissionais'},
    consultas: {collection: 'consulta', via: 'profissional'},
    consultorio: {model: 'consultorio'}

  },

};

