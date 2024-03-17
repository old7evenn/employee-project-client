import { ColumnsType } from "antd/es/table";
import { Employee } from "../../types";

export const columns: ColumnsType<Employee> = [
	{
		title: 'Name',
		dataIndex: 'firstName',
		key: 'firstName',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
]
