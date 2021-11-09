import model from "../users/model.js";

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
      console.error(error);
    }
  }
};
