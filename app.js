const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "employeesDB"
});

connection.connect((err) => {
	if (err) throw err;

	runApp();
});

function runApp() {
	inquirer
		.prompt({
			name: "action",
			type: "list",
			message: "What would you like to do?",
			choices: [
				"View departments",
				"View roles",
				"View employees",
				"Add a department",
				"Add a role",
				"Add an employee",
				"Update existing employee"
			]
		})
		.then((answer) => {
			switch (answer.action) {
				case "View departments":
					viewDepartments();
					break;
				case "View roles":
					break;
				case "View employees":
					break;
				case "Add a department":
					break;
				case "Add a role":
					break;
				case "Add an employee":
					break;
				case "Update existing employee":
					break;
			}
		});
}

function viewDepartments() {
	const query = "SELECT * FROM departments";

	connection.query(query, (error, response) => {
		if (error) throw error;

		console.table(response);
	});
}

// Required
//     View departments
//     View roles
//     View employees
//     Add department
//     Add role
//     Add Employee
//     Update Employee

/** Optional
 *      Update employee manager
 *      view employees by manager
 *      Delete departments, roles, and employees
 *      View total utilized budget of a dept -- combined salary of dept
 */
