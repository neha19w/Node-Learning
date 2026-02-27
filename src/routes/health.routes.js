const router = require("express").Router();
const { healthCheck } = require("../controllers/health.controller.js");

router.get("/health", healthCheck);

module.exports = router;