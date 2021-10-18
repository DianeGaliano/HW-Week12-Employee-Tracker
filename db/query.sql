SELECT department.name AS department, roles.role
FROM roles
LEFT JOIN department
ON roles.department_id = department.id
ORDER BY employee.employee_id;
