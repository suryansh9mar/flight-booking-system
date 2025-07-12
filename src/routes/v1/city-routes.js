const express = require("express");
const router = express.Router();
const { cityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

router.post("/", CityMiddleware.cityMiddleware, cityController.createCity);

router.get("/", cityController.getCity);

router.delete("/:id", cityController.deleteCity);

router.patch("/:id", cityController.updateCity);

module.exports = router;
