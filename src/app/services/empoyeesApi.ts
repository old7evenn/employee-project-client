import { api } from './api'
import { Employee } from '../../types'

export const employeesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllEmloyees: builder.query<Employee[], void>({
			query: () => ({
				url: '/employees',
				method: 'GET',
			}),
		}),
		getEmloyee: builder.query<Employee, string>({
			query: id => ({
				url: `/employees/${id}`,
				method: 'GET',
			}),
		}),
		editEmloyee: builder.mutation<string, Employee>({
			query: employee => ({
				url: `/employees/edit/${employee.id}`,
				method: 'PUT',
        body: employee
			}),
		}),
		removeEmloyee: builder.mutation<string, string>({
			query: id => ({
				url: `/employees/remove/${id}`,
				method: 'POST',
			}),
		}),
		addEmloyee: builder.mutation<Employee, Employee>({
			query: employee => ({
				url: `/employees/add`,
				method: 'POST',
				body: employee ,
			}),
		}),
	}),
})

export const {
	useAddEmloyeeMutation,
	useEditEmloyeeMutation,
	useGetAllEmloyeesQuery,
	useGetEmloyeeQuery,
	useRemoveEmloyeeMutation,
} = employeesApi

export const {endpoints: {addEmloyee, removeEmloyee, editEmloyee, getAllEmloyees, getEmloyee}} = employeesApi