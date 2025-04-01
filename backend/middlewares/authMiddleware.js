import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized token failed");
    }
  } else {
    res.status(401);
    throw new Error("not authorized no token");
  }
});

const authorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("not authorized admin");
  }
};

export { authenticate, authorizedAdmin };
