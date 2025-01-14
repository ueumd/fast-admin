import { useAtom } from 'jotai'
import { Button } from 'antd'
import React from 'react'
import { userinfoAtom, updateUserAtom, updateUserInfoAtom } from '@/store/jotai/userinfoAtom.ts'

const TestJotai = React.memo(() => {
	const [userinfo, setUserinfo] = useAtom(userinfoAtom)
	const [user, setUser] = useAtom(updateUserAtom)

	const [_, setUserInfo] = useAtom(updateUserInfoAtom)

	const updateUserInfo = () => {
		setUserInfo({
			user: {
				id: '100' + Date.now(),
				superAdmin: 0,
				username: 'tom',
				realName: 'realName tom',
				gender: 0,
				mobile: '',
				email: 'hello@qq.com',
				avatar: 'avatar110' + Date.now(),
				orgName: '',
				postNameList: [],
				createTime: ''
			},
			authorityList: [111],
			token: 'token123',
			refreshToken: 'token456'
		})
	}

	const updateUserHandler = () => {
		setUser({
			username: 'newUsername' + Date.now(),
			email: 'johndoe@qq.com' + Date.now(),
			superAdmin: 0
		})
	}
	const updateUserinfoProfile = () => {
		setUserinfo({
			...userinfo,
			user: {
				...userinfo.user,
				username: 'Example update' + Date.now(),
				email: 'newEmail@example.com' + Date.now()
			},
			authorityList: [200, Date.now(), Date.now(), Date.now()]
		})
	}

	return (
		<div>
			<h1>User</h1>

			<div>
				<code>{JSON.stringify(user)}</code>
			</div>

			<Button type='primary' onClick={updateUserHandler}>
				update User Handler
			</Button>
			<hr />
			<h1>Userinfo</h1>
			<code>{JSON.stringify(userinfo)}</code>

			<p>avatar: {userinfo.user.avatar}</p>
			<p>Name: {userinfo.user.username}</p>
			<p>roleName: {userinfo.user.realName}</p>
			<p>Email: {userinfo.user.email}</p>
			<p>Status: {userinfo.user.superAdmin ? 'Logged In' : 'Logged Out'}</p>
			<p>
				authorityList: <code>{JSON.stringify(userinfo.authorityList)}</code>
			</p>
			<Button type='primary' onClick={updateUserInfo} style={{ marginRight: '20px' }}>
				Update User Info
			</Button>

			<Button type='primary' onClick={updateUserinfoProfile}>
				updateUserinfoProfile
			</Button>
		</div>
	)
})

export default TestJotai
