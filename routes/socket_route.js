const express = require("express");

function SocketRouter(io) {
  const router = express.Router();

  router.post("/changeLocation", (req, res) => {
    const id = req.body.id;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const route = req.body.route;
    const availableSeat = req.body.availableSeat;

    if (!id || !latitude || !longitude || !route || !availableSeat) {
      res
        .json({
          message: "Require all parameters",
        })
        .status(401);
    }

    io.emit("locationChange", {
      id: id,
      latitude: latitude,
      longitude: longitude,
      route : route,
      availableSeat : availableSeat
    });

    //io.emit("locationChange", "working");

    console.log(id);
    res.json({
      message: "data delivered",    });

  });

  return router;
}

module.exports = SocketRouter;