import { create } from 'zustand'

type TUserinfoState = {
	user: {
		id: string
		superAdmin: number
		username: string
		realName: string
		gender: number
		mobile: string
		email: string
		avatar: string
		orgName: string
		postNameList: string[]
		createTime: string
	}
	authorityList: any[]
	token: string
	refreshToken: string
	setUser: (user: TUserinfoState['user']) => void
	setAuthorityList: (authorityList: any[]) => void
	setToken: (token: string) => void
	setRefreshToken: (refreshToken: string) => void
}

const initialUserinfoState: TUserinfoState = {
	user: {
		id: '',
		superAdmin: 0,
		username: '',
		realName: '',
		gender: 0,
		mobile: '',
		email: '',
		avatar: 'avatar110',
		orgName: '',
		postNameList: [],
		createTime: ''
	},
	authorityList: [],
	token: '',
	refreshToken: '',
	setUser: () => {},
	setAuthorityList: () => {},
	setToken: () => {},
	setRefreshToken: () => {}
}

export const useUserinfoStore = create<TUserinfoState>(set => ({
	...initialUserinfoState,
	setUser: user => set(_ => ({ user })),
	setAuthorityList: authorityList => set(_ => ({ authorityList })),
	setToken: token => set(_ => ({ token })),
	setRefreshToken: refreshToken => set(_ => ({ refreshToken }))
}))
