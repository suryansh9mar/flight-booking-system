const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");

router.get("/info", infoController.info);
router.use(
  "/airplane",
  require("./airplane-routes")
);
router.use(
  "/city",
  require("./city-routes")
);

module.exports = router;
