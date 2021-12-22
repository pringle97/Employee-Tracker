const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const cTable = require("console.table");
const mysql = require('mysql2');
//maybe capitalize tracker
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employeetracker_db');

const startPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Choose an option'
      choices: ['View Employees', 'View Departments', 'View Roles', 'Add Employee', 'Add Role', 'Add Department', 'Update Employee', 'Leave'],
    }
  ])
  .then(({ choice }) => {
    switch (choice) {
      case 'View Employees':
        viewEmployees()
        
        break;
      
      case 'View Departments':
        viewDepartments()

        break;

      case 'View Roles': 
        viewRoles()

        break;

      case 'Add Employee': 
        addEmployee()

        break;

      case 'Add Role':
        addRole()

        break;

      case 'Add Department':
        addDepartment()

        break;

      case 'Update Employee':
        updateEmployee()

        break;

      case 'Leave':
        leave()

        break;
      
    }
  })
}

startPrompt()

//function for viewing employees
function viewEmployees() {
  db.query('SELECT * FROM employee', (err, employee) => {
    if (err) {console.log(err) }
    console.table(employee)
    startPrompt()
  })
}

function viewDepartments() {
  db.query('SELECT * FROM department', (err, department) => {
    if (err) { console.log(err) }
    console.table(department)
    startPrompt()
  })
}

function viewRoles() {
  db.query('SELECT * FROM role')
  if (err) { console.log(err) }
  console.table(role)
  startPrompt()
} 

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter employee first name'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter employee last name'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter employee role ID'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter employee manager ID'
    }
  ])

  .then(newEmployee => {
    console.log(newEmployee)
    db.query('INSERT INTO employee SET ?', newEmployee, err => {
      if (err) { console.log(err) }
      console.log('employee added successfully!')
      startPrompt()
    })
  })
  
}

function addRole () {
  inquirer.prompt({
    {
      type: 'input',
      name: 'title',
      message: 'Enter employee title'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter employee salary'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter employee department ID'
    }
  })
  .then(newRole => {
    console.log(newRole)
    db.query('INSERT INTO role SET ?', newRole, err => {
    if (err) { console.log(err) }
    console.log('new role added!')
    startPrompt()
    })
  })
}

function addDepartment () {
  inquirer.prompt({
    {
      type: 'input',
      name: 'name',
      message: 'Enter name of new department'
    }
  })
  .then(newDepartment => {
    
  })
  if (err) { console.log(err) }
}

function updateEmployee () {

  if (err) { console.log(err) }
}

function leave () {

}