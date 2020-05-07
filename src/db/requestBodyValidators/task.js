const Joi = require("@hapi/joi");

const schema = Joi.object({
  id: Joi.string().required(),
  login: Joi.string().required(),
  task: Joi.object({
    title: Joi.string().required(),
    createdData: Joi.string().required(),
    deadline: Joi.string().required(),
  }),
});

module.exports = schema;
