const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors/index");

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    conole.log("first wahala");
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_sECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    console.log(error)
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = authenticationMiddleware;
