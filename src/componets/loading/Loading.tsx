import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './loading.module.css'

export const Loading = () => (
	<div className={styles.loadingContainer}>
		<Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
	</div>
)
