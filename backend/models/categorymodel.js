const db = require("../Config/db");

const getcategorie = (callback) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, callback);
};

const addcategory = (data, callback) => {
  const { name, description } = data;
  const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(sql, [name, description], callback);
};

const editcatagory = (id, data, callback) => {
  const { name, description } = data;
  const sql = "UPDATE categories SET name = ?, description = ? WHERE id = ?";
  db.query(sql, [name, description, id], callback);
};

const removeca = (id, callback) => {
  const sql = "DELETE FROM categories WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  getcategorie,
  addcategory,
  editcatagory,
  removeca,
};
