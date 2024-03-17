import { Layout } from 'antd'
import styles from './container.module.css'
import {Props} from '../../types'
import { Header } from '../header/Header'

export const Container = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <Header/>
      <Layout.Content style={{height: '100%'}}>
        {children}
      </Layout.Content>
    </div>
  )
}
