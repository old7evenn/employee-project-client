import { Form, Input } from 'antd'
import React from 'react'
import { InputProps } from '../../types'

export const CustomInput = ({ name, placeholder, type, dependencies }: InputProps) => {
	return !dependencies ? (
		<Form.Item
			name={name}
			shouldUpdate={true}
			rules={[{ required: true, message: 'Required field' }]}
		>
			<Input placeholder={placeholder} type={type} size='large' />
		</Form.Item>
	) : (
		<Form.Item
			name={name}
			shouldUpdate={true}
			dependencies={dependencies}
			hasFeedback
			rules={[
				{ required: true, message: 'Required field' },
				({ getFieldValue }) => ({
					validator(_, value) {
						if (!value) {
							return Promise.resolve()
						}
						if (name === 'confirmPassword') {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve()
							}
							return Promise.reject(
								new Error('The two password that you entered do not match!')
							)
						} else {
							if (value.length < 8) {
								return Promise.reject(new Error('Password min length 8'))
							}
							return Promise.resolve()
						}
					},
				}),
			]}
		>
			<Input.Password placeholder={placeholder} type={type} size='large' />
		</Form.Item>
	)
}
