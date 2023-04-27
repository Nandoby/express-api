const { ObjectSchema } = require("yup");
const errorResponse = require("../utils/error.response");

/**
 *
 * @param {ObjectSchema} yupValidator
 * @returns
 */
const bodyValidators = (yupValidator) => {
  return async (req, res, next) => {
    try {
      // test que le validator est correct et reformate dans la variable valid data
      // noUnknown = enlève toutes les props dans le body inexistantes dans le validator
      // abortEarly => recupere toutes les erreurs avant de catch pour toutes les afficher
      const validData = await yupValidator
        .noUnknown()
        .validate(req.body, { abortEarly: false });

      req.body = validData;

      next();
    } catch (error) {
      res.status(400).json(new errorResponse(error.errors));
    }
  };
};

module.exports = bodyValidators;
