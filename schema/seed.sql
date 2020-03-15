INSERT INTO departments
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Sales Lead", 90000, 1),
    ("Sales Rep", 70000, 1),
    ("Lead Engineer", 140000, 2),
    ("Software Engineer", 115000, 2),
    ("Lead Accountant", 120000, 3),
    ("Accountant", 90000, 3),
    ("Legal Team Lead", 130000, 4),
    ("Attorney", 110000, 4);

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Lynn", "James", 1, NULL),
    ("Clara", "Frost", 2, 1),
    ("Chaim", "Short", 3, NULL),
    ("Phineas", "Ferb", 4, 3),
    ("Phillipa", "Portillo", 5, NULL),
    ("Taylor", "Beattie", 6, 5),
    ("Darius", "Ferguson", 7, NULL),
    ("Hugh", "Mann", 8, 7);

