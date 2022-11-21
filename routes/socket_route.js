const express = require("express");

function SocketRouter(io) {
  const router = express.Router();

  router.post("/changeLocation", (req, res) => {
    const id = req.body.id;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    if (!id || !latitude || !longitude) {
      res
        .json({
          message: "Require all three parameters",
        })
        .status(401);
    }

    io.emit("locationChange", {
      id: id,
      latitude: latitude,
      longitude: longitude,
    });

    //io.emit("locationChange", "working");

    console.log(id);
    res.json({
      message: "data delivered",    });

  });

  return router;
}

module.exports = SocketRouter;