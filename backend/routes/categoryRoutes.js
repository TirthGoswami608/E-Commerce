
const express = require("express");
const {
  getcategories,
  createcategory,
  updatecategory,
  deletecategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getcategories);
router.post("/", createcategory);
router.put("/:id", updatecategory);
router.delete("/:id", deletecategory);

module.exports = router;