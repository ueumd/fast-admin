import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import TestJotai from './TestJotai'
import TestZustnad from './TestZustand'

import { useUserinfoStore } from '@/store/zustand/userinfoStore.ts'
import { useLocation } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { updateUserAtom } from '@/store/jotai/userinfoAtom.ts'

const StateIndex = React.memo(() => {
	const location = useLocation()
	const user = useUserinfoStore(state => state.user)
	const [userState, _] = useAtom(updateUserAtom)
	return (
		<div>
			<ul>
				<li>
					<Link to={'/jotai'}>jotai</Link>
				</li>
				<li>
					<Link to={'zustand'}>zustand</Link>
				</li>
			</ul>
			<div>
				<code>{location.pathname === '/zustand' ? JSON.stringify(user) : JSON.stringify(userState)}</code>
			</div>
			<hr />
			<Routes>
				<Route path='jotai' element={<TestJotai />} />
				<Route path='zustand' element={<TestZustnad />} />
			</Routes>
		</div>
	)
})

export default StateIndex
