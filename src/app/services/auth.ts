import {api} from './api'
import { UserData } from '../../types'

export type UserDataRegister = Omit<UserData, 'id'>
export type UserDataLogin = Omit<UserData, 'name' | 'id'>
type ResponceLoginData = UserData & {token: string} 

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponceLoginData, UserDataLogin>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    }),
    register: builder.mutation<ResponceLoginData, UserDataRegister>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData
      })
    }),
    current: builder.query<ResponceLoginData, void>({
      query: () => ({
        url: '/user/current',
        method: 'GET',
      })
    })
  })
})

export const { useCurrentQuery, useLoginMutation, useRegisterMutation} = authApi

export const {endpoints: {login, register, current}} = authApi