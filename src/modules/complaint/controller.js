import model from './model.js'

export default {
  get: async (req, res) => {
    try {
        let data = await model.get();
        if (data.length) {
          res.json({
            status: 200,
            data,
          });
      } else throw new Error("404");
    } catch (error) {
      res.json({
        status: 401,
        message: error.message,
        data: null,
      });
    }
  }
};