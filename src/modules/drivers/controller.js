import model from '../drivers/model.js'
import jwt from "../../lib/jwt.js";

export default {
  get: async (req, res) => {
    try {
      let result = jwt.verify(req.cookies.user);
      if (result == "active" || result == "super admin") {
        let data = await model.get();
        if (data.length) {
          res.json({
            status: 200,
            data,
          });
        }
      } else throw new Error("404");
    } catch (error) {
      res.json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  },

  post: async (req, res) => {
    try {
      let result = jwt.verify(req.cookies.user);
      if (result == "active" || result == "super admin") {
        let category = await model.post(req.body);
        if (category) {
          res.json({
            status: 201,
            message: "ADDED!",
            data: category,
          });
        }
      } else throw new Error("ERROR!");
    } catch (error) {
      res.json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  },

  put: async (req, res) => {
    try {
      let result = jwt.verify(req.cookies.user);
      if (result == "active" || result == "super admin") {
        let category = await model.put(req.body);
        if (category.length) {
          res.json({
            status: 201,
            message: "UPDATED!",
            data: category,
          });
        }
      } else throw new Error("Error!");
    } catch (error) {
      res.json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  },

  delete: async (req, res) => {
    try {
      let result = jwt.verify(req.cookies.user);
      if (result == "active" || result == "super admin") {
        let category = await model.delete(req.body);
        if (category) {
          res.json({
            status: 201,
            message: "DELETED!",
            data: category,
          });
        }
      } else throw new Error("ERROR!");
    } catch (error) {
      res.json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  },
};
