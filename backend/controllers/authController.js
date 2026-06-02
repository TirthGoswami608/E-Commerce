const bcrypt = require("bcryptjs");

const {
  findUserByEmail,
  createUser,
} = require("../models/authModel");




// ================= REGISTER =================

const registerUser = async (req, res) => {

  try {

    const {
      first_name,
      last_name,
      email,
      phone,
      password,
    } = req.body;

    // CHECK USER EXISTS

    findUserByEmail(email, async (err, result) => {

      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      // HASH PASSWORD

      const hashedPassword =
        await bcrypt.hash(password, 10);

      // CREATE USER

      createUser(
        first_name,
        last_name,
        email,
        phone,
        hashedPassword,

        (err, result) => {

          if (err) {
            return res.status(500).json({
              message: "Registration failed",
            });
          }

          res.status(201).json({
            message: "User registered successfully",
          });

        }
      );

    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

};


// LOGIN 

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK USER

    findUserByEmail(email, async (err, result) => {

      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const user = result[0];

      // COMPARE PASSWORD

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid password",
        });
      }

      // SUCCESS LOGIN

      res.status(200).json({
        message: "Login successful",
        user,
      });

    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

};

module.exports = {
  registerUser,
  loginUser,
};