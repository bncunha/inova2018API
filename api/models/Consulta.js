/**
 * Consulta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: { 
    data: { type: 'string', required: true },
    horario: { type: 'string', required: true },
    situacao: { type: 'number', required: true },
    consultorio: {model: 'consultorio', required: true},
    profissional: {model: 'profissional', required: true},
    paciente: {model: 'paciente', required: true}

  },

};

