const inquirer = require("inquirer");
const fs = require("fs");

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
        console.log(answer);
    });