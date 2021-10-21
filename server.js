const inquirer = require("inquirer");
const fs = require("fs");
const express = require('express');

//Sequlize to protect my password
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//Quesions
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

    //function to init question requests
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

    