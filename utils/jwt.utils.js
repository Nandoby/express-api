const jsonWebToken = require("jsonwebtoken");

const jwt = {
  generate: ({ id, role }) => {
    return new Promise((resolve, reject) => {
      const { JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE } = process.env;
      const payload = { id, role };
      const secret = JWT_SECRET;
      const options = {
        algorithm: "HS256",
        expiresIn: "365d",
        audience: JWT_AUDIENCE,
        issuer: JWT_ISSUER,
      };

      jsonWebToken.sign(payload, secret, options, (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      });
    });
  },

  decode: (token) => {},
};

module.exports = jwt;
