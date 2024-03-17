import React from 'react'
import { Employee, EmployeeFormProps } from '../../types'
import { Card, Form, Space } from 'antd'
import { CustomInput } from '../customInput/CustomInput'
import { ErrorMessage } from '../errorMessage/ErrorMessage'
import { CustomButton } from '../customButon/CustomButton'

export const EmployeeForm = ({
	onFinish,
	title,
	btnText,
	error,
	employee,
}: EmployeeFormProps<Employee>) => {
	return (
		<Card title={title} style={{ width: '30rem' }}>
			<Form name='employeeForm' onFinish={onFinish} initialValues={employee}>
				<CustomInput type='text' name='firstName' placeholder='Firtst name' />
				<CustomInput type='text' name='lastName' placeholder='Last name' />
				<CustomInput type='number' name='age' placeholder='Age' />
				<CustomInput type='text' name='address' placeholder='Address' />
        <Space>
          <ErrorMessage messageError={error}/>
          <CustomButton htmlType='submit'>{btnText}</CustomButton>
        </Space>
			</Form>
		</Card>
	)
}
