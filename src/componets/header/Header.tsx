import { Layout, Space, Typography } from 'antd'
import style from './header.module.css'
import {
	LoginOutlined,
	LogoutOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { CustomButton } from '../customButon/CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from './../../router/paths'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../features/auth/authSlice'

export const Header = () => {
	const user = useSelector(selectUser)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onLogout = () => {
		dispatch(logout())
		localStorage.removeItem('token')
		navigate(Paths.login)
	}

	return (
		<Layout.Header className={style.header}>
			<Space>
				<TeamOutlined className={style.teamIcon} />
				<Link to={Paths.home}>
					<CustomButton type='ghost'>
						<Typography.Title level={1}>Employee</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			{user ? (
				<CustomButton type='ghost' icon={<LogoutOutlined />} onClick={onLogout}>
					Logout
				</CustomButton>
			) : (
				<Space>
					{window.location.pathname !== Paths.register && (
						<Link to={Paths.register}>
							<CustomButton type='ghost' icon={<UserOutlined />}>
								Register
							</CustomButton>
						</Link>
					)}
					{window.location.pathname !== Paths.login && (
						<Link to={Paths.login}>
							<CustomButton type='ghost' icon={<LoginOutlined />}>
								Login
							</CustomButton>
						</Link>
					)}
				</Space>
			)}
		</Layout.Header>
	)
}
