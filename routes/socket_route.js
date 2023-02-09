const express = require("express");
let locationSchema = require('../models/location_model');

function SocketRouter(io) {
  const router = express.Router();

  router.post("/changeLocation", (req, res) => {


    const result = locationSchema.validate(req.body);

    if (result.error) {

      return res.json({
        message: "Invalid Request",
        error: result.error.details
      })
        .status(401);
    }

    io.emit("locationChange", result.value);

    return res.json({
      message: "data delivered",
    }).status(200);

  });

  return router;
}

module.exports = SocketRouter;