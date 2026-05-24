const db = require("../Config/db");

// find user by email

const findUserByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        // return the full results array so callers can check length
        callback(null, results);
    });
};

// create user

const createUser = (first_name, last_name, email, phone, password, callback) => {
    db.query(
        'INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, phone, password],
        callback
    );
};

module.exports = {
    findUserByEmail,
    createUser
};