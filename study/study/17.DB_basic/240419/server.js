const mysql = require("mysql");
// const express=require("express");
// const morgan= require("morgan");
// const dotenv=require("dotenv");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "aws",
  password: "1234qwER!@",
  database: "AWS_test",
  //   ALTER USER aws IDENTIFIED WITH mysql_native_password BY '1234qwER!@'
});

connection.connect();

// connection.query("SHOW TABLES", (err, results, fields) => {
//   console.log("err :", err);
//   console.log("results:", results);
//   console.log("fieldes:", fields);//--->컬럼에대한정보
// });

// connection.query("SELECT*FROM aws_student", (err, results, fields) => {
//   console.log("err :", err);
//   console.log("results:", results);
//   console.log("fieldes:", fields); //--->컬럼에대한정보
// });

// console.log(mysql.Types);

// connection.query(
//   "INSERT INTO test (id,name,nick) VALUES (6,'testing','testing')",
//   (err, results, fields) => {
//     console.log("err :", err);
//     console.log("results:", results);
//     console.log("fieldes:", fields); //--->컬럼에대한정보
//   }
// );

// connection.query(
//   "INSERT INTO test (id,name,nick) VALUES (?,?,?)",
//   [8, "arr1", "arr1"],
//   (err, results, fields) => {
//     console.log("err :", err);
//     console.log("results:", results);
//     console.log("fieldes:", fields); //--->컬럼에대한정보
//   }
// );

const findInTest = (id) => {
  connection.query(
    "SELECT * FROM test WHERE id=?",
    [id],
    (err, results, fields) => {
      [id], console.log("err :", err);
      console.log("results:", results);
      console.log("fieldes:", fields); //--->컬럼에대한정보
    }
  );
};

findInTest(3);
connection.end();
