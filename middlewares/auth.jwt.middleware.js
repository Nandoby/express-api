const { Request, Response, NextFunction } = require("express");
const jwt = require("../utils/jwt.utils");
const errorResponse = require("../utils/error.response");

const authJwt = () => {
  /**
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  return async (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken || bearerToken === "") {
      res.sendStatus(401);
      return;
    }

    const token = bearerToken.split(" ")[1];

    const payload = await jwt.decode(token);

    req.payload = payload;

    next();
  };
};

module.exports = authJwt;
