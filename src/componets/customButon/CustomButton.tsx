import { Form, Button } from 'antd'
import { Props } from '../../types'

export const CustomButton = ({
	children,
	htmlType,
	type,
	danger,
	loading,
	shape,
	icon,
	onClick,
}: Props) => {
	return (
		<Form.Item>
			<Button
				htmlType={htmlType}
				type={type}
				danger={danger}
				loading={loading}
				shape={shape}
				icon={icon}
				onClick={onClick}
			>
				{children}
			</Button>
		</Form.Item>
	)
}
