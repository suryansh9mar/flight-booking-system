const express = require("express");
const router = express.Router();
const { airplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

router.post(
  "/",
  AirplaneMiddleware.airplaneMiddleware,
  airplaneController.createAirplane
);

router.get("/", airplaneController.getAllAirplanes);

router.get("/:id", airplaneController.getAirplane);

router.delete("/:id", airplaneController.deleteAirplane);

router.patch("/:id", airplaneController.updateAirplane);

module.exports = router;
