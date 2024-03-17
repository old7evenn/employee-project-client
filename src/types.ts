import { NamePath } from "antd/es/form/interface"

export type ErrorWhithMessage = {
  status: number,
  data: {
    message: string
  }
}

export type Props = {
	children: React.ReactNode
	htmlType?: 'button' | 'submit' | 'reset' | undefined
	onClick?: () => void
	type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | 'ghost' | undefined
	danger?: boolean
	loading?: boolean
	shape?: 'default' | 'circle' | 'round' | undefined
	icon?: React.ReactNode
}

export type ErrorProps = {
  messageError?: string
}

export type InputProps = {
	name: string
	placeholder: string
  type?: string
	dependencies?: NamePath[]
}

export type EmployeeFormProps<T> = {
  onFinish: (vaoues: T) => void
  btnText: string
  title: string
  error?: string
  employee?: T 
}

export type UserData = {
	name: string
	email: string
	password: string
	id: string
}

export type RregisterData = Omit<UserData, 'id'> & {confirmPassword: string}

export type Employee = {
  id: string
  firstName: string
  lastName: string
  age: string
  address: string
  userId: string
}

export interface InitialStateEmployee {
  employees: Employee[] | null
}

export interface InitialStateUser {
  user: UserData & {token: string} | null
  isAuthenticated: boolean
}