import { Link, Route, Routes } from 'react-router-dom'
import TestJotai from './TestJotai'
import TestZustnad from './TestZustand'
import React from 'react'

const StateIndex = React.memo(() => {
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
			<Routes>
				<Route path='jotai' element={<TestJotai />} />
				<Route path='zustand' element={<TestZustnad />} />
			</Routes>
		</div>
	)
})

export default StateIndex
