const express = require("express")
const validationToken = require("../middleware/validateTokenHandeler")

const router = express.Router();

const {registerUser,loginUser,currentUser} = require("../controllers/userControllers")

<<<<<<< HEAD
router.post("/register",registerUser).post("/login",loginUser);
=======
router.post("/register",registerUser);

router.post("/login",loginUser);
>>>>>>> 3c13f692b9f231ada8433d8752ec2236dc1761ef

router.get("/current",validationToken,currentUser);

module.exports = router;