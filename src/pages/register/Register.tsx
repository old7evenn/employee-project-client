import React, { useEffect, useState } from 'react'
import { Container } from '../../componets/container/Container'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../componets/customInput/CustomInput'
import { CustomButton } from '../../componets/customButon/CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../router/paths'
import { selectUser } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { useRegisterMutation } from '../../app/services/auth'
import { RregisterData } from '../../types'
import { isErrorWithMessage } from '../../utils/isErrorMessage'
import { ErrorMessage } from '../../componets/errorMessage/ErrorMessage'

export const Register = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [registerUser] = useRegisterMutation()
  const [error, setError] = useState('')


  useEffect(() => {
    if (user) navigate(Paths.home)
  },[navigate, user])

  const register = async (user: RregisterData) => {
    try {
      await registerUser(user).unwrap()
      navigate(Paths.home)
		} catch (err) {
			const maybeError = isErrorWithMessage(err)
			console.log(err)
      

			if (maybeError) {
				setError(err.data.message)
			} else {
        setError('ERROR')
			}
      setTimeout(() => {
        setError('')
      }, 1500)
		}
  }

  return (
		<Container>
			<Row align='middle' justify='center'>
				<Card title='Register' style={{ width: '30rem' }}>
					<Form onFinish={register}>
						<CustomInput name='name' type='name' placeholder='Name' />
						<CustomInput name='email' type='email' placeholder='Email' />
						<CustomInput
							name='password'
							type='password'
							placeholder='Password'
							dependencies={['password']}
						/>
						<CustomInput
							name='confirmPassword'
							type='password'
							placeholder='Confirm password'
							dependencies={['password']}
						/>
						<CustomButton type='primary' htmlType='submit'>
							Register
						</CustomButton>
					</Form>
					<Space direction='vertical' size='large'>
						<Typography.Text>
							<Space direction='horizontal' size='small'>
								Already have an account?
								<Link to={Paths.login}>Login</Link>
							</Space>
						</Typography.Text>
            <ErrorMessage messageError={error}/>
					</Space>
				</Card>
			</Row>
		</Container>
	)
}
