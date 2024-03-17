import {  useState } from 'react'
import { Container } from '../../componets/container/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditEmloyeeMutation, useGetEmloyeeQuery } from '../../app/services/empoyeesApi'
import { Loading } from '../../componets/loading/Loading'
import { Row } from 'antd'
import { EmployeeForm } from '../../componets/employeeForm/EmployeeForm'
import { Employee } from '../../types'
import { Paths } from '../../router/paths'
import { isErrorWithMessage } from '../../utils/isErrorMessage'
import { Status } from '../status/Status'

export const EditEmployee = () => {
  const navigate = useNavigate()
  const params = useParams<{id: string}>()
  const [error, setError] = useState('')
  const { data, isLoading } = useGetEmloyeeQuery(params.id || '')
  const [editEmployee] = useEditEmloyeeMutation()
  const [status, setStatus] = useState('')

  if (isLoading) return <Loading/>

  const handleEditEmployee = async (employee: Employee) => {
    setStatus('Employee edit')
    setTimeout(() => {
      setStatus('')
    }, 2000)
    try {
      const editedEmployee = {
        ...data, 
        ...employee
      }
      
      await editEmployee(editedEmployee).unwrap()
      navigate(Paths.home)
    } catch (err) {
      const maybeError = isErrorWithMessage(err)
      if (maybeError) setError(err.data.message)
      setError('ERROR')
    }
  }
  
  return (
    <Container>
      <Row align='middle' justify='center'>
        <EmployeeForm
          title='Edit employee' 
          btnText='EDIT'
          error={error}
          employee={data}
          onFinish={handleEditEmployee}
        />
      </Row>
      <Status messageStatus={status}/>
    </Container>
  )
}
