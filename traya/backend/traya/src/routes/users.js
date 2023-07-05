const express = require("express");
const router = express.Router();

const {register, login, addAndEditReview} = require("../controllers/users") 

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/:email/add-review",).post(addAndEditReview);
router.route("/:email/edit-review",).post(addAndEditReview);


module.exports = router;