const mysql = require('mysql');

const connectDatabase = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    
    connection.connect(err => {
        if (err) {
            console.log(err);
        }
        console.log('MySQL connected: ' + connection.threadId);
    });
};

module.exports = connectDatabase;