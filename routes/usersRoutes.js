const express = require("express");
const router = express.Router();
const { getUser, saveUser } = require("../controllers/usersControllers")

router.get("/users", getUser);

router.post("/users", saveUser);

module.exports = router;