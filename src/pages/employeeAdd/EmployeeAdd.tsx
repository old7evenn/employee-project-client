import  { useEffect, useState } from 'react'
import { Container } from '../../componets/container/Container'
import { Row } from 'antd'
import { EmployeeForm } from '../../componets/employeeForm/EmployeeForm'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useAddEmloyeeMutation } from '../../app/services/empoyeesApi'
import { Paths } from '../../router/paths'
import { Employee } from '../../types'
import { isErrorWithMessage } from '../../utils/isErrorMessage'
import { Status } from '../status/Status'

export const EmployeeAdd = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [status, setStatus] = useState('')


  const [addEmployee] = useAddEmloyeeMutation()
  
  useEffect(() => {
    if (!user) navigate(Paths.login)
  }, [navigate, user])
 
  const handleAddEmployee = async (data: Employee) => {
    setStatus('Employee add')
		setTimeout(() => {
			setStatus('')
		}, 2000)
    try {
      await addEmployee(data).unwrap()
      navigate(Paths.home)
    } catch (error) {
      const maybeError = isErrorWithMessage(error)
      if (maybeError) setError(error.data.message)
      setError('ERROR')
    }
  }
  return (
    <Container>
      <Row
        align='middle'
        justify='center'
      >
        <EmployeeForm title='Add employee' btnText='Add' onFinish={handleAddEmployee} error={error}/>
      </Row>
      <Status messageStatus={status}/>
    </Container>
  )
}
