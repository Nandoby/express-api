const yup = require("yup");

const createTrackValidator = yup.object({
  title: yup.string().max(100).trim().required(),
  duration: yup.number().positive().integer().required(),
  GenreId: yup.number().positive().integer().required(),
  albums: yup.array().of(yup.number().integer().positive()).required(),
  artists: yup
    .array()
    .of(
      yup.object({
        id: yup.number().positive().integer().required(),
        feat: yup.boolean(),
      })
    )
    .required(),
});

module.exports = createTrackValidator;
