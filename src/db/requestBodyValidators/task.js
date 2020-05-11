const Joi = require("@hapi/joi");

const schema = Joi.object({
  id: Joi.string().required(),
  login: Joi.string().required(),
  tasks: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      creationDate: Joi.number().required(),
      deadline: Joi.number().required(),
      completed: Joi.boolean().required(),
    }),
  ),
});

module.exports = schema;
