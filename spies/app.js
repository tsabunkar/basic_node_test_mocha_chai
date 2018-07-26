const db = require('./db')

module.exports.handleSignup = (email, password) => {
    //check the email already exist
    db.saveUser({
        email: email,
        password: password
    })
    //save the user to DB
    //send the welcome email
}