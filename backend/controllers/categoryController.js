
 const {
  getcategorie,
  addcategory,
  editcatagory,
  removeca,
} = require("../models/categorymodel");

const getcategories = async (req, res) => {
  getcategorie((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching categories" });
    }
    return res.status(200).json({
      message: "Categories fetched successfully",
      data: results,
    });
  });
};

const createcategory = async (req, res) => {
  const { name, description } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Category name is required" });
  }

  addcategory({ name: name.trim(), description: description || "" }, (err, results) => {
    if (err) {
      console.error("Category creation failed:", err);
      return res.status(500).json({
        message: "Error creating category",
        error: err.message || err,
      });
    }
    return res.status(200).json({
      message: "Category created successfully",
      data: results,
    });
  });
};

const updatecategory = async (req, res) => {
  const { id } = req.params;

  editcatagory(id, req.body, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error updating category" });
    }
    return res.status(200).json({
      message: "Category updated successfully",
      data: results,
    });
  });
};

const deletecategory = async (req, res) => {
  const { id } = req.params;

  removeca(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error deleting category" });
    }
    return res.status(200).json({
      message: "Category deleted successfully",
      data: results,
    });
  });
};

module.exports = {
  getcategories,
  createcategory,
  updatecategory,
  deletecategory,
};
