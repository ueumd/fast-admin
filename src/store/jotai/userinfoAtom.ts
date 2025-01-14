import { atom } from 'jotai'

// interface IUserinfoAtom {
// 	user: {
// 		id: string
// 		superAdmin: number
// 		username: string
// 		realName: string
// 		gender: number
// 		mobile: string
// 		email: string
// 		avatar: string
// 		orgName: string
// 		postNameList: string[]
// 		createTime: string
// 	}
// 	authorityList: any[]
// 	token: string
// 	refreshToken: string
// }

type IUserinfoAtom = {
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
}

const initialUserinfoState: IUserinfoAtom = {
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
	refreshToken: ''
}

// 更新整个状态的 atom
export const updateUserInfoAtom = atom(
	get => get(userinfoAtom),
	(get, set, newState: Partial<IUserinfoAtom>) => {
		const currentState = get(userinfoAtom)
		set(userinfoAtom, {
			...currentState,
			...newState
		})
	}
)

// 更新用户信息的 atom
export const updateUserAtom = atom(
	get => get(userinfoAtom).user,
	(get, set, userUpdates: Partial<IUserinfoAtom['user']>) => {
		const currentState = get(userinfoAtom)
		set(userinfoAtom, {
			...currentState,
			user: {
				...currentState.user,
				...userUpdates
			}
		})
	}
)

// 更新权限列表的 atom
export const updateAuthorityListAtom = atom(
	get => get(userinfoAtom).authorityList,
	(get, set, newAuthorityList: any[]) => {
		const currentState = get(userinfoAtom)
		set(userinfoAtom, {
			...currentState,
			authorityList: newAuthorityList
		})
	}
)

// 更新 token 的 atom
export const updateTokensAtom = atom(null, (get, set, { token, refreshToken }: { token?: string; refreshToken?: string }) => {
	const currentState = get(userinfoAtom)
	set(userinfoAtom, {
		...currentState,
		...(token !== undefined && { token }),
		...(refreshToken !== undefined && { refreshToken })
	})
})

// 基础 atom
export const userinfoAtom = atom<IUserinfoAtom>(initialUserinfoState)
