INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Finance"),
       (3, "Legal"),
       (4, "Sales");

INSERT INTO role (id, title, department_id, salary)
VALUES (1, "Sales Lead", 4,  100000),
       (2, "Salesperson", 4, 80000),
       (3, "Lead Engineer", 1, 150000),
       (4, "Account Manager", 2, 120000),
       (5, "Accountant", 2, 160000),
       (6, "Software Engineer", 1, 125000),
       (7, "Legal Team Lead", 3, 250000),
       (8, "Lawyer", 3, 190000);  

INSERT INTO employee (id, first_name, last_name, role_id, ,manager_id)     
VALUES (1, "John", "Doe", 1),
       (2, "Mike", "Chan", 2, "Mike Chan"),
       (3, "Ashley", "Rodriquez", 3),
       (4, "Kevin", "Tupik", 4, "Ashely Rodriquz"),
       (5, "Kunal", "Singh", 5),
       (5, "Malia", "Brown", 6, "Kunal Singh"),
       (7, "Sarah", "Lourd", 7),
       (8, "Tom", "Allen", 8, "Sarah Lourd");  