import { useEffect, useState } from 'react'
import { Container } from '../../componets/container/Container'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../componets/customInput/CustomInput'
import { CustomButton } from '../../componets/customButon/CustomButton'
import { Link, useNavigate} from 'react-router-dom'
import { Paths } from '../../router/paths'
import { UserDataLogin, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMessage } from '../../utils/isErrorMessage'
import { ErrorMessage } from '../../componets/errorMessage/ErrorMessage'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'

export const Login = () => {
  const naigate = useNavigate()
  const [loginUser] = useLoginMutation()
  const [error, setError] = useState('')
  const user = useSelector(selectUser)

  useEffect(() => {
    if (user) naigate(Paths.home)
  }, [naigate, user])

  const login = async (data: UserDataLogin) => {
    try {
			await loginUser(data).unwrap()
			naigate(Paths.home)
		} catch (err) {
			const maybeError = isErrorWithMessage(err)
      
      console.log(err);
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
        <Card title='Login' style={{width: '30rem'}}>
          <Form onFinish={login} >
            <CustomInput name='email' type='email' placeholder='Email'/>
            <CustomInput name='password' type='password' placeholder='Password' dependencies={['password']}/>
            <CustomButton type='primary' htmlType='submit'>
              Login
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              <Space direction='horizontal' size='small'>
                Don't have an account?
                <Link to={Paths.register}>Register</Link>
              </Space>
            </Typography.Text>
            <ErrorMessage messageError={error}/>
          </Space>
        </Card>
      </Row>
    </Container>
  )
}
