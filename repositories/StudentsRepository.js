const sqlite3 = require("sqlite3").verbose();

// open the database
const dbName = "database.db";
module.exports = {
  getStudents() {
    let db = new sqlite3.Database(dbName);

    return new Promise((resolve, reject) => {
      let sql = `SELECT rowid,* FROM students`;

      db.all(sql, [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });

      db.close();
    });
  },
  postStudent(name, surname, class_) {
    let db = new sqlite3.Database(dbName);

    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO students(name,surname,class) VALUES(?,?,?)`;

      db.run(sql, [name, surname, class_], function(err) {
        if (err) reject(err);
        resolve();
      });

      db.close();
    });
  }
};
