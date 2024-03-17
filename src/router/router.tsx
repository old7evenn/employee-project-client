import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Paths } from './paths'
import { Register } from '../pages/register/Register'
import { Employees } from "../pages/employees/Employees";
import { EmployeeAdd } from "../pages/employeeAdd/EmployeeAdd";
import { Employee } from "../pages/employee/Employee";
import { EditEmployee } from "../pages/editEmployee/EditEmployee";

export const routerPager = createBrowserRouter([
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
	{
		path: `${Paths.employeeEdit}/:id`,
		element: <EditEmployee/>
	},
	{
		path: Paths.employeeAdd,
		element: <EmployeeAdd />,
	},
	{
		path: Paths.home,
		element: <Employees />,
	},
	{
		path: `${Paths.employee}/:id`,
		element: <Employee/>,
	},
])
