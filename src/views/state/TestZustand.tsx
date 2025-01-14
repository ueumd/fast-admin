import React from 'react'

import { useUserinfoStore } from '@/store/zustand/userinfoStore.ts'
import { Button } from 'antd'

const TestZustand = React.memo(() => {
	const userinfoStore = useUserinfoStore(state => state)
	const user = useUserinfoStore(state => state.user)
	const setUser = useUserinfoStore(state => state.setUser)
	const setToken = useUserinfoStore(state => state.setToken)

	const resetUserinfo = useUserinfoStore(state => state.resetUserinfo)

	const updateUserProfile = () => {
		setUser({
			id: '1',
			superAdmin: 1,
			username: 'newUsername' + Date.now(),
			realName: 'John Doe' + Date.now(),
			gender: 1,
			mobile: '1234567890',
			email: 'johndoe@example.com' + Date.now(),
			avatar: 'avatar123',
			orgName: 'Org A',
			postNameList: ['Admin', 'Manager', `${Date.now()}`],
			createTime: '2025-01-14'
		})

		setToken('newAccessToken123')
	}

	return (
		<div>
			<h1>User</h1>

			<div>
				<code>{JSON.stringify(user)}</code>
			</div>
			<hr />
			<h1>Userinfo</h1>
			<code>{JSON.stringify(userinfoStore)}</code>

			<p>avatar: {userinfoStore.user.avatar}</p>
			<p>Name: {userinfoStore.user.username}</p>
			<p>roleName: {userinfoStore.user.realName}</p>
			<p>Email: {userinfoStore.user.email}</p>
			<p>Status: {userinfoStore.user.superAdmin ? 'Logged In' : 'Logged Out'}</p>
			<p>
				authorityList: <code>{JSON.stringify(user.postNameList)}</code>
			</p>
			<Button type='primary' onClick={updateUserProfile} style={{ marginRight: '20px' }}>
				Update User Info
			</Button>

			<Button type='primary' onClick={resetUserinfo} style={{ marginRight: '20px' }}>
				resetUserinfo
			</Button>
		</div>
	)
})

export default TestZustand
