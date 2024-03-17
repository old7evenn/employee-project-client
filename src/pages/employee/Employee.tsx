import React, { useState } from 'react'
import { Container } from '../../componets/container/Container'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetEmloyeeQuery, useRemoveEmloyeeMutation } from '../../app/services/empoyeesApi'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { Loading } from '../../componets/loading/Loading'
import { Paths } from '../../router/paths'
import { Descriptions, Divider, Modal, Space } from 'antd'
import { CustomButton } from '../../componets/customButon/CustomButton'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ErrorMessage } from '../../componets/errorMessage/ErrorMessage'
import { isErrorWithMessage } from '../../utils/isErrorMessage'

export const Employee = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('') 
  const params = useParams<{id: string}>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {data, isLoading} = useGetEmloyeeQuery(params.id || '')
  const [removeEmployee] = useRemoveEmloyeeMutation()
  const user = useSelector(selectUser)
  
  if (isLoading) return <Loading/>

  if (!data) return <Navigate to={Paths.home}/>

  const showModal = () => {
    setIsModalOpen(true)
  }

  const hideModal = () => {
    setIsModalOpen(false)
  }

  const handleDeleteUser = async () => {
    hideModal()
    try {
      await removeEmployee(data.id).unwrap()
      navigate(`${Paths.status}/deleted`)
    } catch (error) {
      const maybeError = isErrorWithMessage(error)
			if (maybeError) setError(error.data.message)
			setError('ERROR')
    }
  }
  
  return (
		<Container>
			<Descriptions title='Employee information' bordered>
				<Descriptions.Item label='Name' span={3}>
					{`${data.firstName} ${data.lastName}`}
				</Descriptions.Item>
				<Descriptions.Item label='Age' span={3}>
					{`${data.age}`}
				</Descriptions.Item>
				<Descriptions.Item label='Address' span={3}>
					{`${data.address}`}
				</Descriptions.Item>
			</Descriptions>
			{user?.id === data.userId && (
				<>
					<Divider orientation='left'>Action</Divider>
					<Space>
						<Link to={`${Paths.employeeEdit}/${data.id}`}>
							<CustomButton
								shape='round'
								type='default'
								icon={<EditOutlined />}
							>
								Edit
							</CustomButton>
						</Link>
						<CustomButton
							shape='round'
							danger
							onClick={showModal}
							icon={<DeleteOutlined />}
						>
							Delete
						</CustomButton>
					</Space>
				</>
			)}
			<ErrorMessage messageError={error} />
			<Modal
				title='Confirm delete'
				open={isModalOpen}
				onOk={handleDeleteUser}
				onCancel={hideModal}
				okText='OK'
				cancelText='Cancel'
			>
				You definitely want to delete an employee from the table?
			</Modal>
		</Container>
	)
}
