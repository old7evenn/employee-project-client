import { PlusCircleOutlined } from '@ant-design/icons'
import { Container } from '../../componets/container/Container'
import { CustomButton } from '../../componets/customButon/CustomButton'
import { Table } from 'antd'
import { useGetAllEmloyeesQuery } from '../../app/services/empoyeesApi'
import { columns } from './constEmployees'
import { useNavigate } from 'react-router-dom';
import { Paths } from './../../router/paths';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useEffect } from 'react'


export const Employees = () => {
	const { data, isLoading } = useGetAllEmloyeesQuery()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!user) navigate(Paths.login)
  }, [navigate, user])
  
  const addUser = () => navigate(Paths.employeeAdd)

	return (
		<Container>
			<CustomButton
				type='primary'
				onClick={addUser}
				icon={<PlusCircleOutlined />}

			>
				Add
			</CustomButton>
			<Table loading={isLoading} dataSource={data} pagination={false} columns={columns} rowKey={ (record) => record.id } onRow={(record) => {
        return {
          onClick: () => navigate(`${Paths.employee}/${record.id}`)
        }
      }}/>
		</Container>
	)
}
