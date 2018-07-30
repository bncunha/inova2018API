/**
 * Consulta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: { 
    data: { type: 'string' },
    horario: { type: 'string' },
    situacao: { type: 'number' },
    consultorio: {model: 'consultorio'},
    profissional: {model: 'profissional'},
    paciente: {model: 'paciente'}

  },

};

