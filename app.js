const mysql = require("mysql");
const inquirer = require("inquirer");

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
				"Update existing employee",
				"Exit"
			]
		})
		.then((answer) => {
			switch (answer.action) {
				case "View departments":
					view("departments");
					break;
				case "View roles":
					view("roles");
					break;
				case "View employees":
					view("employees");
					break;
				case "Add a department":
					addDepartment();
					break;
				case "Add a role":
					addRole();
					break;
				case "Add an employee":
					addEmployee();
					break;
				case "Update existing employee":
					updateEmployee();
					break;
				case "Exit":
					connection.end();
					console.log("Goodbye");
			}
		});
}

// View Data Function. DB table name is passed in.
function view(type) {
	const query = `SELECT * FROM ${type}`;

	connection.query(query, (error, response) => {
		if (error) throw error;

		console.table(response);
		runApp();
	});
}

function addDepartment() {
	inquirer
		.prompt({
			name: "action",
			type: "input",
			message: "What's the name of the department you would like to add?"
		})
		.then((answer) => {
			const query = `INSERT INTO departments SET ?`;

			connection.query(
				query,
				{ name: answer.action },
				(error, response) => {
					if (error) throw error;

					return response;
				}
			);
			view("departments");
		});
}

function addRole() {
	inquirer.prompt([
		{
			name: "title",
			type: "input",
			message: "What's the name of the role?"
		},

		{
			name: "salary",
			type: "input",
			message: "What's the salary for the role?"
		},

		{
			name: "deptID",
			type: "list",
			message: "What department is the role being added to?",
			choices: ["Sales", "Engineering", "Finance", "Legal"]
		}
	]);
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
