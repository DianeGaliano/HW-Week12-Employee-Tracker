const inquirer = require("inquirer");
const fs = require("fs");
const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');
const { update } = require("lodash");
const { connect } = require("http2");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

inquirer
    .promt ([
        {
            type: "checkbox",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View all roles",
                "View all departments",
                "Add department",
                "Quit",
            ]        
        },
    ])

    .then(function(answer){
        if (answer.action === "View all employees") {
          viewEmployee();
        }else if (answer.action === "Add Employee") {
          addEmployee();
        }else if (answer.action === "Update Employee Role") {
          updateRole();
        }else if (answer.action === "View all Roles") {
          viewRoles();
        }else if (answer.action === "View all Departments") {
          viewDempartments();
        }else if (answer.action === "Add Department") {
          addDepartment();
        }else if (answer.action == "Quit") {
          connection.end();
        }
    });