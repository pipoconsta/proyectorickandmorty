const getCharById = require("../controllers/getCharById")
const router = require("express").Router()
const login =require("../controllers/login")
const postUser = require("../controllers/postUser")
const postFavs = require("../controllers/postFavs")
const deleteFav = require("../controllers/deleteFav")

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFavs);
router.delete("/fav/:id", deleteFav);


module.exports = router;
