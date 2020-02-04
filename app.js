var express = require("express");
var app = express();
app.use(express.json());
const port = 8080;

var StundentsRepository = require("./repositories/StudentsRepository");

app.get("/students", function(req, res) {
  StundentsRepository.getStudents().then(students => {
    console.log(students);
    res.json(students);
  });
});

app.post("/student", function(req, res) {
  console.log(req.body);
  StundentsRepository.postStudent(
    req.body.name,
    req.body.surname,
    req.body.class
  ).then(() => {
    res.sendStatus(201);
  });
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
