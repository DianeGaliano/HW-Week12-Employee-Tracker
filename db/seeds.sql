INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (title, department_id, salary)
VALUES ("Sales Lead", 4, 100000),
       ("Salesperson", 4, 8000),
       ("Lead Engineer", 1, 150000),
       ("Software Engineer", 1, 120000),
       ("Account Manager", 2, 160000),
       ("Accountant", 2, 125000),
       ("Legal Team Lead", 3, 250000),
       ("Lawyer", 3, 190000);  

INSERT INTO employee (first_name, last_name, roles_id)     
VALUES ("John", "Doe", 1),
       ("Mike", "Chan", 2),
       ("Ashley", "Rodriquez", 3),
       ("Kevin", "Tupik", 4),
       ("Kunal", "Singh", 5),
       ("Malia", "Brown", 6),
       ("Sarah", "Lourd", 7),
       ("Tom", "Allen", 8);  