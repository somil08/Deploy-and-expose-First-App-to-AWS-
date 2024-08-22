const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isRiviewAuthor,} = require("../middleware.js");
const reviewController = require("../controllers/review.js");
// review post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.addReview)
);
// review Add route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isRiviewAuthor,
  wrapAsync(reviewController.destroyReview)
);
module.exports = router;
